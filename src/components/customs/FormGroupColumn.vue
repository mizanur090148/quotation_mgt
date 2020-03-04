<template>
   <b-colxx :sm="col">
      <b-form-group :label="label" class="has-float-label">
         <slot/>
      </b-form-group>
   </b-colxx>
</template>

<script>
   export default {
      name: "FormGroupColumn",
      props: {
         col: Number,
         label: String
      }
   }
</script>

<style scoped>

</style>
