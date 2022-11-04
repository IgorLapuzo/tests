const validateValue = require ('./validateValue')

test('Value validation', () => {
	expect(validateValue(50)).toBe(true);
})

describe('validateValue', () => {
	test('Proper value', () => {
		expect(validateValue(99)).toBe(true);
	})
	test('Less then proper', () => {
		expect(validateValue(-1)).toBe(false);
	})
	test('More then proper', () => {
		expect(validateValue(101)).toBe(false);
	})
	test('Low value', () => {
		expect(validateValue(0)).toBe(true);
	})
	test('High value', () => {
		expect(validateValue(100)).toBe(true);
	})
})