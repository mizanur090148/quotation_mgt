/*import router from "../router";*/
import {throttle} from 'lodash';

const axios = require('axios').default;
import {baseURL} from "./config";
/*import {errorMessage} from "../helpers/alert";*/
import {logoutApi} from "./auth";

const apiCall = axios.create({
   baseURL
})

const setAuthorizationHeader = (token) => {
   apiCall.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const getRequestConfig = (multipart = false) => {

   const token = localStorage.getItem('token');

   let headers = {
      headers: {
         'Authorization': token,
      },
   }

   if (multipart) {
      headers = Object.assign({}, headers, {
         'Content-Type': 'multipart/form-data'
      })
   }

   return {
      headers,
      baseURL
   };
}

setAuthorizationHeader(localStorage.getItem('token'));

const interceptor = apiCall.interceptors.response.use(res => {

   if (!res.data.hasOwnProperty('errors')) {
      return res;
   }

  /* if (res.data.errors[0] && res.data.errors[0] === 'token_invalid') {
      apiCall.interceptors.response.eject(interceptor);
      logoutApi()
         .then(() => localStorage.removeItem('token'))
         .then(async () => {
            await router.push("/login")
            errorMessage('Login session has expired. Please Login!')
         })

      return false;
   }*/

   return res;
})

export default apiCall;
