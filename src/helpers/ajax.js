import {equals, prop} from "ramda";

const status = prop('status');
const isStatus = ( code, res ) =>  equals(code, status(res))
const isStatusOK = res => isStatus(200, res);
const isSuccess = res => res.data.success;

export {
   status,
   isStatus,
   isStatusOK,
   isSuccess
}
