<template>
  <a
    class="block mb-2 p-3 rounded-lg bg-blue-500 mr-2 lg:mr-0"
    href="#"
    :title="`Add step ${position}`"
    @click.prevent="addStep"
  >
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current text-white h-6 w-6">
     <path d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"/></svg>
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
      position:{
        type:String,
        required:true
      }
    },
    methods: {
      async addStep(){
        try {
          const step = await this.$axios.$post(`snippets/${this.snippet.uuid}/steps`,{
            [this.position]: this.currentStep.uuid,
          });
          this.$emit('added',step.data)
        } catch (error) {

        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
