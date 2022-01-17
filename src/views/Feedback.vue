<template>
  <div>
              <StatusModal v-show="status_modal" :status="status" :response="response" :closeModal="closeModal"/>
          <Loader v-show="loader"/>
<div class="sandbox-banner usecases">
    <div class="sanbox-banner-cover usecases">
<Header/>
            <div class="banner-text-heading usecases single">
        <div class="banner-other-title">Ready to go to Production?</div>
        <div class="banner-sub-text">Fill in the information below to continue</div>
      </div>
    </div>
  </div>
   <div class="section-1">
    <div class="text-section feedback">
      <div class="text-section-header usecase">Production Request</div>
      <div >
        <form @submit.prevent="sendFeedback">
          <div class="feedback-row">
            <div class="feedback-col">
              <label >Company Name</label>
              <input v-model="form.company_name" type="text" class="textfield-input w-input"  placeholder=""  required></div>
            <div class="feedback-col">
              <label >Developer Name</label>
              <input v-model="form.dev_name" type="text" class="textfield-input w-input"  placeholder=""  required></div>
            <div class="feedback-col">
              <label >Developer Phone Number</label>
              <input v-model="form.dev_phone" type="tel" class="textfield-input w-input"  placeholder=""  required></div>
            <div class="feedback-col">
              <label >Developer Email</label>
              <input v-model="form.dev_email" type="email" class="textfield-input w-input"  placeholder=""  required></div>
            <div class="feedback-col">
              <label >Production Date</label>
              <input v-model="form.prod_date" type="date" class="textfield-input w-input"  placeholder=""  required></div>
            <div class="feedback-col">
              <label >Service Integrated Into</label>
               <select v-model="form.service" id="roles" style="marginBottom: 30px" class="app-select w-select">
               <option selected>Select a Service</option> 
             <option  v-for="(role, index) in docs" :key="index" :value="role.title">{{role.title}}</option>     
            </select>
            </div>
          </div><input type="submit" class="form-submit w-button">
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
import Database from './Database.json'
export default {
  components:{
    StatusModal,
    Loader,
    Footer,
    Header
  },
    data(){
    return{
         docs: Database,
      username:'',
      password:'',
      status_modal: false,
      status: 'failed',
      loader:false,
      response:'',
      form:{
        company_name: '',
        dev_name: '',
        dev_phone: '',
        dev_email: '',
        prod_date: '',
        service: '',
      }
    }
  },
  methods:{
        closeModal(){
     this.status_modal = false
        },
        clearForm(){
        this.form.company_name = "";
        this.form.dev_name = "";
         this.form.dev_phone = "";
         this.form.dev_email = "";
          this.form.prod_date = "";
          this.form.service = "";
        },

          async sendFeedback(){
       this.loader = true;

             const formData = {
                          "id": 0,
                          "companyName": this.form.company_name,
                          "developerName": this.form.dev_name,
                          "developerPhone": this.form.dev_phone,
                          "developerEmail": this.form.dev_email,
                          "goLiveDate": this.form.prod_date,
                          "serviceIntegeratedInto": this.form.service,
                          }

         try {
           
             const response = await axios.post('https://sandbox.zenithbank.com/docs/developerfeedback/api/feedback/sendfeedback',formData )
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

<style scoped>
.feedback{
  flex: 0 100% !important;
}
</style>