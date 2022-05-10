<template>
  <div class="vue-tempalte">
    <!-- Navigation Login -->
    <nav v-if="$route.path == '/' || $route.path == '/signup' || $route.path == '/forgot-password' " class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left colorBlack" href="https://fvalex-portfolio.netlify.app/" target="_blank">
           AleX
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3 mr colorBlack " to="/">Connexion</router-link>
          </li>
          <li class="nav-item  ml-5">
            <router-link class="btn btn-outline-dark" to="/signup">S'identifier</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Navigation Accueil-->
    <nav v-if="$route.path != '/' && $route.path != '/signup' && $route.path != '/forgot-password' " class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left colorBlack" href="https://fvalex-portfolio.netlify.app/" target="_blank">
           AleX
        </a>
        <ul class="nav navbar-nav flex-row float-right">
          <li>
            <button type="button" class="btn btn-outline-dark mr"  @click="goBack" >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-square" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
              </svg>
                Button
            </button>           
          </li>
          <li class="nav-item ml-5">
            <router-link class="nav-link pr-3 mr colorBlack " to="/accueil" v-for="laniste in lanistes" :key="laniste.id">
              Bonjour: {{ laniste.laniste }}
            </router-link>  
          </li>
          <li class="nav-item  ml-5">
            <router-link class="btn btn-outline-dark" to="/">Déconnexion</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <!-- Main -->
    <div class="App">
      <div v-if="$route.path == '/' || $route.path == '/signup' || $route.path == '/forgot-password' " class="vertical-center" >
        <div class="inner-block">
          <router-view />
        </div>
      </div>
      <div v-if="$route.path == '/accueil'">
        <router-view />
      </div>
      <div v-else>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { getAllLanistes } from "./api/api";
// import { getLanisteByName } from "./api/api";
import SignUpVue from "./view/Log/SignUp.vue"
export default {
  name: 'App',
  data() {
    return {
      lanistes: []
    };
  },
  methods : {
    async getLanistes() {
      try {
          this.lanistes = await getAllLanistes();

      } catch (e) {
          this.error = e
      }
    },
    goBack() {
      this.$router.go(-1)
    }, 
  },
  // async getLanisteByName() {
  //   try {
  //     this.laniste = await getLanisteByName(this.$route.params.name);
  //     console.log(getLanisteByName(this.route.params.name))
  //   } catch (e){
  //     this.error = e
  //   }
  // },
  async mounted() {
    await this.getLanistes();
  },
  component: { 
    SignUpVue
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.colorBlack{
  color: black !important;
}
.mr{
  margin-right: 12px;
}
</style>
