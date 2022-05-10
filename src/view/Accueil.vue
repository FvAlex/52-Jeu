<template>
  <div class="mt-5">
    <div class="card-group paddingT mx-auto" style="width:70%;gap:50px" v-for="laniste in lanistes" :key="laniste.id">
    
      <div class="card zoom" style="width: 50%;">
        <a href="" style="text-decoration: none;color: black;">
          <img class="card-img-top" src="./../assets/images/bc.webp" alt="Card image cap">
          <div class="card-body" v-for="ludi in ludis" :key="ludi.lanisteId">
            <div>
              <h5 class="card-title">Votre Ludi : {{ ludi.nom }}</h5>
              <p class="card-text">Spécialité : {{ ludi.specialite }}</p>
              <p class="card-text"><small class="text-muted">Denié : 100</small></p>
            </div>  
          </div>
        </a>
      </div>
      <div class="card zoom" style="width: 50%;">
        <a href="" style="text-decoration: none;color: black;">
          <img class="card-img-top" src="./../assets/images/bc.webp" alt="Card image cap">
          <div class="card-body" v-for="gladiateur in gladiateurs" :key="gladiateur.ludiId">
            <h5 class="card-title">Vos gladiateurs</h5>
            <ul class="card-text">
              <li>Nom : {{ gladiateur.nom }}
                <ul>
                  <li>Adresse : {{ gladiateur.adresse }} point(s)</li>
                  <li>Force : {{ gladiateur.force }} point(s)</li>
                  <li>Equilibre : {{ gladiateur.equilibre }} point(s)</li>
                  <li>Vitesse : {{ gladiateur.vitesse }} point(s)</li>
                  <li>Statégie : {{ gladiateur.strategie }} point(s)</li>
                </ul>
              </li>
            </ul>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </a>
      </div>
      <div class="card zoom" style="width: 50%;">
      <router-link to="/entrainement" style="text-decoration: none;color: black;">
        <img class="card-img-top" src="./../assets/images/bc.webp" alt="Card image cap">
          <div class="card-body" v-for="entrainement in entrainements" :key="entrainement.gladiateurId">
            <h5 class="card-title">Entrainement</h5>
            <p class="card-text">{{ entrainement.gladiateurId }}</p>
            <p class="card-text"><small class="text-muted">{{ entrainement.date }}</small></p>
          </div>
        </router-link>
      </div>
    </div> 
  </div>
</template>

<script>

import { getAllLanistes, getAllLudis, getAllGladiateurs, getAllEntrainements, getLanistesById } from '../api/api';
import LoginVue from './Log/Login.vue';

export default {
  name: "SimpleStepper",
  component: {
    LoginVue
  },
    data() {
    return {
      lanistes: [],
      ludis: [],
      gladiateurs: [],
      entrainements: []
    };
  },
  methods : {
    async getLanistesById() {
        try {
            this.lanistes = await getLanistesById();

        } catch (e) {
            this.error = e
        }
    },
    async getLanistes() {
        try {
            this.lanistes = await getAllLanistes();

        } catch (e) {
            this.error = e
        }
    },
     async getLudis() {
        try {
            this.ludis = await getAllLudis();

        } catch (e) {
            this.error = e
        }
    },
     async getGladiateurs() {
        try {
            this.gladiateurs = await getAllGladiateurs();

        } catch (e) {
            this.error = e
        }
    },
     async getEntrainements() {
        try {
            this.entrainements = await getAllEntrainements();

        } catch (e) {
            this.error = e
        }
    },
  },
 async mounted() {
    await this.getLanistesById();
    await this.getLudis();
    await this.getGladiateurs();
    await this.getEntrainements();

  },
}
</script>

<style>
.paddingT{
  padding-top: 100px;
}
.zoom {
  transition: transform .2s; /* Animation */
}

.zoom:hover {
  transform: scale(1.1); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>