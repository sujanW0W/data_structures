import { LinkedListNode } from "../linked_list_node";

describe('LinkedListNode', () => {
    it('should create a node with given value', () => {
        const newNode = new LinkedListNode(20);

        expect(newNode.value).toBe(20)
        expect(newNode.next).toBeNull()
    })

    it('should create a node with object as value', () => {
        const newNode = new LinkedListNode({key: 'key1', value: 'value1'})

        expect(newNode.value.key).toBe('key1')
        expect(newNode.value.value).toBe('value1')
        expect(newNode.value).toEqual({key:'key1', value:'value1'})

        expect(newNode.next).toBeNull()
    })

    it('should link nodes', () => {
        const newNode2 = new LinkedListNode('second')
        const newNode1 = new LinkedListNode('first', newNode2)

        expect(newNode1.next).not.toBeNull();
        expect(newNode1.next).toBeDefined()
        expect(newNode1.next).toBeInstanceOf(LinkedListNode)

        expect(newNode1.value).toBe('first')
        expect(newNode1.next && newNode1.next.value).toBe('second')  
    })

    it('should convert node to string', () => {
        const newNode = new LinkedListNode(1)

        expect(newNode.toString()).toBe('1')
    })

    it('should convert node to string with custom stringifier', () => {
        const obj = {key: 'key1', value: 'value1'}
        const newNode = new LinkedListNode(obj)

        const stringifier = (value: any) => `key: ${value.key}, value: ${value.value}`
        expect(newNode.toString(stringifier)).toBe(`key: key1, value: value1`)
    })
})