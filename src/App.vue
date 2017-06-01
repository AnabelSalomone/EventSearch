<template>
  <div id="app">
  <navbar></navbar>
  <my-header></my-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import List from '@/components/List'
import MyForm from '@/components/Formulaire'
import MyHeader from '@/components/Header'
import Gratuits from '@/components/Gratuits'


export default {
  name: 'app',
  components: {navbar: Navbar, list: List, myForm: MyForm, myHeader: MyHeader},
}
</script>

<style>
</style>
