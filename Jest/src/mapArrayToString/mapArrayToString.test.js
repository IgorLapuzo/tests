const mapArrayToString = require ('./mapArrayToString')

describe('mapArrayToString', () => {
	test('proper value', () => {
		expect(mapArrayToString([1, 2, 3])).toEqual(['1', '2', '3']);
	})
	test('mix', () => {
		expect(mapArrayToString([1, 2, 3, null, undefined, 'adfa'])).toEqual(['1', '2', '3']);
	})
	test('empty arr', () => {
		expect(mapArrayToString([])).toEqual([]);
	})
	test('negation', () => {
		expect(mapArrayToString([1, 2, 3])).not.toEqual([1,2,3,4]);
	})
})