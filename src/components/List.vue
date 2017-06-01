<template>
<div class="container">
<div v-for="item in datas.shows">
			<div class="row well">
				<div class="col-xs-6">
					<img :src="item.img" alt="" height="150" />
				</div>

				<div class="col-xs-6">
					<p>{{item.titre}}</p>
					<p>{{item.lieu.nom}}</p>
					<p>{{item.lieu.adresse}}</p>
					<p>{{item.prix | showPrix}}</p>
          <p>{{item.date}}</p>
					<p v-if="item.voirPlus === false">{{item.description | longElt}} <span class="btn btn-primary btn-xs" @click="item.voirPlus = true">Read More</span></p>
					<p v-if="item.voirPlus === true">{{item.description}} <span class="btn btn-primary btn-xs" @click="item.voirPlus = false">Hide</span></p>
					<button type="button" class="btn btn-success" @click="deleteShow(item)">Delete</button>
				</div>
			</div>
</div>
</div>

</template>

<script>
import {Store} from '@/Store.js'


export default {
	name: 'list',
	data(){
		return{
			datas: Store.datas,
			description: false
		}
	},
	
methods: {
	 deleteShow: function (item) {
			let position = this.datas.shows.indexOf(item);
			console.log(position);
      this.datas.shows.splice(position, 1);
	 }
		},

 filters:{
		longElt: function(elt){
		if(elt.length > 20){
			return elt.substring(0, 100) + "...";
		}
  },

	showPrix: function(elt){
		if (elt == 0){
			return "Gratuit";
		} else {
		return		elt.toFixed(2) + "€"
		}
	}
 }
   
}
</script>


<style scoped>
.read-more{

}
</style>