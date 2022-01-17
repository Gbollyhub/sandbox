<template>
  <div>
<div class="sandbox-banner usecases">
    <div class="sanbox-banner-cover usecases">
      <Header/>
      <div class="banner-text-heading usecases single">
        <div class="banner-other-title">Hackatons</div>
        <div class="banner-sub-text">Find answers, ask questions, and connect with our community of Zenith Developers from around the world building tomorrow's banking solutions.</div>
      </div>
    </div>
  </div>
<CommunityHeader/>
  
  <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'
import CommunityHeader from '@/components/communityHeader.vue'
export default {
  name: 'Home',
  components: {
    Footer,
    Header,
    CommunityHeader
    
  },
    data() {
    return {
       
    
    }
    },

  mounted () {
    window.scrollTo(0, 500)
},
  methods: {

  }
}
</script>

<style scoped>
canvas {
  margin-bottom: 8px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
}

.app-header {
  padding: 16px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
  background-color: #555;
  color: #ddd;
}

.app-content {
  padding: 24px 16px;
}

.right {
  float: right;
}

</style>