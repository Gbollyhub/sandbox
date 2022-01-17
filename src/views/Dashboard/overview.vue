<template>
    <div>
         <div class="page-control">
 <Topbar/>
  <div class="i-dashboard-row">
<Sidebar/>
    <div class="i-dashboard-content">

      <div class="content-heading">
        <div class="content-heading-col-1"><div class="author-img">JD</div></div>
        <div class="content-heading-col-2">
          <div class="heading-col-2-header"><span class="heading-col-2-span">Hi {{user}},</span> Lets get you up and running real quick</div>
          <div class="heading-col-text">This is some text inside of a div block.This is some text inside of a div block.This is some text inside of a div block.</div>
        </div>
      </div>
      <div class="i-power-sidebar-div mobile">
                <div class="i-poer-sidebar-div-header">Welcome!<span class="id-span">{{user}}</span></div>
        <div class="sidebar-div-col-value">If you run into any problems. Kindly send us an email at integrations@zenithbank.com</div>
      </div>

      <div class="content-area">

          <div class="content-area-header">Account Stats</div>

    <div class="usecase-row">
      <div class="usecase-col">
        <div class="usecase-card">
          <div class="usecase-description usecase">
            <div class="decription-summary">
              <div style="font-size:0.8rem;color:grey;margin-bottom:15px">STARS</div>
              <div style="font-size:1.2rem;font-weight:600">{{getStats.stars}}</div>
            </div>
          </div>
        </div>
      </div>
       <div class="usecase-col">
        <div class="usecase-card">
          <div class="usecase-description usecase">
            <div class="decription-summary">
              <div style="font-size:0.8rem;color:grey;margin-bottom:15px">QUESTIONS SOLVED</div>
              <div style="font-size:1.2rem;font-weight:600">{{getStats.questionsResolved}}</div>
            </div>
          </div>
        </div>
      </div>
       <div class="usecase-col">
        <div class="usecase-card">
          <div class="usecase-description usecase">
            <div class="decription-summary">
              <div style="font-size:0.8rem;color:grey;margin-bottom:15px">QUESTIONS POSTED</div>
              <div style="font-size:1.2rem;font-weight:600">{{getStats.questionsPosted}}</div>
            </div>
          </div>
        </div>
      </div>
       <div class="usecase-col">
        <div class="usecase-card">
          <div class="usecase-description usecase">
            <div class="decription-summary">
              <div style="font-size:0.8rem;color:grey;margin-bottom:15px">TUTORIALS POSTED</div>
              <div style="font-size:1.2rem;font-weight:600">{{getStats.tutorialsPosted}}</div>
            </div>
          </div>
        </div>
      </div>
       <div class="usecase-col">
        <div class="usecase-card">
          <div class="usecase-description usecase">
            <div class="decription-summary">
              <div style="font-size:0.8rem;color:grey;margin-bottom:15px">BLOGS POSTED</div>
              <div style="font-size:1.2rem;font-weight:600">{{getStats.blogsPosted}}</div>
            </div>
          </div>
        </div>
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
export default {
    mixins:[global],
    components:{
Topbar,
Sidebar
    },
     mounted(){
       let user = JSON.parse(localStorage.getItem("user")).a_user_id
     this.$store.dispatch("getStats", user);
    },
}
</script>

<style scoped>
.content-area{
    margin-top: 50px ;
}
.content-area-header{
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 30px;
}
</style>