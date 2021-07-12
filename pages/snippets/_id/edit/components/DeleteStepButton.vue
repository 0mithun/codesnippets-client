<template>
  <a
    class="block mb-2 p-3 rounded-lg bg-blue-500 mr-2 lg:mr-0"
    href="#"
    title="Delete Step"
    @click.prevent="deleteStep"
  >
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current text-white h-6 w-6"><path  d="M8 6V4c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2h5a1 1 0 0 1 0 2h-1v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8H3a1 1 0 1 1 0-2h5zM6 8v12h12V8H6zm8-2V4h-4v2h4zm-4 4a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z"/></svg>

  </a>
</template>

<script>
  export default {
    props:{
      snippet:{
        required: true,
        type: Object
      },
      currentStep:{
        required: true,
        type: Object,
      },
    },
    methods: {
      async deleteStep(){
        try {
          await this.$axios.$delete(`snippets/${this.snippet.uuid}/steps/${this.currentStep.uuid}`);
          this.$emit('deleted',this.currentStep)
        } catch (error) {

        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
