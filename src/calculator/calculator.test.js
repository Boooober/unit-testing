import { Calculator } from './calculator';

describe('Calculator', () => {
    let sut;

    beforeEach(() => {
        sut = new Calculator();
    });

    describe('add', () => {
        it('should add two operands', () => {
            expect(sut.add(1, 2)).toEqual(3);
        });
    });
});