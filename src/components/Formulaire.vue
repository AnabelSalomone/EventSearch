<template>
<div class="container">

<div v-if="stopCreating === false">

<span id="titreElt">Type d'evenement</span>
<select class="well" v-model="newShow.type">
  <option value="Atelier">Atelier</option>
  <option value="Musique">Musique</option>
  <option value="Danse">Danse</option>
  <option value="Theatre">Theatre</option>
   <option value="Festival">Festival</option>
</select>


<div class="input-group">
  <span class="input-group-addon" id="titreElt">Titre</span>
  <input type="text" class="form-control" placeholder="Titre" v-model="newShow.titre" @blur="maj(newShow.titre)">
</div>

<div class="input-group">
  <span class="input-group-addon">Lieu</span>
  <input type="text" class="form-control" placeholder="Lieu" v-model="newShow.lieu">
</div>

<div class="input-group">
  <span class="input-group-addon">Site internet</span>
  <input type="text" class="form-control" placeholder="Titre" v-model="newShow.site">
</div>

<div class="input-group">
  <span class="input-group-addon">Capacité</span>
  <input type="number" class="form-control" placeholder="Lieu" v-model="newShow.capacité">
</div>

<div class="input-group">
  <span class="input-group-addon">Adresse</span>
  <input type="text" class="form-control" placeholder="Adresse" v-model="newShow.adresse">
</div>

<div class="input-group">
  <span class="input-group-addon">Arrondisement</span>
  <input type="text" class="form-control" placeholder="Adresse" v-model="newShow.arrondissement">
</div>

<div class="input-group">
  <input type="radio" :value="true" v-model="payant"> Payant<br>
  <input type="radio" :value="false" v-model="payant"> Gratuit
</div>

<div class="input-group">
  <span class="input-group-addon">Prix</span>
  <input type="number" class="form-control" placeholder="Prix" v-model="newShow.prix" :disabled="payant == 1 ? false : true">
</div>

<div class="input-group">
  <span class="input-group-addon">Image</span>
   <input type="text" class="form-control" placeholder="Lieu" v-model="newShow.img">
</div>

<div class="input-group">
  <span class="input-group-addon">Date de l'evenement: </span>
   <input type="date" v-model="newShow.date">
</div>


<div class="input-group">
  <span class="input-group-addon">Description</span>
  <input type="text" class="form-control" placeholder="Description" v-model="newShow.description">
  <p>Words: {{numWords}}</p>

</div>


<button type="button" @click="addShow">Ajouter</button>
</div>

<div v-if="stopCreating === true">
<h2>Vous ne pouvez plus créer d'evenements</h2>
</div>
</div>

</template>

<script>
import {Store} from '@/Store.js'


export default {
	name: 'myForm',
	data(){
		return{
			datas: Store.datas,
      newShow: {
				titre: "",
				lieu:"",
				adresse: "",
				arrondissement: "",
				type: "",
				date: "",
				prix: 0,
				img: "",
        description: "",
        site: "",
        capacité: 0
			},
      payant: false,
      stopCreating: false,
      nbCrea: 0
		}
	},

  methods: {
    addShow: function(){
      this.datas.shows.push(this.newShow);
      this.nbCrea +=1;
      console.log(this.nbCrea);
			this.newShow = {};
      this.blocker();
    },
     blocker: function(){
      if(this.nbCrea === 4){
        return this.stopCreating = true;
      }
    },

    maj: function (elt) {
    console.log("entra al maj");
		return this.newShow.titre[0].toUpperCase() + this.newShow.titre.substring(1, elt.length);
		},
  },

  computed:{ 
    
    numWords: function(){
    let words = 0;
		words += this.newShow.description.split(' ').length;
      return words -1;
     },
}
     
}
</script>