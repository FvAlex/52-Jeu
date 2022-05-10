<template>
    <div class="vue-tempalte" >
        <form>
            <h3>S'identifier</h3>
            <div class="form-group pb-3" >
                <label>Adresse mail</label>
                <input type="email" class="form-control form-control-lg"  v-model="email" required/>
            </div>
            <div class="form-group pb-3 ">
                <label>Mot de passe</label>
                <input type="password" class="form-control form-control-lg" v-model="mdp" required />
            </div>
            <div v-for="laniste in lanistes" :key="laniste.id">
                <router-link  v-if="email && mdp && email == laniste.email && mdp == laniste.password" to="/accueil">
                    <button type="submit" class="btn btn-dark btn-lg btn-block" @click="onClickButton">Connexion</button>
                </router-link>
            </div>
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Mot de passe oublié ?</router-link>
            </p>
            <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                </ul>
            </div>
        </form>
    </div>
</template>
<script>

import { getAllLanistes } from '../../api/api';


export default {
  data() {
      return {
          lanistes: [],
          email: '',
          mdp: ''
      };
  },
  methods : {
    onClickButton (email) {
      this.$emit('clicked', email)
    },
    async getLanistes() {
        try {
            this.lanistes = await getAllLanistes();

        } catch (e) {
            this.error = e
        }
    }, 
  },
 async mounted() {
    await this.getLanistes();
  },

    }
</script>