<template>
  <div>
<div class="sandbox-banner usecases">
    <div class="sanbox-banner-cover usecases">
      <Header/>
      <div class="banner-text-heading usecases single">
        <div class="banner-other-title">Community</div>
        <div style="width:80%" class="banner-sub-text">Find answers, ask questions, and connect with our community of Zenith Developers from around the world building tomorrow's banking solutions.</div>
      </div>
    </div>
  </div>
<CommunityHeader/>
 <div class="community-section-1">
    <div class="section-heading">
      <div class="section-header">Blogs</div>
     <router-link to="/blogs"><div class="view-all">View all</div></router-link> 
    </div>
    <div class="section-1-row" v-if="getBlogs.length > 0">
      <div class="section-1-col" v-for="item in getBlogs.slice(0,4)" :key="item.id">
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
  <div class="community-section-1">
    <div class="section-heading">
      <div class="section-header">Tutorials</div>
      <router-link to="/tutorials"><div class="view-all">View all</div></router-link> 
    </div>
    <div class="section-1-row" v-if="getTutorials.length > 0">
      <div class="section-1-col" v-for="item in getTutorials.slice(0,4)" :key="item.id">
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
  <div class="forum-section wf-section">
    <div class="section-heading">
      <div class="section-header">Recent Conversations</div>
       <router-link to="/forum"><div class="view-all">View all</div></router-link> 
    </div>
    <div class="forum-row">
      <div class="forum-col-1">
        <div class="leaderboard-header">Leaderboard</div>
        <div class="leaderboard-list" v-for="item in getLeaderboard" :key="item.id">
          <div class="div-block-community">
            <div class="avater">{{item.name.charAt(0)}}</div>
            <div class="avatar-name">{{item.name}}</div>
          </div>
          <div>
            <div class="leaderboard-rating"><span class="card-2-icon star"></span> {{item.stars}}</div>
          </div>
        </div>

      </div>
      <div class="forum-col-2" v-if="getQuestions.length > 0">
        <div class="col-2-card" v-for="item in getQuestions.slice(0,10)" :key="item.id">
          <div class="card-2-heading">
               <router-link  :to="{ name: 'ForumPage', params: {id: item.postId}}" class="card-header">{{item.title}}</router-link>
            <div v-if="item.status == 1" class="card-status"><span class="card-2-icon"></span> Solved</div>
              <div v-else class="card-status unsolved"><span class="card-2-icon"></span> UnSolved</div>
          </div>
           <div class="card-sub-text" v-html="item.body"></div>
          <div class="card-user">-{{item.name}}</div>
          <div class="card-actions forum">
            <div class="card-actions-item forum"><span class="action-icon"></span>{{item ? item.comments.$values.length : null}}</div>
          </div>
        </div>

      </div>
      <div v-else class="code-example" style="text-align:center">No post yet</div>
    </div>
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

    data() {
    return {     
    
    }
    },
    created(){
   this.$store.dispatch("getQuestionsPost");
    this.$store.dispatch("getBlogsPost");
     this.$store.dispatch("getTutorialsPost");
     this.$store.dispatch("getLeaderboard");
    },
  mounted () {
  window.scrollTo(0, 0)
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