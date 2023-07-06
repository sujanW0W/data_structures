import { LinkedList } from "../linked_list/linked_list";

/**
 * Hash table size directly affects the number of collisions.
 * The bigger the size of the table, the less collisions that will occur.
 * 
 * Also, Linked list is being used as Separate Chaining is used as Collision Resolution.
 */

const defaultHashTableSize = 30;

export class HashTable{
    buckets: LinkedList[];
    keys: {
        [key: string]: number
    }

    /**
     * 
     * @param {number} hashTableSize 
     */
    constructor(hashTableSize = defaultHashTableSize){
        // Create the hash table of provided size and fill each bucket with linked list. 
        this.buckets = Array(hashTableSize).fill(null).map( () => new LinkedList())

        //An object to keep track of all the keys.
        this.keys = {}
    }

    /**
     * Converts key string into the hash number.
     * 
     * @param {string} key 
     * @return {number}
     */
    hashFunction(key: string): number{
        //Lets use a simple hash function - Hashing by division.
        // The key string is split into characters and their equivalent number is added to get key, which go through modulus to get hash.

        const hash: number = Array.from(key).reduce( 
            (accumulator: number, keyCharacter: string): number => accumulator + keyCharacter.charCodeAt(0)
        , 0)
        
        return hash % this.buckets.length
    }

    /**
     * Set the value or if exists, update
     * @param {string} key 
     * @param {any} value
     */
    set(key: string, value: any): void{
        const keyHash = this.hashFunction(key);
        
        //Add key into the keys object
        this.keys[key] = keyHash;

        const bucketLinkedList = this.buckets[keyHash]

        //Callback to compare the keys and find node with matching key
        const callback = (obj: any) => obj.key === key
        const node = bucketLinkedList.search(null, callback)

        if(!node){
            bucketLinkedList.append({key, value})
        }
        else{
            node.value.value = value
        }
    }

    /**
     * Delete node with key
     * @param {string} key 
     * @returns {LinkedListNode} deleted node
     */
    delete(key: string){
        const keyHash = this.hashFunction(key);

        const bucketLinkedList = this.buckets[keyHash];

        //Callback to find matching node
        const callback = (obj: any) => obj.key === key
        const node = bucketLinkedList.search(null, callback)

        if(!node){
            return null
        }

        const keysOfList: string[] = []
        bucketLinkedList.toArray().forEach( ({value, next}) => keysOfList.push(value.key))
        const position = keysOfList.indexOf(key)
        const deleted =  bucketLinkedList.deleteAtPos(position)

        //Delete from the keys
        delete(this.keys[key])

        return deleted
    }

    /**
     * Get the value corresponding to the provided key
     * @param key {string}
     * @returns value {any}
     */
    get(key: string){
        const keyHash = this.hashFunction(key)
        const bucketLinkedList = this.buckets[keyHash];

        const node = bucketLinkedList.search(null, (obj: any) => obj.key === key)

        return node ? node.value.value : null
    }

    has(key: string){
        return this.keys.hasOwnProperty(key)
    }

    /**
     * 
     * @returns {string[]} keys
     */
    getKeys(): string[]{
        return Object.keys(this.keys)
    }

    /**
     * Get all the values in the table
     * @returns {string[]} values
     */
    getValues(): any[]{
        const values: any[] = []

        this.buckets.forEach( (bucketLinkedList) => {
            bucketLinkedList.toArray().forEach( ( {value, next} ) => values.push(value.value))
        })

        return values;
    }

}