import apiCall from "./call";

const loginApi = (data) => {console.log(data);
   return apiCall.post('login', {...data})
}

const logoutApi = () => {
   return apiCall.post('logout');
}

export {
   loginApi,
   logoutApi
}
