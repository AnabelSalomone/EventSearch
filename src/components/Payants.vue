<template>
<div class="container">
<div v-for="item in datas.shows">
			<div class="row well" v-if="item.prix != 0">
				<div class="col-xs-6">
					<img :src="item.img" alt="" height="150" />
				</div>

				<div class="col-xs-6">
					<p>{{item.titre}}</p>
					<p>{{item.lieu.nom}}</p>
					<p>{{item.lieu.adresse}}</p>
					<p>{{item.prix | showPrix}}</p>
          <p>{{item.date}}</p>
					<p>{{item.description | longElt}}</p>
					<button type="button" class="btn btn-success" @click="deleteShow(item)">Eliminer</button>
				</div>
			</div>
</div>
</div>

</template>

<script>
import {Store} from '@/Store.js'


export default {
	name: 'payants',
	data(){
		return{
			datas: Store.datas
		}
	},
	
methods: {
	 deleteShow: function (item) {
			let position = this.datas.shows.indexOf(item);
			console.log(item);
      this.datas.shows.splice(position, 1);
		}
 },


 filters:{
		longElt: function(elt){
		if(elt.length > 20){
			return elt.substring(0, 20) + "...";
		}
  },

	showPrix: function(elt){
		if (elt == 0){
			return "Gratuit";
		} else {
		return elt.toFixed(2) + "€"
		}
	}
 }
   
}
</script>
