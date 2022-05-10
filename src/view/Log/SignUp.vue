<template>
  <div style="width: 450px;">
        <!-- 
            <h3>Se Connecter</h3>
            <div class="form-group pb-3">
                <label>Nom complet</label>
                <input type="text" class="form-control form-control-lg"/>
            </div>
            <div class="form-group pb-3">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" />
            </div>
            <div class="form-group pb-3">
                <label>Mot de passe</label>
                <input type="password" class="form-control form-control-lg" />
            </div>
            <router-link to="/accueil">
                <button type="submit" class="btn btn-dark btn-lg btn-block">Connexion</button>
            </router-link>            <p class="forgot-password text-right">
                Déjà enregistré
                <router-link :to="{name: 'login'}">S'identifier?</router-link>
            </p>
        </form> -->
    <form>
    <div class="card-style">
      <b-progress :value="progress" variant="success"></b-progress>
    </div>
    <b-card v-if="current_step==1" class="card-style" title="Inscription">
      <b-card-text>Pour vous inscrire cliquez sur <strong>suivant</strong></b-card-text>
      <b-button class="float-right" variant="primary" @click="onClickNext">Suivant</b-button>
    </b-card>
    <b-card v-if="current_step==2" class="card-style" title="Nom (laniste) :">
      <input type="text" v-model="laniste" class="mb-3 mt-2">
      <b-button class="float-left" variant="secondary" @click="onClickBack">Retour</b-button>
      <b-button class="float-right" variant="primary" @click="onClickNext">Suivant</b-button>
    </b-card>
    <b-card v-if="current_step==3" class="card-style" title="Nom de votre Ludi :">
      <input type="text" v-model="ludi" class="mb-3 mt-2">
      <b-button class="float-left" variant="secondary" @click="onClickBack">Retour</b-button>
      <b-button class="float-right" variant="primary" @click="onClickNext">Suivant</b-button>
    </b-card>
    <b-card v-if="current_step==4" class="card-style" title="Résume :">
      <b-card-text>Nom : {{ laniste }}</b-card-text>
      <b-card-text>Ludi : {{ ludi }}</b-card-text>
      <b-button class="float-left" variant="secondary" @click="onClickBack">Retour</b-button>
      <b-button class="float-right" variant="primary" @click="onClickNext">Suivant</b-button>
    </b-card>
    <b-card v-if="current_step==5" class="card-style" title="Let's Go ! ">
      <b-card-text>Rentrez dans votre Ludi ! </b-card-text>
      <b-button class="float-left" variant="secondary" @click="onClickBack">Back</b-button>
      <b-button @click="onClickButton" class="float-center" variant="success" to="/accueil" >Entrez !</b-button>
    </b-card>
    </form>
  </div>
  
</template>
<script>
export default {
  name: "SimpleStepper",
  data() {
    return {
      current_step: 1,
      max_step: 5,
      ludi: '',
      laniste: '',
    };
  },
  computed: {
    progress: function() {
      return Math.round(100 / this.max_step) * this.current_step;
    }
  },
  methods: {
    onClickNext: function() {
      this.current_step++;
    },
    onClickBack: function() {
      this.current_step--;
    },
    onClickFirst: function() {
      this.current_step = 1;
    },
    onClickButton () {
      this.$emit('clicked', 'laniste')
    }

  }
};
</script>

<style>
.card-style {
  width: 75%;
}
</style>
