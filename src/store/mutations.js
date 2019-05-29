import {LIST_ARR} from './mutation-type'

export default {
  [LIST_ARR](state, data){
    state.listDatas = data
    console.log('mutation');
    console.log(data);
  }
  
}
