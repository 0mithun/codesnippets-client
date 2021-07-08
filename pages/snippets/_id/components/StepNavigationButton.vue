<template>
  <nuxt-link
    :to=" step ? {
      query: {
        step: step.uuid
      }
    } : {}"
    class="block mb-2 p-3 rounded-lg bg-blue-500  order-last lg:order-first"
    :class="{'opacity-25 pointer-events-none': !step}"
    title="next step"
  >
    <slot></slot>
  </nuxt-link>
</template>

<script>
  export default {
    props:['step']
  }
</script>

<style lang="scss" scoped>

</style>
