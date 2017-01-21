describe('Point3D', () => {
    describe('create a new 3D point', () => {
        let point = new Point3D(1, 1, 1);

        it('should have x, y and z coordinates', () => {
            chai.expect(point.x).to.equal(1);
            chai.expect(point.y).to.equal(1);
            chai.expect(point.z).to.equal(1);
        });
    });

    describe('z coordinate missing', () => {
        let point = () => {
            new Point3D(1, 1);
        };

        it('should throw an error', () => {
            chai.expect(point).to.throw('Error: z cannot be null');
        });
    });

    describe('z coordinate not a number', () => {
        let point = () => {
            new Point3D(1, 1, 'a');
        };

        it('should throw an error', () => {
            chai.expect(point).to.throw('Error: z must be a number');
        });
    });
});