import {orderBy as _orderBy} from 'lodash';
import hotkeys from 'hotkeys-js';

export default {
  computed: {
    orderedStepsAsc(){
      return _orderBy(this.steps,'order','asc')
    },
    orderedStepsDesc(){
      return _orderBy(this.steps,'order','desc')
    },
    firstStep(){
      return this.orderedStepsAsc[0];
    },
    nextStep(){
      return this.orderedStepsAsc.find(s=>{
        return s.order > this.currentStep.order;
      })  || null;
    },
    prevStep(){
       return this.orderedStepsDesc.find(s=>{
        return s.order < this.currentStep.order;
      }) || null;
    },
    currentStep(){
      return this.orderedStepsAsc.find((s)=>{
        return s.uuid === this.$route.query.step;
      }) || this.firstStep
    },
    currentStepIndex(){
      return this.orderedStepsAsc.map(item=>item.uuid).indexOf(this.currentStep.uuid)
    }
  },
  mounted() {
    this.registerKeyboardShortcuts();
  },
  methods: {
    goToStep(step){
      this.$router.push({
        query:{step: step.uuid}
      })
    },
    registerKeyboardShortcuts(){
      hotkeys('ctrl+left,ctrl+right ', (event, handler) =>{
        switch (handler.key){
          case 'ctrl+left':
            if(this.prevStep){
              this.goToStep(this.prevStep)
            }
            break;
          case 'ctrl+right':
            if(this.nextStep){
              this.goToStep(this.nextStep)
            }
            break;
        }
      });
    },

  },
}
