import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/jingxuan', 
      name:"精選",
      component(){
        return System.import('../views/jingxuan')
      }
    },
    {
      path:'/shipin',
      name:"視頻",
      component(){
        return System.import('../views/shipin')
      }  
    },
    {
      path:'/duanzi',
      name:"段子",
      component(){
        return System.import('../views/duanzi')
      }  
    },
    {
      path:'/faxian',
      name:"發現",
      component(){
        return System.import('../views/faxian')
      }  
    },
    {path:'*', redirect: '/jingxuan'}
]
})
