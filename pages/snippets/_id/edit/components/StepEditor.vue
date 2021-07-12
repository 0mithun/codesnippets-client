<template>
  <div>
    <textarea ref="snippetTextarea"></textarea>
    <div class="bg-white rounded-lg p-8  text-gray-600 ">
      <step-markdown :value="step.body"></step-markdown>
    </div>
  </div>
</template>

<script>
import codemirror from 'codemirror';

import StepMarkdown from '~/components/snippets/StepMarkdown.vue';
  export default {
    props:{
      step: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        codemirror: null
      }
    },
    components:{
      StepMarkdown,
    },
    watch:{
      'step.uuid'(){
        this.document.setValue(this.step.body)
      }
    },
    computed:{
      document(){
        return this.codemirror.getDoc()
      }
    },
    mounted() {
      const codeMirror  = require('codemirror')
      this.codemirror = codeMirror.fromTextArea(this.$refs.snippetTextarea, {
        indentUnit: 2,
        indentWithTabs: false,
        smartIndent: true,
        lineWrapping: true,
        lineNumbers: true,
        scrollbarStyle: null,
        extraKeys: {
          Tab: (codemirror)=>codemirror.exeCommand('indentMore'),
          'Shift-Tab': (codemirror)=>codemirror.exeCommand('indentLess'),
        }
      });

      this.document.setValue(this.step.body);
      this.document.on('change', (document)=>{
        this.$emit('input',document.getValue())
      })
    },
  }
</script>

<style lang="scss">
  .CodeMirror {
    @apply font-sans text-base w-full max-w-full border-2 border-dashed border-gray-400 rounded-lg mb-6 p-1;
  }
</style>
