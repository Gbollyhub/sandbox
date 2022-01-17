<template>
    <div>
        <Loader v-show="loader"/>
  <Status v-show="status_modal" :status="status" :response="message" :closeModal="closeModal"/>
         <div class="page-control">
 <Topbar/>
  <div class="i-dashboard-row">
<Sidebar/>
    <div class="i-dashboard-content">

      <div class="i-power-sidebar-div mobile">
                 <div class="i-poer-sidebar-div-header">Welcome!<span class="id-span">{{user}}</span></div>
        <div class="sidebar-div-col-value">If you run into any problems. Kindly send us an email at integrations@zenithbank.com</div>
      </div>
 <div>
    
        <div className="i-power-history-header">Edit Post</div>
        <br/>
        <div>
<form @submit.prevent="postData">
            <div class="sidebar-div-row">
          <div class="sidebar-div-col">
              <select v-model="editData.category" style="marginBottom: 30px" class="app-select w-select">
               <option value="0">Select a Post Type</option>
               <option value="question">Question</option>
               <option value="tutorial">Tutorial</option>
               <option value="blog">Blog</option> 
            
            </select>
          </div>
          <div class="sidebar-div-col">

          </div>
                    <div class="sidebar-div-col">
                         <p>Post Title</p>
  <input v-model="editData.title" type="text" class="textfield-input w-input"  placeholder="Type here"  required>
          </div>
          <div class="sidebar-div-col">

          </div>
          <div class="sidebar-div-col">
                         <p>Post Tags</p>
  <input v-model="editData.tags" type="text" class="textfield-input w-input"  placeholder="Html,Javascript,Web"  required>

          </div>
          
        </div>
        <br/>
<editor
 v-model="editData.body"
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
 <button  style="width:30%" type="submit" class="dev-login-btn">Update Post</button>  
</form>
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
import Editor from '@tinymce/tinymce-vue';
import global from '../../mixin.js'
import axios from "axios";
export default {
  mixins:[global],
    components:{
Topbar,
Sidebar,
     'editor': Editor
    },
    data() {
        return {
            editData:'',
            content:"",
            form:{
            category: "",
            title: "",
            tags: "",
            body: "",
                }
        }
    },
    computed:{
    filterPost(){
      let newArray =  this.getPostByUser.filter( (post) => {
            return post.postId == this.$route.params.id
        });
        console.log(newArray.target)
        return newArray;
    }
    },
    mounted(){
     this.fetchData()
    },

    methods:{

    async fetchData(){
    const result = await axios.get(this.getUrl + '/Posts/' + this.$route.params.id)

    this.editData =result.data.post;
    },
             closeModal(){
         this.status_modal = false ;
         this.$router.push('/dashboard/history')
       },
          async postData(){
      this.loader = true;
      const user = JSON.parse(localStorage.getItem("user"))
       const formData ={
                      "category": this.editData.category,
                      "title": this.editData.title,
                      "tags": this.editData.tags,
                      "body": this.editData.body,
                      "postId": this.editData.postId
                    }
      try {
        const response = await axios.put(this.getUrl + '/Posts/' + this.editData.postId,formData)
        if(response.data.statusCode == 200){
           this.loader = false; 
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
.content-area{
    margin-top: 50px ;
}
.content-area-header{
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 50px;
}
</style>