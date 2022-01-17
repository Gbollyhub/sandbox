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
    
        <div className="i-power-history-header">Make a Post</div>
        <br/>
        <div>
<form @submit.prevent="postData">
            <div class="sidebar-div-row">
          <div class="sidebar-div-col">
              <select v-model="form.category" style="marginBottom: 30px" class="app-select w-select">
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
  <input v-model="form.title" type="text" class="textfield-input w-input"  placeholder="Type here"  required>
          </div>
          <div class="sidebar-div-col">

          </div>
          <div class="sidebar-div-col">
                         <p>Post Tags</p>
  <input v-model="form.tags" type="text" class="textfield-input w-input"  placeholder="Html,Javascript,Web"  required>

          </div>
          
        </div>
        <br/>
<editor
 v-model="form.body"
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
 <button  style="width:30%" type="submit" class="dev-login-btn">Post</button>  
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
import moment from "moment"
export default {
  mixins:[global],
    components:{
Topbar,
Sidebar,
     'editor': Editor
    },
    data() {
        return {
            content:"",
            form:{
            category: "",
            title: "",
            tags: "",
            body: "",
                }
        }
    },

    methods:{
      updateStoreData(category, data){

        switch(category){
          case 'question' :
          let newData = {
                          ...data,
                          createdDate: moment(new Date.now()).format("DD/MM/YYYY"),
                          updatedDate: moment(new Date.now()).format("DD/MM/YYYY"),
                          likes: 0
                        }
          let newArray = this.getQuestions
          this.newArray.push()
          
          this.$store.commit('setQuestionPosts', newArray);
            break;
           case 'tutorial' :
          this.$store.commit('setTutorialPosts', newArray);
            break;
           case 'blog' :
          this.$store.commit('setBlogPosts', newArray);
            break;

        }
      },
      clearForm(){
          this.form.category = ''
          this.form.title = ''
          this.form.tags = ''
          this.form.body = ''
      },
             closeModal(){
         this.status_modal = false ;
         
       },
          async postData(){
      this.loader = true;
      const user = JSON.parse(localStorage.getItem("user"))
       const formData ={
                      "category": this.form.category,
                      "title": this.form.title,
                      "tags": this.form.tags,
                      "body": this.form.body,
                      "name": user.first_name + " " + user.last_name,
                      "userId": user.a_user_id.toString()
                    }
      try {
        const response = await axios.post(this.getUrl + '/Posts',formData)
        if(response.data.statusCode == 201){
           this.loader = false;
        
           this.clearForm();
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
.content-area{
    margin-top: 50px ;
}
.content-area-header{
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 50px;
}
</style>