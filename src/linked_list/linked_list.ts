import { NextNode, LinkedListNode } from "./linked_list_node";

export class LinkedList{
    head: NextNode
    tail: NextNode
    comparator : (a: any ,b: any) => number

    constructor(comparator ?: (a: any,b: any) => number){
        this.head = null
        this.tail = null
        this.comparator = comparator || defaultComparator;
    }

    /**
     * Insertion of a new node into the linked list
     * 
     * Insertion can be done in 3 ways:
     *      - At the beginning (Prepend)
     *      - At the end (Append)
     *      - At the given position (insertAtPos)
     */

    /**
     * Prepend - Insertion at the beginning
     * @params {any} value
     * @returns LinkedList
     */
    prepend( value: any){
        const newNode = new LinkedListNode(value, this.head)
        
        this.head = newNode

        if(!this.tail)
            this.tail = newNode

        return this;
    }

    /**
     * Append - Insertion at the end
     * @params {any} value
     * @returns LinkedList
     */
    append(value: any){
        const newNode = new LinkedListNode(value, null)

        if(!this.head){
            this.head = newNode
        }
        
        if(this.tail){
            this.tail.next = newNode
        }
        
        this.tail = newNode

        return this;
    }

    /**
     * Insert at the given postition
     * 
     * Here, we assume that the position given is the index, it means position start with Zero.
     * 
     * @params {any} value, {number} position
     * @returns LinkedList
     */
    insertAtPos(value: any, pos: number){
        pos = pos < 0 ? 0 : pos;

        if(!this.head || pos === 0){
            this.prepend(value)
            return this
        }

        const newNode = new LinkedListNode(value)
        
        let node: NextNode = this.head
        let i = 0;

        while(node != null){
            if(i == pos - 1){
                newNode.next = node.next;
                node.next = newNode;
                if(newNode.next == null)
                    this.tail = newNode
                return this;
            }

            i++;
            node = node.next;
        }

        this.append(value)

        return this;        
    }


    /**
     * Deletion of node from the linked list
     * 
     * Similar to insertion, deletion can also be done in three different ways:
     *      - Deletion from the beginning (deleteHead)
     *      - Deletion from the end (deleteTail)
     *      - Deletion from the given position (deleteAtPos)
     */

    /**
     * Deletion from the beginning
     */
    deleteHead(): NextNode {
        if(!this.head)
            return null

        const deleted = this.head
        this.head = this.head.next
        if(this.head == null)
            this.tail = null;

        return deleted
    }

    /**
     * Deletion from the end
     */
    deleteTail(): NextNode {
        let deleted: NextNode = this.tail;

        if(!this.head)
            return null;
        
        if(this.head == this.tail){
            this.head = null;
            this.tail = null;
        }
        else{
            let node: NextNode = this.head;

            while(node.next && node.next != this.tail){
                node = node.next
            }

            node.next = null;
            this.tail = node;
        }

        return deleted
    }

    /**
     * Deletion from the specified position
     * @param (position)
     */
    deleteAtPos(pos: number): NextNode{
        let deletedNode: NextNode;

        if(!this.head){
            return null;
        }

        if(pos === 0){
            return this.deleteHead()
        }

        let node: NextNode = this.head;
        let i = 0;
        
        while(node.next != null){
            if(i === pos-1){
                deletedNode = node.next
                node.next = deletedNode.next
                if(deletedNode == this.tail)
                    this.tail = node   
                    
                return deletedNode;
            }
            else{  
                i++;
                node = node.next
            }
        }

        //if the position is out of the range, delete the last node.
        return this.deleteTail()
    }


    /**
     * Find an element in the linked list
     */



    /**
     * Reverse a linked list
     */



    /**
     * Returns an array representation of the linked list
     * @returns array of LinkedList
     */
    toArray(): LinkedListNode[] {
        const array = [];

        let node = this.head;
        while(node != null){
            array.push(node)
            node = node.next;
        }

        return array;
    }

    toString(callback ?: (value: any) => string): string{
        return this.toArray().map( node => node.toString(callback)).join(',')
    }

}

function defaultComparator(a:any, b:any): number {
    if(a === b) return 0;

    return a > b ? 1 : -1
}