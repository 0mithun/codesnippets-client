<template>
  <div v-html="mdBody">
  </div>
</template>

<script>
import hljs from 'highlight.js';
  const markdown = require('markdown-it')({
    highlight (string, lang){
      let esc = markdown.utils.escapeHtml;
      if (lang && hljs.getLanguage(lang)) {
        return '<pre class="hljs language-'+ esc(lang.toLowerCase())+'"><code>' +
               hljs.highlightAuto(esc(string)).value +
               '</code></pre>';
      }

      return '<pre class="hljs"><code>'+esc(string)+'</code></pre>'; // use external default escaping
    }
  })
  export default {
    props:{
      value: {
        type: String,
        required: true
      }
    },
    computed:{
      mdBody(){
        return markdown.render(this.value)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
