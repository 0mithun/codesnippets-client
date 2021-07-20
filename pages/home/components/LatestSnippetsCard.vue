<template>
  <snippet-card  :snippet="snippet">
    <nuxt-link
    :to="{
      name:'author-id',
      params:{id: snippet.author.data.username}
    }">{{snippet.author.data.name}}</nuxt-link>
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
    }
  }
</script>

<style lang="scss" scoped>

</style>
