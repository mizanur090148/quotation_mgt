<template>
  <div class="row">  
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <strong class="card-title">Bordered Table</strong>
        </div>
        <div class="card-body">
          <table class="table table-bordered text-center">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>             
            </tbody>
          </table>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
    export default {
        data () {
          return {        
            users: []
          }
        },
        mounted() {
            console.log('mounted');
            this.getData();
        },

        methods: {         
          getData() {
            axios.get('/http://inventory-dev/api/users')
              .then(response => {
                 // this.buyers = response.data.data;
                 // this.pagination = response.data.meta;
              })
              .catch(e => {
                  console.log(e);
              })
          }
      }
    }
</script>
