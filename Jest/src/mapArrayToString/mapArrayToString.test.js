const mapArrToStrings = require ('./mapArrayToString')

describe('mapArrToStrings', () => {
	test('proper value', () => {
		expect(mapArrToStrings([1, 2, 3])).toEqual(['1', '2', '3']);
	})
	test('mix', () => {
		expect(mapArrToStrings([1, 2, 3, null, undefined, 'adfa'])).toEqual(['1', '2', '3']);
	})
	test('empty arr', () => {
		expect(mapArrToStrings([])).toEqual([]);
	})
	test('negation', () => {
		expect(mapArrToStrings([1, 2, 3])).not.toEqual([1,2,3,4]);
	})
})