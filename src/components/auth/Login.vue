<template>
    <div class="row">
        <div class="col-xs-6 col-xs-offset-4 col-sm-6 col-sm-offset-4">
            <div class="card">
                <div class="card-header font-weight-bold">Sign in with your Account</div>
                    <div class="card-body card-block">
                        <form @submit.prevent="login">
                            <div class="row form-group">
                                <div class="col-6 offset-2">
                                    <div class="form-group">
                                        <input type="email" id="city" class="form-control" placeholder="Enter email" v-model="user.email">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" id="postal-code" class="form-control" placeholder="Enter password" v-model="user.password">
                                    </div>
                                    <div class="form-group text-center">
                                        <button type="submit" class="btn btn-success btn-rounded ">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
   import {mapActions, mapGetters} from "vuex";
   import {loginApi, logoutApi} from "../../api/auth";
   import apiCall from "../../api/call";   

   export default {
      data() {
         return {
            user: {
               email: null,
               password: null
            }
         };
      },    

      methods: {

         login() {           

            loginApi({
               email: this.user.email,
               password: this.user.password
            }).then((res) => {console.log(res.data.content);
               const token = res.data.content;
               localStorage.setItem("token", token);
               apiCall.defaults.headers.common['Authorization'] = `Bearer ${token}`
               this.$router.push({name: 'dashboard'});
            }).catch((error) => {
              console.log(error);
            });
         },

         logout() {

            logoutApi().then(function (response) {
               localStorage.removeItem('token');
               this.$router.push({name: 'login'})
            }).catch(function (err) {
               console.log(err);
            })

         }
      },
      watch: {
         currentUser(val) {
            if (val && val.uid && val.uid.length > 0) {
               setTimeout(() => {
                  this.$router.push("/");
               }, 200);
            }
         },
         loginError(val) {
            if (val != null) {
               this.$notify("error", "Login Error", val, {
                  duration: 3000,
                  permanent: false
               });

            }
         }
      }
   };
</script>