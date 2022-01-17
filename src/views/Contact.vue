<template>
  <div>
                  <StatusModal v-show="status_modal" :status="status" :response="response" :closeModal="closeModal"/>
          <Loader v-show="loader"/>
<div class="sandbox-banner usecases">
    <div class="sanbox-banner-cover usecases">
<Header/>
      <div class="banner-text-heading usecases single">
        <div class="banner-other-title">Need to reach us?</div>
        <div class="banner-sub-text">You could send us a message if you have any issues or complaints. Our support team would be in touch.</div>
      </div>
    </div>
  </div>
  <div class="section-1">
    <div class="image-section section1"></div>
    <div class="text-section">
      <div class="text-section-header usecase">Send us a message</div>
      <div >
        <form @submit.prevent="sendContact">
          <div class="feedback-row">
        
              <label >Full Name</label>
              <input v-model="form.name" type="text" class="textfield-input w-input"  placeholder=""  required>
        
              <label >Email Address</label>
              <input v-model="form.email" type="email" class="textfield-input w-input"  placeholder=""  required>  
        
              <label>Message</label>
           <textarea v-model="form.message" placeholder="Example Text" maxlength="5000" id="field" name="field" class="textarea-input w-input"></textarea>
          <input type="submit" class="form-submit w-button">
          </div>
        </form>
      </div>
    </div>
  </div>
  <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'
import axios from 'axios'
import StatusModal from '@/components/modal/status_modal.vue'
import Loader from '@/components/loader.vue'
export default {
  components:{
    StatusModal,
    Loader,
    Footer,
    Header
  },
    data(){
    return{
      username:'',
      password:'',
      status_modal: false,
      status: 'failed',
      loader:false,
      response:'',
      form:{
        name: '',
        email: '',
        message: '',
      }
    }
  },
  methods:{
        closeModal(){
     this.status_modal = false
        },
        clearForm(){
        this.form.name = "";
         this.form.email = "";
          this.form.message = "";
        },

          async sendContact(){
       this.loader = true;

             const formData = {
                          "id": 0,
                          "name": this.form.name,
                          "email": this.form.email,
                          "message": this.form.message,
                          }

         try {
           
             const response = await axios.post('https://sandbox.zenithbank.com/docs/developerfeedback/api/feedback/contactus',formData )
             if(response.status == 200){        
             this.loader = false;
             this.clearForm();
        this.response = "Feedback sent!";
        this.status = 'success'
        this.status_modal = true
             }
             else{
          this.loader = false;
        this.response = "response.data.message";
        this.status = 'failed'
        this.status_modal = true
             }

         } catch (error) {
          this.loader = false;
        this.response = error;
        this.status = 'failed'
        this.status_modal = true
         }
            
      },
  },
    mounted () {
  window.scrollTo(0, 0)
},
}
</script>
