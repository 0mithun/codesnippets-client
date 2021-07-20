<template>
  <div class="container mt-16">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl text-gray-700 font-medium mb-10 ">{{ $auth.user.name }}</h1>
      <div class=" w-full md:w-6/12 lg:w-4/12  mb-6">
        <form
          action="#"
          class="mb-6"
          @submit.prevent="submit"
        >
          <div class="mb-6">
            <label
              for="email"
              class="w-full text-gray-600 font-medium mb-2"
              :class="{'text-red-500 ':validation.email}"
              >Email</label>
            <input
              type="text"
              id="email"
              class="w-full rounded border-2 border-gray-400 block p-3"
              v-model="form.email"
              :class="{'border-red-500 ':validation.email}"
            >
            <div class="text-red-500 mt-1 mb-4 text-sm" v-if="validation.email">{{validation.email[0]}}</div>
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="w-full text-gray-600 font-medium mb-2"
              :class="{'text-red-500 ':validation.name}"
              >Name</label>
            <input
              type="text"
              id="name"
              class="w-full rounded border-2 border-gray-400 block p-3"
              v-model="form.name"
              :class="{'border-red-500 ':validation.name}"
            >
            <div class="text-red-500 mt-1 mb-4 text-sm" v-if="validation.name">{{validation.name[0]}}</div>
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="w-full text-gray-600 font-medium mb-2"
              :class="{'text-red-500 ':validation.username}"
              >Username</label>
            <input
              type="text"
              id="username"
              class="w-full rounded border-2 border-gray-400 block p-3"
              v-model="form.username"
              :class="{'border-red-500 ':validation.username}"
            >
            <div class="text-red-500 mt-1 mb-4 text-sm" v-if="validation.username">{{validation.username[0]}}</div>
          </div>

          <div class="mb-6">
            <label
              for="password"
              class="w-full text-gray-600 font-medium mb-2"
              :class="{'text-red-500 ':validation.password}"
              >Password</label>
            <input
              type="password"
              id="password"
              class="w-full rounded border-2 border-gray-400  block p-3"
              v-model="form.password"
              :class="{'border-red-500 ':validation.password}"
            >
            <div class="text-red-500 mt-1 mb-4 text-sm" v-if="validation.password">{{validation.password[0]}}</div>
            <div class="text-gray-500 text-sm">Leave blank to keep same.</div>
          </div>
          <div >
            <button
              type="submit"
              class="font-medium bg-blue-500 text-white rounded text-center p-4 "
            >Update</button>
          </div>
        </form>
        <div class="">
          <nuxt-link :to="{
            name:'author-id',
            params:{id: $auth.user.username}
          }">View your public profile link</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    middleware: ['auth'],
    data() {
      return {
        form:{
          email:this.$auth.user.email,
          name:this.$auth.user.name,
          username:this.$auth.user.username,
          password:'',
        },
        validation: {}
      }
    },
    head(){
      return {
        title:'Account'
      }
    },
    methods: {
      async submit(){
        try {
          this.validation = {}
           await this.$axios.$patch(`users/${this.$auth.user.username}`,this.form)
           await this.$auth.fetchUser()
           this.form.password = ''
         } catch (error) {
          if(error.response.status == 422){
            this.validation = error.response.data.errors;
          }
        }
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
