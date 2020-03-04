import * as moment from 'moment';

const dateInputFormatter =  function (date) {
    var given_date = new Date(date);
    var formatted_date = ((given_date.getMonth() > 8) ? (given_date.getMonth() + 1) : ((given_date.getMonth() + 1))) + '/' + ((given_date.getDate() > 9) ? given_date.getDate() : (given_date.getDate())) + '/' + given_date.getFullYear();
    return new Date(formatted_date);
}

export const today = () => {
    return moment(new Date()).format("YYYY-MM-DD");
}

export const yesterday = () => {
    return moment(new Date()).subtract(1, 'day').format("YYYY-MM-DD")
}

export {
    dateInputFormatter
}
