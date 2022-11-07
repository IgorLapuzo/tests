const axios = require('axios');
const mapArrayToString = require('../mapArrayToString/mapArrayToString');

const getData = async () => {
	try {
		const response  = await axios.get('https://jsonplaceholder.typicode.com/users');
		const userId = response.data.map(user => user.id)
		return mapArrayToString(userId);
	} catch (e) {

	}
}

module.exports = getData;