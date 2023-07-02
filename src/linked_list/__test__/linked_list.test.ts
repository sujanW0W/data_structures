import { LinkedList } from "../linked_list";
import { LinkedListNode } from "../linked_list_node";

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
})