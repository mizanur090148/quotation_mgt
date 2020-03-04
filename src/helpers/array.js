import {map, orderBy, concat} from 'lodash';

const mapToTextValue = function (data) {
	const result = map(data, function (item) {
		return {
			value: item.id,
			text: item.name
		}
	});

	return concat(
		[{value: null, text: "Please select an option"}],
		[...result]
	);
}
const transformForVSelect = function (data) {
	return map(data, function (item) {
		return {
			label: item.name ? item.name : item.unique_id,
			code: item.id
		}
	});
}

const employeeSort = function (arr) {
	const temp = map(arr, (item) => ({
		value: item.employee_id,
		text: Number(item.unique_id)
	}))

	return orderBy(temp, "text", 'asc');
}

const employeeSortForVSelect = function (arr) {
	const temp = map(arr, (item) => ({
		code: item.employee_id,
		label: Number(item.unique_id)
	}))

	return orderBy(temp, "label", 'asc');
}

const monthsForVSelect = [
	{ code: '01', label: 'January' },
	{ code: '02', label: 'February' },
	{ code: '03', label: 'March' },
	{ code: '04', label: 'April' },
	{ code: '05', label: 'May' },
	{ code: '06',	label: 'June' },
	{ code: '07',	label: 'July' },
	{ code: '08',	label: 'August' },
	{ code: '09',	label: 'September' },
	{ code: '10',	label: 'October' },
	{ code: '11',	label: 'November' },
	{ code: '12',	label: 'December' },
];


export {
	mapToTextValue,
	transformForVSelect,
	employeeSort,
	employeeSortForVSelect,
	monthsForVSelect
}
