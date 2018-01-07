import DummyfuncsHelpers from '../../app/helpers/dummyFuncs';

describe('Validation Helpers', () => {
    describe('Multiply method', () => {
        test('returns the result of two multiplied parameters', () => {
            expect(DummyfuncsHelpers.Multiply(2, 7)).toEqual(14);
        });
    });
});
