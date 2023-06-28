/**
 * Stack
 * 
 */

export class Stack{

    data: any[];

    constructor(){
        this.data = [];
    }

    /**
     * Push - Adds element at the top of the stack.
     */
    push( element: any): void{
        this.data.push(element)
    }

    /**
     * Pop - Removes element from the top of the stack
     */
    pop(): any | null {
        if(this.isEmpty())
            return null;

        return this.data.pop()
    }

    /**
     * Peek - Return the top-most element of the stack. If stack is empty, return null.
     */
    peek(): null | any{
        return this.isEmpty() ? null : this.data[this.size() - 1]
    }

    /**
     * Return the size of the stack
     */
    size(): number{
        return this.data.length
    }

    /**
     * Check if the stack is empty?
     */
    isEmpty(): boolean{
        return this.data.length === 0 
    }

    /**
     * Returns an array representation of the stack.
     * 
     */
    toArray(): any[] {
        return this.data;
    }

}