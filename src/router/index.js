import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyForm from '@/components/Formulaire'
import List from '@/components/List'
import Gratuits from '@/components/Gratuits'
import Payants from '@/components/Payants'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/form',
      name: 'MyForm',
      component: MyForm
    },
    {
      path: '/',
      name: 'List',
      component: List
    },
    {
      path: '/gratuits',
      name: 'Gratuits',
      component: Gratuits
    },
    {
      path: '/payants',
      name: 'Payants',
      component: Payants
    }
  ]
})
