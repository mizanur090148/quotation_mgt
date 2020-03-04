<template>
    <div class="row">
        <div class="col-xs-12 col-sm-12">
            <div class="card">
                <div class="card-header font-weight-bold">Create User</div>
                <div class="card-body card-block">
                    <b-row class="mb-3">
                         <form-group-column :col="3" label="First Name">
                            <b-form-input type="text"/>                          
                         </form-group-column>

                         <form-group-column :col="3" label="Last Name">
                            <b-form-input type="text"/>                          
                         </form-group-column>

                         <form-group-column :col="3" label="First name">
                            <b-form-input type="text"/>                         
                         </form-group-column>                      
                         <form-group-column :col="3" label="First name">
                            <b-form-input type="text"/>                         
                         </form-group-column>
                    </b-row>

                    <div class="form-group row m-t-md">
                        <div class="col-sm-offset-4 col-sm-10 text-center">
                            <button type="submit" class="btn btn-success btn-rounded m-b-10 m-l-5">Submit</button>
                            <button type="submit" class="btn btn-danger btn-rounded m-b-10 m-l-5">Reset</button>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  
   import FormGroupColumn from "../components/Customs/FormGroupColumn";

   export default {     
      components: {
         FormGroupColumn
      }     
   }
</script>

<style scoped>

</style>
