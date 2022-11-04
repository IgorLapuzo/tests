const square = require ('./square')

describe('square', () => {
	test('proper value', () => {
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(2);
		expect(spyMathPow).toBeCalledTimes(1);
	})
	test('proper value', () => {
		const spyMathPow = jest.spyOn(Math, 'pow');
		square(1);
		expect(spyMathPow).toBeCalledTimes(0);
	})
	afterEach(() => {
		jest.clearAllMocks()
	})
})