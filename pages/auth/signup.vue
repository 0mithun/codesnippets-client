<template>
  <div class="container mt-16">
    <div class="flex flex-col items-center">
      <h1 class="text-3xl text-gray-700 font-medium mb-10 ">Hello.</h1>
      <form
        action="#"
        class="bg-white p-8 rounded w-full md:w-8/12 lg:w-6/12  mb-6"
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
        <div class="flex flex-wrap lg:flex-nowrap">
          <div class="lg:mr-6 w-full lg:w-6/12 mb-6">
            <label
              for="name"
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
          <div class="w-full lg:w-6/12 mb-6">
            <label
            for="username"
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
        </div>
        <div class="flex flex-wrap lg:flex-nowrap">
          <div class="lg:mr-6 w-full lg:w-6/12 mb-6">
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
          <div class="w-full lg:w-6/12 mb-6">
            <label
              for="password_confirmation"
              class="w-full text-gray-600 font-medium mb-2"
              :class="{'text-red-500 ':validation.password_confirmation}"
              >Confirm Password</label>
            <input
              type="password_confirmation"
              id="password_confirmation"
              class="w-full rounded border-2 border-gray-400  block p-3"
              v-model="form.password_confirmation"
              :class="{'border-red-500 ':validation.password_confirmation}"
            >
            <div class="text-red-500 mt-1 mb-4 text-sm" v-if="validation.password_confirmation">{{validation.password_confirmation[0]}}</div>
          </div>
        </div>
        <div >
          <button
            type="submit"
            class="font-medium bg-blue-500 text-white rounded text-center p-4 w-full block"
          >Sign Up</button>
        </div>
      </form>
      <div class="text-ceter text-gray-600">
        Already have an account? <nuxt-link
          :to="{name:'auth-signin'}"
        >Sign In.</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form:{
          name:'',
          username:'',
          email:'',
          password:'',
          password_confirmation:'',
        },
        validation: {}
      }
    },
    head(){
      return {
        title:'Sign Up'
      }
    },
    methods: {
      async submit(){
        try {
          this.validation = {}
           await this.$axios.$post('auth/signup',this.form)
            await this.$auth.loginWith('local',{
              data:{
                email: this.form.email,
                password: this.form.password,
              }
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
