describe('Queue', () => {

    describe('enqueue an element', () => {
        let queue = new Queue();
        queue.enqueue(1);

        it('should have a length of 1', () => {
           chai.expect(queue.length).to.equal(1);
        });
    });

    describe('dequeue an element', () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.dequeue();

        it('should have a length of 0', () => {
            chai.expect(queue.length).to.equal(0);
        });
    });

    describe('dequeue the first element added', () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        let data = queue.dequeue();

        it('should have a value of 1 and the length should be 1', () => {
            chai.expect(queue.length).to.equal(1);
            chai.expect(data).to.equal(1);
        });
    });

    describe('peek for elements', () => {
        let queue = new Queue();
        queue.enqueue(1);

        it('should return true', () => {
            chai.expect(queue.peek()).to.equal(true);
        });
    })
});