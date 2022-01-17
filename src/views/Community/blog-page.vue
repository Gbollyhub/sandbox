<template>
  <div>
    <Status v-show="status_modal" :status="status" :response="message" :closeModal="closeModal"/>
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
  <div class="blog-content">
    <div class="blog-div">
      <div style="text-align:left">
       <BackButton/> 
      </div>
      
      <div class="blog-title">{{postData.title}}</div>
      <div class="blog-user">- Published on {{formatDate(postData.createdDate)}}</div>
      <div class="card-actions blog">
        <div class="card-actions-item"><span class="action-icon"></span>{{postData.likes}}</div>
        <div class="card-actions-item"><span class="action-icon"></span>{{postData ? postData.comments.$values.length : null}}</div>
      </div>
      <div class="blog-paragragh" v-html="postData.body"></div>
      <div class="blog-actions">
        <div class="blog-tags">
          <div class="blog-tag" v-for="(tag, index) in splitTags" :key="index" >{{tag}}</div>
        </div>
      </div>
      <div  v-if="user != null" class="blog-feedback">
        <div style="cursor:pointer" class="card-actions-item blog" @click="Like"> 
          {{postData.likes}}
          <span style="padding-left:10px" class="action-icon blog"></span> Like this post</div>
      </div>
        <div v-else class="blog-feedback">
        <router-link to="/login" style="cursor:pointer" class="card-actions-item blog" @click="Like"> 
          {{postData.likes}}
          <span style="padding-left:10px" class="action-icon blog"></span> Like this post</router-link>
      </div>
      <div class="blog-divider"></div>
      <div class="blog-author">
        <div class="author-flank-left">
          <div class="author-img">{{postData ? postData.name.charAt(0) : null}}</div>
          <div class="author-details">
            <div class="author-details-1">Written by</div>
            <div class="author-details-2">{{postData.name}}</div>
          </div>
        </div>
        <div class="author-flank-right">
          <div class="leaderboard-rating"><span class="card-2-icon star"></span> {{getStats.stars}}</div>
        </div>
      </div>
      <div v-show="user != null">
       <div class="answers-header">Comment on this post</div>
       
    <editor
       v-model="comment"
       api-key="3092c8e10j71wsti9jijqdbh6z2yi3vo2aqckj11lszocahp"
       :init="{

         menubar: true,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
       }"
     />
     <br/>
 <button  style="width:30%" @click="postComment" class="dev-login-btn"> {{loader? "Loading..." : "Post Answer"}}</button> 
    </div>
    <br>
 <div style="width:100%;display:block:text-align:center">
    <div class="answers-header">Community Comments</div>
      <div v-if="postData ? postData.comments.$values.length > 0 : null">
    <div class="answer-div" v-for="(comment,index) in postData ? postData.comments.$values : 5" :key="index">
      <div class="answer-header" v-html="comment.message"></div>
      <div class="blog-author">
        <div class="author-flank-left">
          <div class="author-img">{{postData ? comment.name.charAt(0) : null}}</div>
          <div class="author-details">
            <div class="author-details-1">Comment by</div>
            <div class="author-details-2">{{comment.name}}</div>
          </div>
        </div>
      </div>
    </div>
      </div>
       <div v-else class="code-example" style="text-align:center">No comment at the moment, Be the first to comment</div>
 </div>
    </div>

  </div>
  <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'
import CommunityHeader from '@/components/communityHeader.vue'
import BackButton from '@/components/BackButton.vue'
import global from '../../mixin.js'
import axios from "axios";
import Editor from '@tinymce/tinymce-vue';
export default {
  mixins:[global],
  name: 'Home',
  components: {
    Footer,
    Header,
    CommunityHeader,
    BackButton,
    'editor': Editor
    
  },
    data() {
    return {
       postData:"",
       isMounted: false
    }
    },

  mounted () {
    this.isMounted = true
   window.scrollTo(0, 500);
    this.fetchData();
},
computed:{
 splitTags(){
   if(this.isMounted == true){
     return this.postData.tags.split(',')
   }
 },

},
    methods:{
       closeModal(){
         this.status_modal = false ;
       },
    async fetchData(){
    const result = await axios.get(this.getUrl + '/Posts/' + this.$route.params.id)
    await this.$store.dispatch("getStats", result.data.post.userId)
    this.postData = result.data.post;
    },
    async Like(){
      const user = JSON.parse(localStorage.getItem("user"))
      try {
        const response = await axios.post(this.getUrl + '/Posts/Likes',{
  "postId": this.postData.postId,
  "userId": user.a_user_id.toString()
})
        if(response.data.statusCode == 200){
           this.postData.likes = this.postData.likes + 1
        }
        else{
          this.loader = false;
          this.status_modal = true;
          this.status = 'failed';
          this.message = response.data.message
        }

      } catch (error) {
        console.log(error)
        this.loader = false;
        this.status_modal = true;
        this.status = 'failed';
         this.message = error.response.data.message;
      }
    },
                  async postComment(){
      this.loader = true;
      const user = JSON.parse(localStorage.getItem("user"))
       const formData ={
                      "message": this.comment,
                      "userId": user.a_user_id.toString(),
                      "postId": this.postData.postId,
                      "name": user.first_name + " " + user.last_name,
                    }
      try {
        const response = await axios.post(this.getUrl + '/Comments',formData)
        if(response.data.statusCode == 201){
           this.loader = false;
           this.postData.comments.$values.push(formData)
          this.comment = ""
          this.status_modal = true;
          this.status = 'success';
          this.message = response.data.message
        }
        else{
          this.loader = false;
          this.status_modal = true;
          this.status = 'failed';
          this.message = response.data.message
        }

      } catch (error) {
        console.log(error)
        this.loader = false;
        this.status_modal = true;
        this.status = 'failed';
         this.message = error.response.data.message;
      }

    },
    }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
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