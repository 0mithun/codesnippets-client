<template>
  <div>
    <div class="bg-white mb-16">
      <div class="container py-10 pb-16">
        <h1 class="text-4xl text-gray-700 font-medium leading-tight mb-6">{{ user.name }}</h1>
        <div class="text-gray-600">
          Member since {{ joined }}
        </div>
      </div>
    </div>
    <div class="container">
      <h1 class="text-xl text-gray-600 font-medium mb-6">Public snippets ({{snippets.length}})</h1>
      <snippet-card v-for="snippet in snippets" :key="snippet.uuid" :snippet="snippet"></snippet-card>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import SnippetCard from '~/components/snippets/SnippetCard.vue'
  export default {
    components: { SnippetCard },
    head(){
      return {
        title:   `Snippets by ${this.user.name}`
      }
    },
    computed: {
      joined(){
        return moment(this.user.joined,'YYYY-MM-DD HH:mm:ss').format('Do MMMM YYYY');
      }
    },
    async asyncData({app,params}) {
        try {
        const snippets = await app.$axios.$get(`users/${params.id}/snippets`)
        const user = await app.$axios.$get(`users/${params.id}`)
        return {
          snippets: snippets.data,
          user: user.data,
        }
      } catch (error) {

      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
