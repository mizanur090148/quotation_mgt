const baseURL = 'http://inventory-dev/api/';

const getToken = () => {
	const token = localStorage.getItem('token');
	return `Bearer ${token}`
}

export {
	baseURL,
	getToken
}