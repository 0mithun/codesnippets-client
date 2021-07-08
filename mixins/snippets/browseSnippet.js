import {orderBy as _orderBy} from 'lodash';
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
}
