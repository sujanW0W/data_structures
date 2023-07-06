import {HashTable} from "../hash_table";

describe('Hash Table', () => {
    it('should create hash table of certain size', () => {
        const defaultHashTable = new HashTable()
        expect(defaultHashTable.buckets.length).toBe(30)

        const customHashTable = new HashTable(64)
        expect(customHashTable.buckets.length).toBe(64)
    })

    it('should generate proper hash for specific keys', () => {
        const hashTable = new HashTable();

        expect(hashTable.hashFunction('a')).toBe(7)
        expect(hashTable.hashFunction('b')).toBe(8)
        expect(hashTable.hashFunction('abc')).toBe(24)
    })

    it('should set, read and delete data with collisions', () => {
        const hashTable = new HashTable(3);

        expect(hashTable.hashFunction('a')).toBe(1)
        expect(hashTable.hashFunction('b')).toBe(2)
        expect(hashTable.hashFunction('c')).toBe(0)
        expect(hashTable.hashFunction('d')).toBe(1)

        hashTable.set('a', 'first')
        hashTable.set('b', 'second')
        hashTable.set('c', 'third')
        hashTable.set('d', 'fourth')
        hashTable.set('e', 'fifth')
        hashTable.set('f', 'sixth')

        expect(hashTable.has('x')).toBe(false)
        expect(hashTable.has('a')).toBe(true)
        expect(hashTable.has('e')).toBe(true)

        const stringifier = (value: any) => `${value.key}:${value.value}`
        
        expect(hashTable.buckets[0].toString(stringifier)).toBe('c:third,f:sixth')
        expect(hashTable.buckets[1].toString(stringifier)).toBe('a:first,d:fourth')
        expect(hashTable.buckets[2].toString(stringifier)).toBe('b:second,e:fifth')

        hashTable.set('a', 'a-apple')
        expect(hashTable.buckets[1].toString(stringifier)).toBe('a:a-apple,d:fourth')

        expect(hashTable.get('a')).toBe('a-apple')
        expect(hashTable.get('b')).toBe('second')
        expect(hashTable.get('x')).toBeNull()

        hashTable.delete('a')
        expect(hashTable.get('a')).toBeNull()
        expect(hashTable.get('d')).toBe('fourth')

        expect(hashTable.delete('non-existing')).toBeNull();

        hashTable.set('d', 'dont be dogmatic, be liberal')
        expect(hashTable.get('d')).toBe('dont be dogmatic, be liberal')

    })

    it('should be possible to add objects to hash table', () => {
        const hashTable = new HashTable();

        hashTable.set('objectKey', {prop1:1, prop2:2})

        const object = hashTable.get('objectKey')

        expect(object).toBeDefined;
        expect(object.prop1).toBe(1)
        expect(object.prop2).toBe(2)

        expect(Object.keys(object)).toEqual(['prop1','prop2'])
        expect(Object.values(object)).toEqual([1,2])

        expect(object).toEqual({prop1:1,prop2:2})
    })

    it('should track the actual keys correctly', () => {
        const hashTable = new HashTable(3)
        hashTable.set('a', 'apple')
        hashTable.set('b', 'ball')
        hashTable.set('c', 'cat')
        hashTable.set('d', 'dog')

        expect(hashTable.getKeys()).toEqual(['a', 'b', 'c', 'd'])
        expect(hashTable.has('a')).toBe(true)
        expect(hashTable.has('c')).toBe(true)

        hashTable.delete('a')
        expect(hashTable.has('a')).toBe(false)
        expect(hashTable.has('c')).toBe(true)

    })

    it('should get all the values', () => {
        const hashTable = new HashTable(3)
        hashTable.set('a', 'apple')
        hashTable.set('b', 'ball')
        hashTable.set('c', 'cat')
        hashTable.set('d', 'dog')

        expect(hashTable.getValues()).toEqual(['cat', 'apple', 'dog', 'ball'])
    })

    it('should return empty array when nothing is set', () => {
        const hashTable = new HashTable()
        expect(hashTable.getValues()).toEqual([])
        expect(hashTable.getKeys()).toEqual([])

    })
})