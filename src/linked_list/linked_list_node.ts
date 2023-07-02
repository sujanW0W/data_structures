export type NextNode = LinkedListNode | null;

export class LinkedListNode{
    value: any;
    next: NextNode;

    constructor(value: any, next: NextNode = null ){
        this.value = value
        this.next = next
    }

    toString(callback?: (value: any) => string): string {
        return callback ? callback(this.value) : `${this.value}`
    }
}