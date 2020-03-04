<template>
    <div class="row">
        <div class="col-xs-12 col-sm-12">
            <div class="card">
                <div class="card-header font-weight-bold">Create Item</div>
                <div class="card-body card-block">
                    <form @submit.prevent="editMode ? update() : store()">
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="first-name" class="form-control-label font-weight-bold">First Name</label>
                                    <input type="text" v-model="form.first_name" id="city" class="form-control" placeholder="Enter first name" :class="{ 'is-invalid': form.errors.has('first_name') }">                                    
                                    <has-error :form="form" field="first_name"></has-error>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="last-name" class="form-control-label font-weight-bold">Last Name</label>
                                    <input type="text" v-model="form.last_name" class="form-control" placeholder="Enter last name" :class="{ 'is-invalid': form.errors.has('last_name') }">
                                    <has-error :form="form" field="last_name"></has-error>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="screen_name" class="form-control-label font-weight-bold">Screen Name</label>
                                    <input type="type" v-model="form.screen_name" class="form-control" placeholder="Screen name">
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="email" class="form-control-label font-weight-bold">E-mail</label>
                                    <input type="email" v-model="form.email" class="form-control" placeholder="E-mail" :class="{ 'is-invalid': form.errors.has('email') }">
                                    <has-error :form="form" field="email"></has-error>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="mobile-no" class="form-control-label font-weight-bold">Mobile No.</label>
                                    <input type="text" v-model="form.mobile_no" class="form-control" placeholder="Enter mobile no" :class="{ 'is-invalid': form.errors.has('mobile_no') }">
                                    <has-error :form="form" field="mobile_no"></has-error>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="designation" class="form-control-label font-weight-bold">Designation</label>
                                    <input type="text" v-model="form.designation" class="form-control" placeholder="Designation">
                                </div>
                            </div>                      
                        </div>
                        <div class="row form-group">                            
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="role" class="form-control-label font-weight-bold">Roll</label>
                                    <select v-model="form.role_id" class="form-control form-control-lg" :class="{ 'is-invalid': form.errors.has('role_id') }">
                                        <option selected="selected" value="">Please select</option>
                                        <option value="1">Super Admin</option>
                                        <option value="2">Admin</option>
                                        <option value="3">User</option>
                                    </select>
                                    <has-error :form="form" field="role_id"></has-error>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="password" class="form-control-label font-weight-bold">Password</label>
                                    <input type="password" v-model="form.password" class="form-control" placeholder="Enter password" :class="{ 'is-invalid': form.errors.has('password') }">
                                    <has-error :form="form" field="password"></has-error>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-group">
                                    <label for="confirmed-password" class="form-control-label font-weight-bold">Confirmed Password</label>
                                    <input type="password" v-model="form.confirm_password" class="form-control" placeholder="Enter confirmed password" :class="{ 'is-invalid': form.errors.has('password') }">
                                    <has-error :form="form" field="confirm_password"></has-error>
                                </div>
                            </div>              
                        </div>
                        <div class="form-group row m-t-md">
                            <div class="col-sm-offset-4 col-sm-10 text-center">
                                <button type="submit" class="btn btn-info btn-rounded m-b-10 m-l-5">Submit</button>
                                <button type="submit" class="btn btn-danger btn-rounded m-b-10 m-l-5">Reset</button>
                            </div>
                        </div> 
                    </form>
                </div>
            </div>
        </div>
        <vue-snotify></vue-snotify>
    </div>
</template>

<style>
    label {    
        margin-bottom: 3px !important;
    }
</style>

<script>   
    import {saveuser} from "../api/user";

    export default {       

        data: function () {
          return {
            editMode: false,
            query: '',
            queryField: 'name',
            users: [],
            pagination: {
                current_page: 1
            },
            form: new Form({
                id: '',
                first_name: '',
                last_name: '',
                email: '',
                mobile_no: '',
                role_id: '',
                password: '',
                confirm_password: ''
            }),
          }
        },       
      
        methods: {
            
            create() {
                this.editMode = false
                this.form.reset()
                this.form.clear()
                $('#cutomerModalLong').modal('show');
            },
            store() {
               // saveuser(this.form);
                this.form.post('http://inventory-dev/api/users')
                    .then(response => {
                      //  this.getData();                   
                        if (this.form.successful) {
                            this.$snotify.success('Successfully created', 'Success');
                            this.form.reset();
                            this.form.clear();
                        } else {
                            this.$snotify.error('Something went worng', 'error');
                        }
                    })
                    .catch(e => {
                        console.log(e);
                    })
            },
            show(user) {
              this.form.reset();
              this.form.fill(user);
              $("#showModal").modal("show");
              console.log(user);
            },
            edit(user) {
                this.editMode = true
                this.form.reset()
                this.form.clear()
                this.form.fill(user)              
                $('#cutomerModalLong').modal('show');
            },
            update() {
                this.form.busy = true;
                this.form.put('/api/users/'+this.form.id)
                    .then(response => {
                        this.getData();
                        $('#cutomerModalLong').modal('hide');
                        if (this.form.successful) {
                            this.$snotify.success('Successfully updated', 'Success');
                            this.form.reset();
                            this.form.clear();
                        } else {
                            this.$snotify.error('Something went worng', 'error');
                        }
                    })
                    .catch(e => {
                        console.log(e);
                    })
            }            
        }
    }
</script>