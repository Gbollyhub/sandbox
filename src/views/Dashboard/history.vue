<template>
    <div>
         <div class="page-control">
 <Topbar/>
  <div class="i-dashboard-row">
<Sidebar/>
    <div class="i-dashboard-content">
<Loader v-show="loader"/>
      <div class="i-power-sidebar-div mobile">
                <div class="i-poer-sidebar-div-header">Welcome!<span class="id-span">John Doe</span></div>
        <div class="sidebar-div-col-value">If you run into any problems. Kindly send us an email at integrations@zenithbank.com</div>
      </div>
 <div>
    
        <div className="i-power-history-header">Post History</div>
        <br/>
                    <div class="sidebar-div-row">
          <div class="sidebar-div-col">
              <select @change="findPost($event)" style="marginBottom: 30px" class="app-select w-select">
              <option selected value="question">Question</option>
               <option value="tutorial">Tutorial</option>
               <option value="blog">Blog</option>
            
            </select>
          </div>
          <div class="sidebar-div-col">

          </div>
                    </div>
      <div className="history-table">
      <table  v-if="getPostByUser.length > 0">

    <thead>
         <tr>
         <th><input type="checkbox" /></th>
    <th>Created Date</th>
    <th>Post Title</th>
    <th>Tags</th>
    <th>Likes</th>
    <th>Updated Date</th>
    <th>.</th>
    <th>.</th>
  </tr> 
    </thead>
<tbody>
  <tr v-for="(post, index) in getPostByUser" :key="post.id">
  <td><input type="checkbox" /></td>
    <td>{{ formatDate2(post.createdDate) }}</td>
    <td>{{post.title}}</td>
    <td>{{post.tags}}</td>
    <td><div style="width:150px;overflow:hidden">{{post.likes}}</div></td>
     <td>{{formatDate2(post.updatedDate)}}</td>
    <td> <router-link :to="{ name: 'EditPost', params: {id: post.postId}}"><div class="method-style">Edit</div></router-link></td>
     <td><div @click="deletePost(index, post.postId)" class="method-style" style="color:white;background:#c02">Delete</div></td>
  </tr>
  </tbody>
</table>  
<div class="empty-table" v-else>
  No post yet
  </div>
      </div>
      </div>
    </div>
  </div>
    </div>
    </div>
</template>


<script>
import Topbar from "../../components/Dashboard/TopBar.vue";
import Sidebar from "../../components/Dashboard/SideBarr.vue";
import global from '../../mixin'
import Loader from '@/components/loader.vue'
import axios from 'axios'
import moment from 'moment'
export default {
    mixins:[global],
  name: 'Home',
  components: {
Topbar,
Sidebar,
Loader
    
  },
    data() {
    return {   
      loader:false 
    }
    },

  mounted () {
  window.scrollTo(0, 0)
},
created(){
  this.$store.dispatch("getPostByUser",'question');
},
computed: {
      filters: {
  moment: function (date) {
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  }
}
},

  methods: {
    findPost(event){
      this.loader = true;
      this.$store.dispatch("getPostByUser",event.target.value);
       this.loader = false;
    },
   async deletePost(index, id){
     this.loader = true;
     try{
       const response = await axios.delete(this.getUrl + '/Posts/' + id)

        if(response.status == 200){
        this.loader = false;
        let newData = this.getPostByUser
        newData.splice(index, 1);
        this.$store.commit('setPostByUser', newData)
        this.response = response.data.message;
        this.status = 'success'
        this.status_modal = true
             }
     }
     catch(error){
         this.loader = false;
         console.log(error)
        this.response = error;
        this.status = 'failed'
        this.status_modal = true
     }
        
    }
  }
}
</script>


<style scoped>
.empty-table{
  text-align: center;
  padding:20px;
  font-size:15px;
  font-weight:500;
}
.content-area{
    margin-top: 50px ;
}
.content-area-header{
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 50px;
}
</style>