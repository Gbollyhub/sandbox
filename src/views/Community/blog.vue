<template>
  <div>
<div class="sandbox-banner usecases">
    <div class="sanbox-banner-cover usecases">
      <Header/>
      <div class="banner-text-heading usecases single">
        <div class="banner-other-title">Blogs</div>
        <div class="banner-sub-text">Find answers, ask questions, and connect with our community of Zenith Developers from around the world building tomorrow's banking solutions.</div>
      </div>
    </div>
  </div>
<CommunityHeader/>
   <div class="community-section-1">
    <div class="section-heading">
      <div class="section-header">Blogs</div>
    </div>
    <div class="section-1-row" v-if="getBlogs.length > 0">
     <div class="section-1-col" v-for="item in getBlogs" :key="item.id">
        <div class="section-1-col-card">
          <!-- <div class="card-img"></div> -->
          <div class="card-paragraph">
             <router-link  :to="{ name: 'BlogPage', params: {id: item.postId}}" class="card-header">{{item.title}}</router-link>
            <div class="card-user">-{{item.name}}</div>
          </div>
          <div class="card-actions">
            <div class="card-actions-item"><span class="action-icon"></span>{{item.likes}}</div>
            <div class="card-actions-item"><span class="action-icon"></span>{{item.comments.$values.length}}</div>
            <!-- <div class="card-actions-item"><span class="action-icon"></span>200</div> -->
          </div>
        </div>
      </div>

    </div>
     <div v-else class="code-example" style="text-align:center">No post yet</div>
  </div>
  <Footer/>
  </div>
</template>
<script>
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'
import CommunityHeader from '@/components/communityHeader.vue'
import global from '../../mixin'
export default {
    mixins:[global],
  name: 'Home',
  components: {
    Footer,
    Header,
    CommunityHeader
    
  },
      created(){

    this.$store.dispatch("getBlogsPost");

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