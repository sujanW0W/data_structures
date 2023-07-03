import { DoublyLinkedList } from "../doubly_linked_list";

describe('DoublyLinkedList', () => {
    it('should create an empty doubly linked list', () => {
        const doublyLinkedList = new DoublyLinkedList()
        expect(doublyLinkedList.head).toBeNull();
        expect(doublyLinkedList.tail).toBeNull();
    })

    /**
     * Insertion Test
     */

    it('should create an doubly linked list with a node', () => {
        const doublyLinkedList = new DoublyLinkedList()

        doublyLinkedList.append('first')
        expect(doublyLinkedList.toString()).toEqual('first')       
    })

    it('should perform all 3 kinds of insertion correctly', () => {
        const doublyLinkedList = new DoublyLinkedList()
        
        doublyLinkedList.append(1.0)
        doublyLinkedList.prepend(0.0)
        doublyLinkedList.insertAtPos(0.5, 1)
        doublyLinkedList.append(2.0)

        expect(doublyLinkedList.toString()).toEqual('0,0.5,1,2')
    })

    it('should append if the position given is out of the range', () => {
        const doublyLinkedList = new DoublyLinkedList()
        doublyLinkedList.append(1)
        doublyLinkedList.insertAtPos(2,0)
        doublyLinkedList.insertAtPos(2,3)
        doublyLinkedList.insertAtPos(3,3)

        expect(doublyLinkedList.toString()).toEqual('2,1,2,3')
    })


     /**
     * Deletion Test
     */

     it('should return null if trying to delete from an empty doubly linked list', () => {
        const doublyLinkedList = new DoublyLinkedList()

        expect(doublyLinkedList.deleteHead()).toBeNull()
        expect(doublyLinkedList.deleteTail()).toBeNull()
    })

    it('should correctly delete only element from the doubly linked list', () => {
        const doublyLinkedList = new DoublyLinkedList()

        doublyLinkedList.append(1)
        doublyLinkedList.deleteHead()

        expect(doublyLinkedList.head).toBeNull()
        expect(doublyLinkedList.tail).toBeNull()

        doublyLinkedList.append(2)
        doublyLinkedList.deleteTail()

        expect(doublyLinkedList.head).toBeNull()
        expect(doublyLinkedList.tail).toBeNull()
    })


    it('should delete from the beginning', () => {
        const doublyLinkedList = new DoublyLinkedList()
        const deletedNull = doublyLinkedList.deleteHead()
        expect(deletedNull).toBeNull()

        doublyLinkedList.append(1)
        doublyLinkedList.append(2)
        doublyLinkedList.append(3)

        const deletedNode = doublyLinkedList.deleteHead();
        expect(deletedNode?.toString()).toBe('1')
        expect(doublyLinkedList.toString()).toBe('2,3')
    })

    it('should delete from the end', () => {
        const doublyLinkedList = new DoublyLinkedList()

        doublyLinkedList.append(1)
        doublyLinkedList.append(2)
        doublyLinkedList.append(3)

        const deletedNode = doublyLinkedList.deleteTail();
        expect(deletedNode?.toString()).toBe('3')
        expect(doublyLinkedList?.toString()).toBe('1,2')

    })

    it('should delete from the specified position', () => {
        const doublyLinkedList = new DoublyLinkedList()

        doublyLinkedList.append(1)
        doublyLinkedList.append(2)
        doublyLinkedList.append(3)
        doublyLinkedList.append(4)

        const deletedNode = doublyLinkedList.deleteAtPos(2)
        expect(deletedNode?.toString()).toBe('3')
        expect(doublyLinkedList?.toString()).toBe('1,2,4')
    })


      /**
     * Searching Test
     */

      it('should find the node with given value', () => {
        const doublyLinkedList = new DoublyLinkedList()
        expect(doublyLinkedList.search(2)).toBeNull();

        doublyLinkedList.append(1)
        doublyLinkedList.append(2)
        doublyLinkedList.append(3)
        
        expect(doublyLinkedList.search(2)).toBeDefined()

        doublyLinkedList.deleteAtPos(1)
        expect(doublyLinkedList.search(2)).toBeNull();

    })

    it('should perform search operation with callback correctly', () => {
        const doublyLinkedList = new DoublyLinkedList()
        doublyLinkedList.append({key: 'key1', value: 'value1'})
        doublyLinkedList.append({key: 'key2', value: 'value2'})
        doublyLinkedList.append({key: 'key3', value: 'value3'})

        expect(doublyLinkedList.search()).toBeNull()

        const callback = (obj: any) => obj.key == 'key2'
        const test =doublyLinkedList.search(null, callback)
        expect(test?.value.value).toBe('value2')
    })



     /**
     * Reverse Test
     */
     it('should return the reversed linked list', () => {
        const doublyLinkedList = new DoublyLinkedList()

        expect(doublyLinkedList.reverse().toArray()).toEqual([])

        doublyLinkedList.append(1)
        doublyLinkedList.append(2)
        doublyLinkedList.append(3)
        doublyLinkedList.append(4)

        expect(doublyLinkedList.toString()).toBe('1,2,3,4')
        expect(doublyLinkedList.head?.toString()).toBe(`1`)
        expect(doublyLinkedList.tail?.toString()).toBe(`4`)

        const reversedList = doublyLinkedList.reverse()
        expect(reversedList?.toString()).toBe('4,3,2,1')
        expect(reversedList?.head?.toString()).toBe(`4`)
        expect(reversedList?.tail?.toString()).toBe(`1`)

    })


})