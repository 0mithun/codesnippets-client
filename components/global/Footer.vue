<template>
  <div class="mt-24 mb-12">
    <div class="container flex flex-wrap lg:flex-nowrap justify-between">
      <ul class="flex items-center mb-6 lg:mb-0">
        <li class="mr-16">
          <nuxt-link
            :to="{name: 'index'}"
            class="text-gray-500 text-sm mb-2 inline-block"
          >Home</nuxt-link>
          <div class="text-gray-500 text-sm">
            &copy; mithunhalder.com 2019. All right reserved.
          </div>
        </li>
      </ul>
      <ul class="flex flex-wrap lg:flex-nowrap items-end">
        <li class="mr-8 w-full lg:w-auto">
          <a
            href="http://mithunhalder.com"
            class="text-gray-500 text-sm"
            target="_blank"
            rel="noopener"
          >mithunhalder.com</a>
        </li>
        <li class="mr-8 w-full lg:w-auto">
          <a
            href="#"
            class="text-gray-500 text-sm"
            target="_blank"
            rel="noopener"
          >Terms</a>
        </li>
        <li class="mr-8 w-full lg:w-auto">
          <a
            href="#"
            class="text-gray-500 text-sm"
            target="_blank"
            rel="noopener"
          >Privacy Policy</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>
