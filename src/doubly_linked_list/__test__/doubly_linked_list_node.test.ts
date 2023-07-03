import { DoublyLinkedListNode } from "../doubly_linked_list_node";

describe('DoublyLinkedListNode', () => {
    it('should create a node with given value', () => {
        const newNode = new DoublyLinkedListNode(20);

        expect(newNode.value).toBe(20)
        expect(newNode.next).toBeNull()
    })

    it('should create a node with object as value', () => {
        const newNode = new DoublyLinkedListNode({key: 'key1', value: 'value1'})

        expect(newNode.value.key).toBe('key1')
        expect(newNode.value.value).toBe('value1')
        expect(newNode.value).toEqual({key:'key1', value:'value1'})

        expect(newNode.next).toBeNull()
    })

    it('should link nodes', () => {
        const newNode1 = new DoublyLinkedListNode('first')
        const newNode2 = new DoublyLinkedListNode('second', newNode1)
        
        newNode1.next = newNode2;

        expect(newNode1.prev).toBeNull();
        expect(newNode1.next).not.toBeNull();
        expect(newNode1.next).toBeDefined()
        expect(newNode1.next).toBeInstanceOf(DoublyLinkedListNode)

        expect(newNode1.value).toBe('first')
        expect(newNode1.next && newNode1.next.value).toBe('second')  

        expect(newNode2.next).toBeNull();
        expect(newNode2.prev).not.toBeNull();
        expect(newNode2.prev).toBeDefined();
        expect(newNode2.prev).toBeInstanceOf(DoublyLinkedListNode)

        expect(newNode2.value).toBe('second')
        expect(newNode2.prev?.value).toBe('first')
    })

    it('should convert node to string', () => {
        const newNode = new DoublyLinkedListNode(1)

        expect(newNode.toString()).toBe('1')
    })

    it('should convert node to string with custom stringifier', () => {
        const obj = {key: 'key1', value: 'value1'}
        const newNode = new DoublyLinkedListNode(obj)

        const stringifier = (value: any) => `key: ${value.key}, value: ${value.value}`
        expect(newNode.toString(stringifier)).toBe(`key: key1, value: value1`)
    })
})