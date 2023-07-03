import { DoublyLinkedListNode, NextNode } from "./doubly_linked_list_node";

export class DoublyLinkedList{
    head: NextNode
    tail: NextNode
    comparator: (a: any,b: any) => number

    constructor(comparator?: (a:any, b:any) => number){
        this.head = null
        this.tail = null
        this.comparator = comparator || defaultComparator
    }

    /**
     * Almost all operations are similar and implemented with similar concepts.  
     */
 
    /**
     * Insertion
     */
    prepend(value: any){
        const newNode = new DoublyLinkedListNode(value, null, this.head)

        if(this.head){
            this.head.prev = newNode
        }

        this.head = newNode;

        if(!this.tail)
            this.tail = newNode;

        return this;
    }

    append(value: any){
        const newNode = new DoublyLinkedListNode(value, this.tail, null)

        if(!this.head)
            this.head = newNode;
        
        if(this.tail){
            this.tail.next = newNode;
        }
        
        this.tail = newNode;

        return this;
    }

    insertAtPos(value: any, pos: number){
        const newNode = new DoublyLinkedListNode(value)

        let node: NextNode = this.head

        if(node == null || pos === 0){
            this.prepend(value)
            return this;
        }

        let i = 0;
        while(node != null){
            if(i === pos){
                newNode.prev = node.prev
                newNode.next = node

                node.prev && (node.prev.next = newNode)
                node.prev = newNode

                return this
            }
            else{
                i++;
                node = node.next
            }
        }

        //if the position is out of the range
        this.append(value)

        return this;
    }


    /**
     * Deletion
     */
    deleteHead(): NextNode{
        let deleted: DoublyLinkedListNode;
        
        if(!this.head) return null;

        deleted = this.head;
        this.head = this.head.next

        if(this.head == null){
            this.tail = null;
        }
        else{
            this.head.prev = null;
        }

        return deleted;
    }

    deleteTail(): NextNode{
        let deleted: DoublyLinkedListNode;

        if(!this.tail) return null;

        deleted = this.tail;
        this.tail = this.tail.prev

        if(this.tail == null){
            this.head = null;
        }
        else{
            this.tail.next = null;
        }

        return deleted;
    }

    deleteAtPos(pos: number): NextNode{
        let deleted: NextNode;

        if(!this.head) return null;

        if(pos === 0){
            deleted = this.deleteHead()
            return deleted
        }

        let node: NextNode = this.head
        let i = 0;

        while(node != null){
            if(i === pos){
                deleted = node;

                node.prev && (node.prev.next = node.next)

                if(node == this.tail){
                    this.tail = this.tail.prev;
                }
                else{
                    node.next && (node.next.prev = node.prev)
                }
                return deleted;
            }
            else{
                i++;
                node = node.next
            }
        }

        return this.deleteTail();

    }


    /**
     * Searching
     */
    search(value?: any, callback?: (value: any) => boolean): NextNode{
        if(!this.head) return null;

        let node: NextNode = this.head;

        while(node != null){
            if(callback && callback(node.value)){
                return node;
            }

            if(value && this.comparator(node.value, value) === 0){
                return node;
            }

            node = node.next
        }

        return null;
    }



    /**
     * Reverse
     */
    reverse(): DoublyLinkedList {
        if(!this.head) return this;

        let prevNode: NextNode = null;
        let curNode: NextNode = this.head;
        let nextNode: NextNode = this.head.next 

        while(curNode != null){
            curNode.next = prevNode;
            curNode.prev = nextNode;

            prevNode = curNode;
            curNode = nextNode;
            nextNode = nextNode && nextNode.next
        }

        this.tail = this.head;
        this.head = prevNode;

        return this;
    }


    /**
     * an array representation of a doubly linked list
     */
    toArray(): DoublyLinkedListNode[]{
        const array: DoublyLinkedListNode[] = [];

        let node: NextNode = this.head;
        while(node != null){
            array.push(node)
            node = node.next
        }

        return array
    }

    /**
     * a string representation of values of doubly linked list
     */
    toString(callback?: (value: any) => string): string{
        return this.toArray().map( node => node.toString(callback)).join(',')
    }


}

function defaultComparator(a:any, b:any){
    return a === b ? 0 : (a > b ? 1 : -1)
}