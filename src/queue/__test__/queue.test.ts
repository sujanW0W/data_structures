import {Queue} from '../queue'

describe('Queue', () => {
    it('should create an empty queue', () => {
        const queue = new Queue()

        expect(queue).not.toBeNull()
        expect(queue.list).not.toBeNull()
    })

    it('should add elements into the queue(Enqueue)', () => {
        const queue = new Queue();
        queue.enqueue(1)
        queue.enqueue(2);

        expect(queue.toArray()).toEqual([1,2])

    })

    it('should remove element from the queue(Dequeue)', () => {
        const queue = new Queue()
        queue.enqueue(1)
        queue.enqueue(2)

        expect(queue.size()).toBe(2)
        expect(queue.dequeue()).toBe(1)
        expect(queue.size()).toBe(1)
        expect(queue.dequeue()).toBe(2)
        expect(queue.dequeue()).toBeNull()
    })

    it('should test if the queue is empty', () => {
        const queue = new Queue()

        expect(queue.isEmpty()).toBe(true)

        queue.enqueue(1)
        expect(queue.isEmpty()).toBe(false)
        queue.dequeue()
        expect(queue.isEmpty()).toBe(true)

    })

    it('should return the size of the queue', () => {
        const queue = new Queue()

        expect(queue.size()).toBe(0)

        queue.enqueue('one')
        queue.enqueue('two')

        expect(queue.size()).toBe(2)
    })

    it('should return an array representation of the queue', () => {
        const queue = new Queue()
        queue.enqueue('one')
        queue.enqueue('two')

        expect(queue.toArray()).toEqual(['one','two'])
    })

    it('first item enqueued must be first to be dequeued', () => {
        const queue = new Queue()
        const item1 = {foo: 'bar'}
        const item2 = {x: 'y'}

        queue.enqueue(item1)
        queue.enqueue(item2)

        expect(queue.dequeue()).toEqual(item1)
        expect(queue.dequeue()).toEqual(item2)
    })

    it('should return the string representation of the queue', () => {
        const queue = new Queue();

        queue.enqueue(1)
        queue.enqueue(2)
        queue.enqueue(3)

        expect(queue.toString()).toBe('1,2,3')
    })
})