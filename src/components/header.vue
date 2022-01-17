<template>
         <div data-collapse="medium" data-animation="default" data-duration="400" role="banner" class="sandbox-navbar w-nav">
      <a href="#" class="brand w-nav-brand"><img src="../assets/images/logo.png" loading="lazy" width="134" alt=""></a>
      <nav role="navigation" class="sandbox-nav-menu w-nav-menu">
        <router-link to="/" class="sandbox-nav-links w-nav-link w--current">Home</router-link>
        <router-link to="/usecases" class="sandbox-nav-links w-nav-link">Use Cases</router-link>
        <router-link v-if="user != null" to="/apidocs" class="sandbox-nav-links w-nav-link">API Docs</router-link>
        <router-link v-if="user != null" to="/feedback" class="sandbox-nav-links w-nav-link">Production Request</router-link>
         <router-link to="/faqs" class="sandbox-nav-links w-nav-link">FAQs</router-link>
          <router-link to="/community" class="sandbox-nav-links w-nav-link">Community</router-link>
        <router-link to="/contact" class="sandbox-nav-links w-nav-link">Contact</router-link>          
        <router-link v-if="user == null" to="/login" class="sandbox-nav-links w-nav-link">Login</router-link>
        <a href="/dashboard/overview" v-if="user != null" class="sandbox-nav-links w-nav-link">Go to Dashboard</a>
         <div v-if="user != null" @click="Logout" style="cursor:pointer" class="sandbox-nav-links w-nav-link">Logout</div>
      </nav>
      <div class="menu-btn w-nav-button">
        <div class="icon w-icon-nav-menu"></div>
      </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
    user: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null
    }
  },
  computed:{
    ...mapGetters(['getUser'])
  },
  methods:{
    Logout(){
      localStorage.removeItem('user')
      window.location.reload();
    }
  }
}
</script>
<style scoped>
a { text-decoration: none; color: white !important;}
</style>