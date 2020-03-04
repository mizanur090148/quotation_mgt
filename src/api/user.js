import apiCall from "./call";

const users = (current_page) => {
   return apiCall.get('/users?page='+current_page);
}

const user = (id) => {
   return apiCall.get(`/users/${id}`)
}

const saveuser = (data) => {
   return apiCall.post('/users', { ...data})
}

const updateuser = (id, data) => {
   return apiCall.put(`/users/${id}`, {...data})
}

const deleteuser = (id) => {
   return apiCall.delete(`/users/${id}`)
}

export {
   users,
   user,
   saveuser,
   updateuser,
   deleteuser
}
