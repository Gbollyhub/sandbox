<template>
  <div>
    <div class="sandbox-banner">
<Header/>
    <div class="sanbox-banner-cover">
      <div class="banner-text-heading">
        <div class="text-animation">
          <div class="typed-text">Welcome to Zenith Developer Center</div>
          <div class="typed-cursor"></div>
        </div>
        <div class="banner-sub-text">Design. Build. Deliver. Open up a new world of possibilities for your business with direct access to Zenith APIs, tools and expertise.</div>
        <router-link to="/register" v-if="user == null" class="banner-button">Register for an account</router-link>
      </div>
    </div>
  </div>
  <div class="section-1">
    <div class="image-section section1"></div>
    <div class="text-section">
      <div class="text-section-header">Zenith Developer Center</div>
      <p class="text-section-paragraph">It makes an increasing portion of our capabilities available as application program interfaces (APIs). Zenith Developer offers you direct access to a growing number of APIs, tools, and support that can help you start building easier, faster and more secure ways to power commerce.</p>
      <p class="text-section-paragraph">Our wide array of APIs can help enable you to transform your business, quickly get to market, and exceed customer expectations.</p>
    </div>
  </div>
  <div class="section-1 section2">
    <div class="text-section typeb">
      <div class="text-section-header">Use Cases</div>
      <p class="text-section-paragraph">Check out various use cases and examples to see how our APIs can solve your needs.</p>
     <router-link to="/usecases"  class="section-button">Explore Use Cases</router-link>
    </div>
    <div class="image-section section2"></div>
  </div>
  <div class="section-1">
    <div class="image-section section3"></div>
    <div class="text-section">
      <div class="text-section-header">Community</div>
      <p class="text-section-paragraph">Have a question you need help with? Our forum has plenty to explore, Read blog posts, tutorial and get to know who holds the spot as our Community top user.</p>
 
          <router-link to="/community"  class="section-button">Explore API Docs</router-link>

    </div>
  </div>
  <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'
export default {
  name: 'Home',
  components: {
    Footer,
    Header
  },
  data(){
    return{
        user: JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null
    }
  },
    mounted () {
  window.scrollTo(0, 0)
},
}
</script>
