<template>
    <div>
        <div class="login-bg">
          <StatusModal v-show="status_modal" :status="status" :response="response" :closeModal="closeModal"/>
          <Loader v-show="loader"/>
    <div class="wordings">
      <div class="text-box-header">Zenith Bank Offers APIS for developers</div>
      <div class="textbox-sub">Start developing now. Register now to get your api key and begin your journey</div>
       <router-link class="text-box-btn" to="/register">Register for an account</router-link>
    </div>
    <div class="ph-login-div"><img src="../assets/images/logo-red.svg" loading="lazy" width="38" alt="" class="app-logo">
      <div class="dev-login-heading">
        <div class="dev-login-header">Login into your Account</div>
        <div class="dev-login-sub">Enter your valid credentials to continue</div>
      </div>
      <div >
        <form id="email-form"  @submit.prevent="Submit">
          <label for="name" class="dev-login-label">Username</label>
          <input v-model="username" type="text" class="dev-login-textfield w-input"  required>
          <label for="name-3" class="dev-login-label">Password</label>
          <input v-model="password" type="password" class="dev-login-textfield w-input" required>
           <div class="dev-login-label forgot-password">Forgot Password?</div>
           <br>
           <div>
           <button style="width:100%" type="submit" class="dev-login-btn">Login</button>  
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
import CryptoJS from 'crypto-js'
import global from '../mixin'
export default {
  mixins:[global],
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
      response:''
    }
  },
  methods:{
    encryptData(data){
   var key = CryptoJS.enc.Utf8.parse('1$Zenith3$dEvel@per5$cENTer!!');
        var iv = CryptoJS.enc.Utf8.parse('1$Zenith3$dEvel@per5$cENTer!!');
        var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), key,
            {
                keySize: 128 / 8,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        return encrypted.toString();
    },
        closeModal(){
     this.status_modal = false
        },

          async Submit(){
       this.loader = true;

             const formData = {
        "username": this.username,
        "password":this.password
        }

         try {
           
             const response = await axios.post('https://developer.zenithbank.com/developer-aaa/v1/login',formData)
    
             if(response.status == 200 ){     
               
                await axios.post(this.getUrl + '/Users/Registration',{
                  "userId": response.data.a_user_id.toString(),
                  "name": response.data.first_name + "" + response.data.last_name,
                  "email": response.data.username
                })

             localStorage.setItem('user', JSON.stringify(response.data))
               this.loader = false;
               this.$router.push('/')
             }
             else if(response.status == 401){
          this.loader = false;
        this.response = "Invalid Credentials";
        this.status = 'failed'
        this.status_modal = true
             }

         } catch (error) {
          this.loader = false;
        this.response = error.response.data.message;
        this.status = 'failed'
        this.status_modal = true
         }
            
      },
    }
  
}
</script>