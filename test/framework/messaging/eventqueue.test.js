describe('EventQueue', () => {

    it('should return an added event', () => {
        let q = new EventQueue();
        q.enqueue('a', 100);
        chai.expect(q.dequeue()).to.equal('a');
    });

    it('should return null when no events are available', () =>{
        let q = new EventQueue();
        chai.expect(q.dequeue()).to.equal(null);
    });

    it('should remove returned events', () => {
        let q = new EventQueue();
        q.enqueue(0, 0);
        q.dequeue();
        chai.expect(q.dequeue()).to.equal(null);
    });

    it('should remove events', () => {
        let q = new EventQueue();
        q.enqueue(123, 0);
        q.enqueue(456, 0);
        let r = q.remove(123);
        chai.expect(r).to.equal(true);
        chai.expect(q.dequeue()).to.equal(456);
    });

    it('should survive removal of non-existant events', () => {
        let q = new EventQueue();
        q.enqueue(0, 0);
        let r = q.remove(1);
        chai.expect(r).to.equal(false);
        chai.expect(q.dequeue()).to.equal(0);
    });

    it('should return events sorted', () => {
        let q = new EventQueue();
        q.enqueue(456, 10);
        q.enqueue(123, 5);
        q.enqueue(789, 15);
        chai.expect(q.dequeue()).to.equal(123);
        chai.expect(q.dequeue()).to.equal(456);
        chai.expect(q.dequeue()).to.equal(789);
    });

    it('should compute elapsed time', () => {
        let q = new EventQueue();
        q.enqueue(456, 10);
        q.enqueue(123, 5);
        q.enqueue(789, 15);
        q.dequeue();
        q.dequeue();
        q.dequeue();
        chai.expect(q.time).to.equal(15);
    });
});