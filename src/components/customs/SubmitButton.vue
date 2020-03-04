<template>
   <button type="submit" class="btn btn-primary btn-sm" :disabled="processing">
      <span v-if="processing">Wait...</span>
      <span v-else><slot>Submit</slot></span>
   </button>
</template>

<script>
   export default {
      name: "SubmitButton",
      props: {
         processing: {
            type: Boolean,
            required: true
         }
      }
   }
</script>

<style scoped>

</style>
