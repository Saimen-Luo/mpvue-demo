import { LIST_ARR } from './mutation-type'
export default {
  getListDatas({ commit }, data) {
    commit(LIST_ARR, data)
    console.log('ation')
  }
}