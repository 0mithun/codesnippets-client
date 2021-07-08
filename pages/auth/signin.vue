<template>
  <div class="container mt-16">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl text-gray-700 font-medium mb-10 ">Hello.</h1>
      <form
        action="#"
        class="bg-white p-8 rounded w-full md:w-6/12 lg:w-4/12  mb-6"
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
        </div>
        <div >
          <button
            type="submit"
            class="font-medium bg-blue-500 text-white rounded text-center p-4 w-full block"
          >Sign In</button>
        </div>
      </form>
      <div class="text-ceter text-gray-600">
        No Account? <nuxt-link
          :to="{name:'auth-signin'}"
        >Create an account.</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form:{
          email:'',
          password:'',
        },
        validation: {}
      }
    },
    head(){
      return {
        title:'Sign In'
      }
    },
    methods: {
      async submit(){
        try {
           await this.$auth.loginWith('local',{
            data:this.form
          })
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
