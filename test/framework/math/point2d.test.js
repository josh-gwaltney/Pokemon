describe('Point2D', () => {

    describe('create a new 2D point', () => {
        let point = new Point2D(1, 1);

        it('should have x and y coordinates', () => {
            chai.expect(point.x).to.equal(1);
            chai.expect(point.y).to.equal(1);
        });

    });

    describe('x coordinate missing', () => {
        let point = () => {
            new Point2D();
        };

        it('should throw an error', () => {
            chai.expect(point).to.throw('Error: x cannot be null');
        });
    });

    describe('y coordinate missing', () => {
        let point = () => {
            new Point2D(1);
        };

        it('should throw an error', () => {
            chai.expect(point).to.throw('Error: y cannot be null');
        });
    });

    describe('x coordinate not a number', () => {
        let point = () => {
            new Point2D('a', 1);
        };

        it('should throw an error', () => {
            chai.expect(point).to.throw('Error: x must be a number');
        });
    });

    describe('y coordinate not a number', () => {
        let point = () => {
            new Point2D(1, 'a');
        };

        it('should throw an error', () => {
            chai.expect(point).to.throw('Error: y must be a number');
        });
    });
});