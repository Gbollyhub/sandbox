<template>
  <div>
    <div class="sandbox-banner usecases">
      <div class="sanbox-banner-cover usecases">
        <Header />
        <div class="banner-text-heading usecases single">
          <div class="banner-other-title">Direct Transfer Service</div>
          <div class="banner-sub-text">
       This service enables Fintech companies and Aggregators within an ecosystem initiate transfers (intra & inter) on behalf of its customers
          </div>
        </div>
      </div>
    </div>
    <div class="section-1">
      <div class="image-section section1"></div>
      <div class="text-section">
        <div class="text-section-header usecase">
     Enables Fintech companies and Aggregators within an ecosystem initiate transfers (intra & inter) on behalf of its customers
        </div>
        <p class="text-section-paragraph">
Direct Transfer Service API enables Fintech companies and Aggregators within an ecosystem initiate transfers (intra & inter) on behalf of its customers. This service leverages NIP infrastructure from NIBSS with failover options from other switches i.e. Interswitch, Unified Payment and CoralPay. </p>
      </div>
    </div>

    <div class="section-usecases ">
      <div class="section-usecase-header">Scenerio 1</div>
      <div class="section-usecases-text">
       <ul>
           <li>
The services allows customers to make transfers from their wallets to the wallets of other users within a Fintech ecosystem.    
           </li>       
      <div style="color:black;font-weight:600;font-size:14px;margin-bottom:20px;">Transaction Dynamics</div>
    
      <div class="usecase-row">
        <div class="usecase-col" v-for="item in s1" :key="item.id">
          <div class="usecase-card card-control">
              <div class="description-text usecase">{{item.title}}</div>
              <div class="decription-summary">
                <div class="description-text">
                 {{item.note}}
                </div>
              </div>
    
          </div>
        </div>
        
      </div>

        <li>
	With the direct transfer APIs, users can do a direct through from a bank account to a wallet and vice versa.
        </li>
    
       </ul>
      </div>

    </div>



            <div class="section-usecases">
      <div class="section-usecase-header">Benefits</div>
  
      <div class="usecase-row">
        <div class="usecase-col">
          <div class="usecase-card">
            <div class="usecase-description usecase">
              <div style="font-size:12px;margin-bottom:20px;">Benefits</div>
              <div class="decription-summary">
                <div class="description-text">
           ⦁	Easy Integration –our API for this service is easy to consume by developers

                </div>
                 <div class="description-text">
⦁	Failover Infrastructure –To guarantee high transaction success rate, we have implemented several failover options, to keep transactions flowing seamlessly during switch network downtime.
                </div>
                 <div class="description-text">
⦁	Threshold Monitoring Notification Service –This notifies Fintech companies when balances are almost depleted to avoid transactions from failing.

                </div>


              </div>
              
            </div>
          </div>
        </div>
      </div>

    </div>
    
            <div class="section-usecases use-section2">
      <div class="section-usecase-header">Requirements</div>
      <div class="section-usecases-text">
       <ul>
           <li>Evidence of relevant regulatory approval/licences relevant to the business.</li>
             <li>Indemnity (see attached).</li>
               <li>	Request letter from the customer</li>

                  
 </ul>
<br><br>
      
     </div>
      </div>

            <div class="section-usecases use-section2">
      <div class="section-usecase-header">Commercial</div>
      <div class="section-usecases-text">
       <ul>
           <li>Direct Transfer(Intrabank)-N5</li>
           <li>Direct Transfer (Interbank)-N20</li>
 </ul>
<br><br>
      
     </div>
      </div>




    <div class="section-usecases">
      <div class="section-usecase-header">Associated APIs</div>
  
   <div class="usecase-row">
      <div class="usecase-col">
        <div class="usecase-card">
          <div class="usecase-description usecase">
            <div class="description-text usecase">Banking</div>
            <div class="decription-summary">
              <div class="description-header">Direct Transfer Service</div>
              <div class="description-text"> This document provides a technical detail to Zenith Bank Direct Transfer Service detailing request and response for individual calls.
</div>
            </div>
                <router-link to="/api-docs/6" class = "description-button" >API Docs</router-link>
          </div>
        </div>
      </div>
      
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/footer.vue";
import Header from "@/components/header.vue";
export default {
  name: "Home",
  components: {
    Footer,
    Header,
  },
  data(){
    return{
       s1:[
         {
           'title': 'Step 1',
           'note': 'User logs on to an App powered by direct transfer API'
         },
         {
           'title': 'Step 2',
           'note': 'User sends and receives money on money wallet'
         },
         {
           'title': 'Step 3',
           'note': 'Transfers can be from within the ecosystem (intra) and outside (inter).'
         }
       ],

             
    }
  },
    mounted () {
  window.scrollTo(0, 0)
},
};
</script>

<style scoped>
.user-roles-img{
  width: 50%;
  display: inline-block;
}
ul,li {margin:0;padding:0}
.card-control{
padding:20px;
height:200px;
}
li { margin-bottom: 20px}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

@media screen and (max-width: 767px) {
.user-roles-img{
  width: 100%;
  display: block;
}
}
</style>
