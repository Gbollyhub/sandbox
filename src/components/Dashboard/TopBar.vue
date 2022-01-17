<template>
    <div>
        <div class="i-dashboard-nav">
    <div class="i-dashboard-brand"><img src="../../assets/images/logo-red.svg" loading="lazy" height="50" alt=""/></div>
    <router-link to="/">Go to home</router-link>
    <div @click="Logout"  class="logout-text">Logout</div>
  </div>
    </div>
</template>

<script>
export default {
    methods:{
    Logout(){
      this.$store.dispatch('Logout');
    }
  }
}
</script>
<style scoped>
a {
  color: rgb(30, 30, 30);font-weight: 600;
  text-decoration: none;
  
}
</style>