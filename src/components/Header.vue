<template>
<div class="container">
<div class="well">
  <h3>Agenda Lyon:</h3>
  <p>{{totalFestival}} festivals, {{totalConcert}} concerts, {{totalTheatre}} pièces de théatrer et {{totalAtelier}} ateliers!</p>
	<a class="btn"><router-link to="/gratuits">Voir les evenements gratuits</router-link></a>
	<a class="btn" ><router-link to="/payants">Voir les evenements payants</router-link></a>
	<a  class="btn"><router-link to="/">Voir tous les evenements</router-link></a>
	<a  class="btn"><router-link to="/form">Ajoutez un evenement!</router-link></a>

</div>
</div>
</template>

<script>
import {Store} from '@/Store.js'

export default {
	name: 'myHeader',
	data(){
		return{
			datas: Store.datas
		}
	},

computed: {
	totalFestival: function(){
      let festival = 0;
      for (let item of this.datas.shows){
				if(item.type === "Festival"){
					festival +=1
				}
      }
      return festival;
    },

			totalConcert: function(){
      let musique = 0;
      for (let item of this.datas.shows){
				if(item.type === "Musique"){
					musique +=1
				}
      }
      return musique;
    },


			totalTheatre: function(){
      let theatre = 0;
      for (let item of this.datas.shows){
				if(item.type === "Theatre"){
					theatre +=1
				}
      }
      return theatre;
    },

		totalAtelier: function(){
      let atelier = 0;
      for (let item of this.datas.shows){
				if(item.type === "Atelier"){
					atelier +=1
				}
      }
      return atelier;
    }
   }
}
</script>