<template>
  <div class="container mt-16">
    <div class="flex justify-between">
      <h1 class="text-xl text-gray-600 font-medium mb-6">Your snippets (1)</h1>
      <a href="#" @click.prevent="createSnippet">+ Create a snippet</a>

    </div>
    <div class="text-gray-500 font-medium" v-if="snippets.length === 0">
      There are no snippets here. You know what to do.
    </div>
    <dashboard-snippet-card
        v-for="snippet in snippets"
        :key="snippet.uuid"
        :snippet="snippet"
        @deleted="removeSnippet"
      ></dashboard-snippet-card>
  </div>
</template>

<script>
import DashboardSnippetCard from './components/DashboardSnippetCard.vue';
  export default {
  components: { DashboardSnippetCard },
     head(){
      return {
        title: `Dashboard'`
      }
    },
    methods: {
      async createSnippet(){
        try {
          const res = await this.$axios.$post('snippets');
          this.$router.push({
            name:'snippets-id-edit',
            params:{
              id:res.data.uuid
            }
          })
        } catch (error) {

        }
      },
      removeSnippet(snippet){
        this.snippets = this.snippets.filter(item=> item.uuid != snippet.uuid);
      }
    },
     async asyncData({app}) {
       try {
        const res = await app.$axios.$get('me/snippets')
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
