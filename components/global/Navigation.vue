<template>
  <div class="bg-white py-8 lg:py-0 flex items-center">
    <div class="container flex flex-wrap lg:flex-nowrap items-center lg:flex-no-wrap">
      <nuxt-link
        :to="{ name: 'index' }"
        class="mr-10 flex-shrink-0"
      >
        <img src="~/assets/logo.svg" alt="Logo" class="h-8" />
      </nuxt-link>
      <a
        href="#"
        @click.prevent="mobileNavOpen = !mobileNavOpen"
        class="lg:hidden ml-auto flex flex-col relative w-8 h-8 justify-center"
      >
        <span
          class="bg-blue-500 h-1 w-8 rounded mb-1"
          :class="{'rotate-45 absolute right-0': mobileNavOpen}"
        ></span>
        <span
          class="bg-blue-500 h-1 w-8 rounded mb-1"
          :class="{'-rotate-45 absolute right-0': mobileNavOpen}"
        ></span>
        <span
          class="bg-blue-500 h-1 w-8 rounded mb-1"
          :class="{'hidden': mobileNavOpen}"
        ></span>
      </a>

      <div
        class="w-full flex"
        :class="{ 'hidden lg:flex': !mobileNavOpen, 'mt-8': mobileNavOpen }"
      >
        <ul class="lg:h-24 lg:flex items-center w-full lg:w-auto">
          <li>
            <nuxt-link
              :to="{ name: 'index' }"
              class="text-lg text-gray-700 lg:py-8 lg:px-4"
              >Browse</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="{ name: 'index' }"
              class="text-lg text-gray-700 lg:py-8 lg:px-4"
              >Search</nuxt-link
            >
          </li>
        </ul>
        <ul
          class="lg:h-24 lg:flex items-center w-full lg:w-auto ml-auto text-right"
        >
          <li>
            <nuxt-link
              :to="{ name: 'index' }"
              class="text-lg text-gray-700 lg:py-8 lg:px-4"
              >Dashboard</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="{ name: 'index' }"
              class="text-lg text-gray-700 lg:py-8 lg:px-4"
              >Mithun Halder</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="{ name: 'index' }"
              class="text-lg text-gray-700 lg:py-8 lg:px-4"
              >Sign In</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="{ name: 'index' }"
              class="text-lg text-gray-700 lg:py-8 lg:px-4"
              >Create an account</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              :to="{ name: 'index' }"
              class="text-lg text-gray-700 lg:py-8 lg:px-4"
              >Sign Out</nuxt-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobileNavOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
