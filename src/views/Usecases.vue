<template>
  <div>
  <div class="sandbox-banner usecases">
    <div class="sanbox-banner-cover usecases">
<Header/>
      <div class="banner-text-heading usecases">
        <div class="banner-other-title">Use Cases</div>
        <div class="banner-sub-text">Need inspiration? Check out real-world scenarios for using our APIs</div>
      </div>
    </div>
  </div>
  <div class="section-usecases">
    <div class="section-usecase-header">Showcases- See what developers are building</div>
    <div class="section-usecases-text">Check out various use cases and examples to see how our APIs can solve your needs.</div>
    <div class="usecase-row">
      <div class="usecase-col" v-for="item in filterDatabaseStatus" :key="item.id">
        <div class="usecase-card">
          <div class="usecase-card-img" :style="{ backgroundImage: `url(${item.img})`}"></div>
          <div class="usecase-description">
            <div class="decription-summary">
              <div class="description-header">{{item.title}}</div>
              <div class="description-text">{{item.description}}</div>
            </div>
           <router-link :to="item.routerLink" class="description-button">Learn more</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'
import Database from './Database.json'
export default {
  name: 'Home',
  components: {
    Footer,
    Header
  },
  computed:{
   filterDatabaseStatus(){
     const filterData = Database.filter( x => {
       return x.status == true
     })
     return filterData;
   }
  },
    mounted () {
  window.scrollTo(0, 0)
},
}
</script>
