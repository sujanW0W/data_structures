export type NextNode = DoublyLinkedListNode | null;

export class DoublyLinkedListNode{
    prev : NextNode
    value: any
    next: NextNode

    constructor(value: any, prev: NextNode = null, next: NextNode = null){
        this.prev = prev;
        this.value = value;
        this.next = next;
    }

    toString(callback?: (value: any) => string): string{
        return callback ? callback(this.value) : `${this.value}`
    }
}