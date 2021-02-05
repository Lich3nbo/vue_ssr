import Vue from 'vue'
import Router from 'vue-router'


Vue.user(Router)

export function createRouter(){
  return new Router({
    mode: 'history',
    routes: [
      { path: '/', component: ()=> import('./components/home.vue')},
      { path: '/item/:id', component: ()=> import('./components/item.vue')}
    ]
  })
}