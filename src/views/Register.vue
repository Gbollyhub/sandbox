<template>
    <div>
        <div class="login-bg">
          <StatusModal v-show="status_modal" :status="status" :response="response" :closeModal="closeModal"/>
          <Loader v-show="loader"/>
    <div class="wordings">
      <div class="text-box-header">Zenith Bank Offers APIS for developers</div>
      <div class="textbox-sub">Start developing now. Register now to get your api key and begin your journey</div>
      <router-link  class="text-box-btn" to="/login">Login into your account</router-link>
    </div>
    <div class="ph-login-div-2"><img src="../assets/images/logo-red.svg" loading="lazy" width="38" alt="" class="app-logo">
      <div class="dev-login-heading">
        <div class="dev-login-header">Register for an Account</div>
        <div class="dev-login-sub">Enter your valid credentials to continue</div>
      </div>
      <div >
        <form id="email-form"  @submit.prevent="Submit">
            <div class="register-row">
            <div class="register-col">     
          <label for="name" class="dev-login-label">First name</label>
          <input v-model="form.first_name" type="text" class="dev-login-textfield w-input"  required>
            </div>
            <div class="register-col">   
          <label for="name-3" class="dev-login-label">Last name</label>
          <input v-model="form.last_name" type="text" class="dev-login-textfield w-input" required>
            </div>
            </div>

             <div class="register-row">
            <div class="register-col">     
          <label for="name" class="dev-login-label">Email Address</label>
          <input v-model="form.email" type="email" class="dev-login-textfield w-input"  required>
            </div>
            <div class="register-col">   
          <label for="name-3" class="dev-login-label">Mobile Number</label>
          <input v-model="form.mobile_number" type="text" class="dev-login-textfield w-input" required>
            </div>
            </div>

            <div class="register-row">
            <div class="register-col">     
          <label for="name" class="dev-login-label">Company Name</label>
          <input v-model="form.company_name" type="text" class="dev-login-textfield w-input"  required>
            </div>
            <div class="register-col">   
          <label for="name-3" class="dev-login-label">Company Website</label>
          <input v-model="form.company_website" type="text" class="dev-login-textfield w-input" required>
            </div>
            </div>

           <div class="dev-login-label forgot-password">Forgot Password?</div>
           <br>
           <div>
           <button style="width:100%" type="submit" class="dev-login-btn">Register</button>  
           </div>
      <br>
      <div style="text-align:center">
        <a href="/" class="back-link">Go back to homepage</a>
      </div>
      
          </form>
  
      </div>
    </div>
  </div>
    </div>
</template>

<script>
import axios from 'axios'
import StatusModal from '@/components/modal/status_modal.vue'
import Loader from '@/components/loader.vue'
export default {
  components:{
    StatusModal,
    Loader
  },
  data(){
    return{
      username:'',
      password:'',
      status_modal: false,
      status: 'failed',
      loader:false,
      response:'',
     form: {
             first_name:"",
      last_name:"",
      email:"",
      mobile_number:"",
      company_name:"",
      company_website:""
     }

    }
  },
  methods:{
        closeModal(){
     this.status_modal = false
        },


        clearForm(){
      this.form.first_name=""
      this.form.last_name=""
      this.form.email=""
      this.form.mobile_number=""
      this.form.company_name=""
      this.form.company_website=""
        },
          async Submit(){
       this.loader = true;

         try {
           
             const response = await axios.post('https://developer.zenithbank.com/developer-aaa/v1/developer/register',this.form,
             {
               headers:{
               'Authorization' : 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE4NjQ0MTQ5MzIsIlVzZXIiOiJjb25zb2xlIiwiVHlwZSI6InB1YmxpYyIsIkRldmljZV9pZCI6bnVsbCwiQXBwX2lkIjoiIn0.MhoxhVDA3Z38lNiljxrsQ6rGQCr6gveWt9vkEyntnAazUOWbVhybm2OE6gaQCfKUjzOIYsheB_uCxK4DjAAvCO5jQjmIQwtzUzJNgBCj49HhTdXr1y6rNyiCGXrmJ2t49dWD9o1n9moGHLECw7BV6ScYB2N9zeutbJwyvFM7IxahM7aIrKxWwBPFI40zsjjyDvFHVBGEr31qwYZB5gouVvhpvK0T_z4wH1aPkr9AQ1mceAf8d00DWVwjW7tQtIw9ABCwu8ZsAy_sLGc7HpVxc0LSpzzp8nsvJTqYTMRfkLDEkMKBE_LjyAVOtC5NDvtZEdow6Zxj8_0K9jkYw_QfHvnN923znjRAccNjdKviVpFYLzGyuo0J5FsJk_pEsODri0YAskvRlnBzOJ8FPbxSgbo9Nr_vneXFOhTKLeIBKYpP2KwYUKvKLGLu6vGBmtVOBo-PCLeXeaDaiSZ5faFLrljvCYCXxcA9vk29pdNUnY-X5ndx7qGu2pGsgSrv49UwEIezU066C5Un5yyzLmiGq_V59_vpx2MC_bNQOJXqcikTruxqJF1Uhr378p9A_sct-JZxr-cACraTF7-sTfDyy8WOdw1cceBhqSBeDWwvGcS2W8LPqDLiwCbstw1wfY14Ed59wJ9lYUcsWPzdtOJiUxtc70UWojbjhweQ5ppJAKE'

               }
             }
             )

             if(response.status == 200 ){        
               this.loader = false;
               this.clearForm();
        this.response = "Registration was successful. You would be notified in your mailbox when your account has been confirmed.";
        this.status = 'success'
        this.status_modal = true
             }
             else{
          this.loader = false;
        this.response = response.data.message;
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
    }
  
}
</script>