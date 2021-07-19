<template>
  <div>
    <div class="bg-white mb-16">
      <div class="container py-10 pb-16">
        <h1 class="text-4xl text-gray-700 font-medium leading-tight mb-6">Browse</h1>
      </div>
    </div>
    <div class="container">
      <h1 class="text-xl text-gray-600 font-medium mb-6">All snippets ({{ snippets.length }})</h1>

        <browse-snippet-card v-for="snippet in snippets" :key="snippet.uuid" :snippet="snippet" ></browse-snippet-card>


    </div>
  </div>
</template>

<script>
import BrowseSnippetCard from './components/BrowseSnippetCard.vue'
  export default {
    components:{
        BrowseSnippetCard
    },
     head(){
      return {
        title: `Browse snippets'}`
      }
    },
    async asyncData({app}) {
       try {
        const res = await app.$axios.$get('snippets')
        return {
          snippets: res.data
        }
      } catch (error) {

      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
