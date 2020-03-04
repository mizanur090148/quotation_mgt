<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <strong class="card-title">User List</strong>
                </div>
                <div class="card-body">
                    <router-link tag="a" class="btn btn-sm btn-info" to="/user-create">                  
                        <i class="glyphicon glyphicon-plus "></i> New User
                    </router-link>

                    <div class="pull-right m-b-1">
                        <div class="pull-left" style="margin-right: 10px;">
                            <select class="form-control-sm">
                                <option value="1">All</option>
                                <option value="1">Id</option>
                                <option value="1">Name</option>
                                <option value="1">Brand</option>
                            </select>
                        </div>
                        <div class="pull-left" style="margin-right: 10px;">
                            <input type="text" class="form-control-sm" id="search-input" name="q" value="">
                        </div>
                        <div class="pull-right">
                            <input type="submit" class="btn btn-sm btn-info" value="Search">
                        </div>
                    </div>
                    <hr>
                    <table class="table table-bordered text-center">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Category</th>
                                <th scope="col">Lot</th>
                                <th scope="col">Unit</th>
                                <th scope="col">Purchase Price</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, index) in users" :key="user.id">
                               <td>{{ user.first_name }}</td>
                               <td>{{ user.mobile_no }}</td>
                               <td>{{ user.mobile_no }}</td>
                               <td>{{ user.email }}</td>
                               <td>{{ user.role.name }}</td>      
                               <td>{{ user.mobile_no }}</td>
                               <td>{{ user.email }}</td>
                               <td>{{ user.role.name }}</td>                              
                            </tr>
                        </tbody>
                    </table>
                    <v-pagination v-if="pagination.last_page > 1"
                                :pagination="pagination" :offset="5" @paginate="getUsers()">
                    </v-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<style>   
    .m-b-1 {
        padding-bottom: 15px !important;
    }
    table {      
        margin-bottom: 20px !important;
    }
</style>

<script>
   import {users, usersSearch, deleteUser} from "../api/user";
  
   export default {
      data() {
         return {
            listResponse: null,
            users: [],
            pagination: {
               current_page: 1,
               last_page: 1,
            },
            search_query: '',
          
            searchOptions: [
               {
                  column: 'unique_id',
                  label: 'Unique Id'
               },
               {
                  column: 'code',
                  label: 'Code'
               },
               {
                  column: 'department',
                  label: 'Department'
               },
               {
                  column: 'designation',
                  label: 'Designation'
               },
               {
                  column: 'section',
                  label: 'Section'
               }
            ],
            searchByField: 'Unique Id',
            searchByKey: 'unique_id',
         }
      },
     
      computed: {
         searchBy() {
            return `Search By: ${this.searchByField}`
         }
      },
      methods: {

         userDelete(id) {
            if (window.confirm('Are You Sure?')) {
               deleteEmployee(id)
                  .then((res) => {
                     console.log(res);
                     this.getUsers();
                  })
                  .catch((error) => {
                     console.log(error);
                  });
            }
         },

         getUsers() {           

            users(this.pagination.current_page)
               .then((res) => {
                  this.users = res.data.content.data;
                  this.pagination = res.data.content;
                  console.log(res.data.content);
               })
               .catch((error) => {
                  console.log(error);
               })
               .finally(() => {                 
               });
         }
      },
      mounted() {
         this.getUsers()
      }
   }
</script>