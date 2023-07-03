import { LinkedList } from "../linked_list";

describe('LinkedList', () => {
    it('should create an empty linked list', () => {
        const linkedList = new LinkedList()
        expect(linkedList.head).toBeNull();
        expect(linkedList.tail).toBeNull();
    })

    /**
     * Insertion Test
     */

    it('should create an linked list with a node', () => {
        const linkedList = new LinkedList()

        linkedList.append('first')
        expect(linkedList.toString()).toEqual('first')       
    })

    it('should perform all 3 kinds of insertion correctly', () => {
        const linkedList = new LinkedList()
        
        linkedList.append(1.0)
        linkedList.prepend(0.0)
        linkedList.insertAtPos(0.5, 1)
        linkedList.append(2.0)

        expect(linkedList.toString()).toEqual('0,0.5,1,2')
    })

    it('should append if the position given is out of the range', () => {
        const linkedList = new LinkedList()
        linkedList.append(1)
        linkedList.insertAtPos(2,0)
        linkedList.insertAtPos(2,3)
        linkedList.insertAtPos(3,3)

        expect(linkedList.toString()).toEqual('2,1,2,3')
    })

    /**
     * Deletion Test
     */

    it('should return null if trying to delete from an empty linked list', () => {
        const linkedList = new LinkedList()

        expect(linkedList.deleteHead()).toBeNull()
        expect(linkedList.deleteTail()).toBeNull()
    })

    it('should correctly delete only element from the linked list', () => {
        const linkedList = new LinkedList()

        linkedList.append(1)
        linkedList.deleteHead()

        expect(linkedList.head).toBeNull()
        expect(linkedList.tail).toBeNull()

        linkedList.append(2)
        linkedList.deleteTail()

        expect(linkedList.head).toBeNull()
        expect(linkedList.tail).toBeNull()
    })


    it('should delete from the beginning', () => {
        const linkedList = new LinkedList()
        const deletedNull = linkedList.deleteHead()
        expect(deletedNull).toBeNull()

        linkedList.append(1)
        linkedList.append(2)
        linkedList.append(3)

        const deletedNode = linkedList.deleteHead();
        expect(deletedNode?.toString()).toBe('1')
        expect(linkedList.toString()).toBe('2,3')
    })

    it('should delete from the end', () => {
        const linkedList = new LinkedList()

        linkedList.append(1)
        linkedList.append(2)
        linkedList.append(3)

        const deletedNode = linkedList.deleteTail();
        expect(deletedNode?.toString()).toBe('3')
        expect(linkedList?.toString()).toBe('1,2')
    })

    it('should delete from the specified position', () => {
        const linkedList = new LinkedList()

        linkedList.append(1)
        linkedList.append(2)
        linkedList.append(3)
        linkedList.append(4)

        const deletedNode = linkedList.deleteAtPos(2)
        expect(deletedNode?.toString()).toBe('3')
        expect(linkedList?.toString()).toBe('1,2,4')
    })

    /**
     * Searching Test
     */

    it('should find the node with given value', () => {
        const linkedList = new LinkedList()
        expect(linkedList.search(2)).toBeNull();

        linkedList.append(1)
        linkedList.append(2)
        linkedList.append(3)
        
        expect(linkedList.search(2)).toBeDefined()

        linkedList.deleteAtPos(1)
        expect(linkedList.search(2)).toBeNull();

    })

    it('should perform search operation with callback correctly', () => {
        const linkedList = new LinkedList()
        linkedList.append({key: 'key1', value: 'value1'})
        linkedList.append({key: 'key2', value: 'value2'})
        linkedList.append({key: 'key3', value: 'value3'})

        expect(linkedList.search()).toBeNull()

        const callback = (obj: any) => obj.key == 'key2'
        const test =linkedList.search(null, callback)
        expect(test?.value.value).toBe('value2')
    })


    /**
     * Reverse Test
     */
    it('should return the reversed linked list', () => {
        const linkedList = new LinkedList()
        linkedList.append(1)
        linkedList.append(2)
        linkedList.append(3)
        linkedList.append(4)

        expect(linkedList.toString()).toBe('1,2,3,4')
        expect(linkedList.head?.toString()).toBe(`1`)
        expect(linkedList.tail?.toString()).toBe(`4`)

        const reversedList = linkedList.reverse()
        expect(reversedList?.toString()).toBe('4,3,2,1')
        expect(reversedList?.head?.toString()).toBe(`4`)
        expect(reversedList?.tail?.toString()).toBe(`1`)

    })
})