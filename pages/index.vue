<template>
  <div>
    <div class="bg-white mb-16">
      <div class="container flex py-16 lg:py-32">
        <div class="w-full lg:w-6/12">
          <h1 class="text-5xl font-medium text-gray-700 leading-tight mb-6">
            Browse & create mini step-by-step tutorials.
          </h1>
          <p class="text-xl text-gray-600 mb-12">
            Snippets are small collection of steps for things you don't need remember.
          </p>
          <nuxt-link
            :to="{
              name:'snippets-id',
              params: {id: SNIPPET_EXAMPLE_UUID}
            }"
            class="inline-block text-lg py-3 px-5 bg-blue-500 text-white rounded-md"
          >Checkout an example &rarr;</nuxt-link>
        </div>
      </div>
    </div>
    <div class="container">
      <h1 class="text-xl text-gray-600 font-medium mb-6">Latest snippets (x)</h1>
      <latest-snippets-card v-for="snippet in snippets" :key="snippet.uuid" :snippet="snippet"></latest-snippets-card>
    </div>
  </div>
</template>

<script>
import LatestSnippetsCard from './home/components/LatestSnippetsCard'
export default {
  components:{
    LatestSnippetsCard
  },
  head(){
    return {
      title: 'Latest snippets '
    }
  },
  computed: {
    SNIPPET_EXAMPLE_UUID(){
      return process.env.SNIPPET_EXAMPLE_UUID
    }
  },
   async asyncData({app}) {
       try {
        const res = await app.$axios.$get('snippets?limit=10')
        return {
          snippets: res.data
        }
      } catch (error) {

      }
    },
};
</script>

<style>
</style>
