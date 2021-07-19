<template>
  <snippet-card  :snippet="snippet">
    <ul class="flex items-start text-gray-600">
      <li class="mr-6">
        <nuxt-link :to="{name:'snippets-id-edit',params:{id: snippet.uuid}}">Edit</nuxt-link>
      </li>
      <li>
        <a href="#" @click.prevent="deleteSnippet">Delete</a>
      </li>
    </ul>
  </snippet-card>
</template>

<script>

import SnippetCard from '~/components/snippets/SnippetCard.vue'
  export default {
     components:{
      SnippetCard,
    },
    props: {
      snippet: {
        type: Object,
        required: true
      }
    },
    methods: {
      async deleteSnippet(){
        //
        if(!confirm('Are you sure you want to delete this snippet?')){
          return;
        }

        try {
          await this.$axios.$delete(`snippets/${this.snippet.uuid}`)

          this.$emit('deleted', this.snippet);
        } catch (error) {

        }

      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
