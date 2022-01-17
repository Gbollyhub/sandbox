<template>
  
<div class="i-dashboard-sidebar">
      <div class="i-power-sidebar-div">
        <div class="i-poer-sidebar-div-header">Welcome!<span class="id-span">{{user}}</span></div>
        <div class="sidebar-div-col-value">If you run into any problems. Kindly send us an email at integrations@zenithbank.com</div>

      </div>
      <div class="i-power-sidebar-nav">
        <router-link to="/dashboard/overview" class="i-power-list-row link-active">
          <div class="i-power-list-col-icon">
          <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0095 0.164212C11.873 0.0577932 11.7049 0 11.5318 0C11.3587 0 11.1906 0.0577932 11.0541 0.164212L0 8.78362L0.956173 9.99287L2.30774 8.93901V18.4615C2.30855 18.8693 2.4709 19.2601 2.75925 19.5485C3.0476 19.8368 3.43845 19.9992 3.84623 20H19.2312C19.6389 19.9992 20.0298 19.8368 20.3181 19.5485C20.6065 19.2601 20.7688 18.8693 20.7697 18.4615V8.94593L22.1212 9.9998L23.0774 8.79054L12.0095 0.164212ZM13.0772 18.4615H10.0002V12.3075H13.0772V18.4615ZM14.6157 18.4615V12.3075C14.6153 11.8996 14.4531 11.5085 14.1646 11.2201C13.8762 10.9317 13.4851 10.7695 13.0772 10.769H10.0002C9.5923 10.7695 9.20121 10.9317 8.91278 11.2201C8.62434 11.5085 8.46212 11.8996 8.46171 12.3075V18.4615H3.84623V7.73975L11.5387 1.74732L19.2312 7.74744V18.4615H14.6157Z" fill="currentColor"/>
</svg>

            </div>
          <div class="i-power-list-col-text">OVERVIEW</div>
        </router-link>
        <router-link to="/dashboard/post" class="i-power-list-row ">
          <div class="i-power-list-col-icon">
<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 17.22H2V5H9V3H2C0.9 3 0 3.9 0 5V17C0 18.1 0.9 19 2 19H14C15.1 19 16 18.1 16 17V10H14V17.22Z" fill="currentColor"/>
<path d="M16 0H14V3H11C11.01 3.01 11 5 11 5H14V7.99C14.01 8 16 7.99 16 7.99V5H19V3H16V0ZM4 7H12V9H4V7ZM4 10V12H12V10H9H4ZM4 13H12V15H4V13Z" fill="currentColor"/>
</svg>


            </div>
          <div class="i-power-list-col-text">POST</div>
        </router-link>
                <router-link to="/dashboard/history" class="i-power-list-row ">
          <div class="i-power-list-col-icon">
          <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3636 9.19091V3.63636C16.3636 3.15415 16.1721 2.69169 15.8311 2.35071C15.4901 2.00974 15.0277 1.81818 14.5455 1.81818H10.7455C10.3636 0.763636 9.36364 0 8.18182 0C7 0 6 0.763636 5.61818 1.81818H1.81818C0.818182 1.81818 0 2.63636 0 3.63636V16.3636C0 16.8458 0.191558 17.3083 0.532533 17.6493C0.873508 17.9903 1.33597 18.1818 1.81818 18.1818H7.37273C8.51818 19.3091 10.0818 20 11.8182 20C15.3364 20 18.1818 17.1545 18.1818 13.6364C18.1818 11.9 17.4909 10.3364 16.3636 9.19091ZM8.18182 1.81818C8.68182 1.81818 9.09091 2.22727 9.09091 2.72727C9.09091 3.22727 8.68182 3.63636 8.18182 3.63636C7.68182 3.63636 7.27273 3.22727 7.27273 2.72727C7.27273 2.22727 7.68182 1.81818 8.18182 1.81818ZM1.81818 16.3636V3.63636H3.63636V5.45455H12.7273V3.63636H14.5455V7.89091C13.7182 7.5 12.8 7.27273 11.8182 7.27273H3.63636V9.09091H7.36364C6.81818 9.60909 6.4 10.2273 6.07273 10.9091H3.63636V12.7273H5.52727C5.48182 13.0273 5.45455 13.3273 5.45455 13.6364C5.45455 14.6182 5.68182 15.5364 6.07273 16.3636H1.81818ZM11.8182 18.1818C9.30909 18.1818 7.27273 16.1455 7.27273 13.6364C7.27273 11.1273 9.30909 9.09091 11.8182 9.09091C14.3273 9.09091 16.3636 11.1273 16.3636 13.6364C16.3636 16.1455 14.3273 18.1818 11.8182 18.1818ZM12.2727 13.8636L14.8727 15.4L14.1909 16.5091L10.9091 14.5455V10H12.2727V13.8636Z" fill="black"/>
</svg>

            </div>
          <div class="i-power-list-col-text">HISTORY</div>
        </router-link>
        
        <a  class="i-power-list-row ">
          <div class="i-power-list-col-icon">
          <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.42106 20C13.0642 20 16.8421 16.2221 16.8421 11.579C16.8421 8.05263 14.6611 5.03053 11.579 3.77789V6.11789C12.5378 6.67149 13.3343 7.46743 13.8886 8.42592C14.4428 9.3844 14.7353 10.4718 14.7369 11.579C14.7369 15.0621 11.9042 17.8947 8.42106 17.8947C4.9379 17.8947 2.10526 15.0621 2.10526 11.579C2.10666 10.4717 2.39916 9.38434 2.95342 8.42584C3.50769 7.46733 4.30423 6.67141 5.26316 6.11789V3.77789C2.18105 5.03053 0 8.05263 0 11.579C0 16.2221 3.7779 20 8.42106 20Z" fill="currentColor"/>
<path d="M7.36844 0H9.4737V10.5263H7.36844V0Z" fill="currentColor"/>
</svg>

            </div>
          <div @click="Logout" class="i-power-list-col-text">LOGOUT</div>
        </a>
      </div>
    </div>
 
</template>

<script>
import global from '../../mixin.js'
export default {
  mixins:[global],
  methods:{
    Logout(){
      this.$store.dispatch('Logout');
    }
  }
}
</script>
<style scoped>
a {
    color:#c2c2c2;
        padding-right: 14px;
      padding-left: 14px;
      -webkit-box-flex: 0;
      -webkit-flex: 0 85%;
      -ms-flex: 0 85%;
      flex: 0 85%;
      font-size: 10px;
      line-height: 28px;
      font-weight: 500;
      text-decoration: none;
}
</style>