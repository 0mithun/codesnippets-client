<template>
  <div
    class="flex flex-wrap lg:flex-nowrap justify-between items-center bg-white p-8 rounded-lg w-full m-2"

    >
    <div class="mr-8 mb-2 lg:mb-0 ">
      <h1 class="text-gray-600 text-xl leading-snug">
        <nuxt-link :to="{
          name:'snippets-id',
          params:{id: snippet.uuid}
        }"
        class="text-gray-600"
        >{{ snippet.title || 'Untitled snippet'}}</nuxt-link>
      </h1>
      <div class="text-gray-500 mr-6 font-medium">
        {{snippet.steps_count }} steps
      </div>
    </div>
    <div class="">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      snippet: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
