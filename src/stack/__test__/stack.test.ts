import {Stack} from '../stack'

describe('Stack', () => {
    it('should create an empty Stack', () => {
        const stack = new Stack();
        expect(stack).not.toBeNull();
        expect(stack.data).not.toBeNull();
    })

    it('should stack the data to stack', () => {
        const stack = new Stack();

        stack.push(1);
        stack.push(2);

        expect(stack.toArray()).toEqual([1,2])
    })

    it('should check if the stack is Empty', () => {
        const stack = new Stack()
        expect(stack.isEmpty()).toBe(true)

        stack.push('first Item')
        expect(stack.isEmpty()).toBe(false)
    })

    it('should pop the data from the stack', () => {
        const stack = new Stack()
        stack.push(1)
        stack.push(2)

        expect(stack.size()).toBe(2)
        expect(stack.pop()).toBe(2)
        expect(stack.pop()).toBe(1)
        expect(stack.pop()).toBeNull()
        
    })

    it('should peek the top-most data', () => {
        const stack = new Stack()
        
        expect(stack.peek()).toBeNull()

        stack.push('one')
        stack.push('two')
        expect(stack.peek()).toBe('two')
    })
    
    it('should be possible to push/pop objects', () => {
        const stack = new Stack()
        stack.push({key: 'key1', value: 'value1' })
        stack.push({key: 'key2', value: 'value2' })


        const stringifier = (item: any) => `${item.key}:${item.value}`
        expect(stack.toString(stringifier)).toBe('key2:value2,key1:value1')

        expect(stack.pop().value).toBe('value2')
    })

    it('should be possible to convert stack to array', () => {
        const stack = new Stack();
        stack.push(1)
        stack.push(2)
        stack.push(3)


        expect(stack.toArray()).toEqual([1,2,3])
    })

})