/**
 * Queue
 */

export class Queue<T>{
    list: T[]

    constructor(){
        this.list = []
    }

    /**
     * Enqueue - Adds item into the queue.
     */
    enqueue(item: T): void{
        this.list = [...this.list, item]
    }

    /**
     * Dequeue - Removes item from the queue
     */
    dequeue(): T | null{
        if(this.isEmpty())
            return null;
        
        let item = this.list[0]
        this.list.slice(1)
        return item
    }

    /**
     * Check if the queue is empty?
     */
    isEmpty(): boolean{
        return this.list.length === 0 
    }

    /**
     * Return the size of the queue.
     */
    size(): number{
        return this.list.length
    }

    /**
     * 
     * @returns {Array}
     * Returns an array representation of the queue. 
     */
    toArray(): T[]{
        return this.list
    }
}