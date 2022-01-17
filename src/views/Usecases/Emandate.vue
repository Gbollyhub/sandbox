<template>
  <div>
    <div class="sandbox-banner usecases">
      <div class="sanbox-banner-cover usecases">
        <Header />
        <div class="banner-text-heading usecases single">
          <div class="banner-other-title">E-Mandate</div>
          <div class="banner-sub-text">
       This service enables a customer to establish an electronic mandate authorizing the bank to permit debits whenever purchases are made from eCommerce sites.
          </div>
        </div>
      </div>
    </div>
    <div class="section-1">
      <div class="image-section section1"></div>
      <div class="text-section">
        <div class="text-section-header usecase">
      Authorize the bank to permit debits whenever purchases are made from eCommerce sites
        </div>
        <p class="text-section-paragraph">
This is a product when integrated to a Payment Gateway allows account holders in Zenith Bank make payment from their accounts directly to e-commerce merchants. This product leverages the authentication protocols offered by the bank and guarantees instant credit into merchants or Payment Facilitator’s dedicated settlement account. The connection method to this service or product is via application programming interface (APIs).      
 </p>
      </div>
    </div>

    <div class="section-usecases ">
      <div class="section-usecase-header">Scenerio 1</div>
      <div class="section-usecases-text">
       <ul>
           <li>
	E-Mandate can be integrated to a website to allow merchant receive payment on their websites. Zenith Bank account holder makes payment directly on the merchant’s website checkout page when an option of Pay from Bank Account is selected.            </li>
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
       </ul>
      </div>

    </div>



            <div class="section-usecases">
      <div class="section-usecase-header">Benefits</div>
  
      <div class="usecase-row">
        <div class="usecase-col">
          <div class="usecase-card">
            <div class="usecase-description usecase">
              <div style="font-size:12px;margin-bottom:20px;">Benefits to Payers</div>
              <div class="decription-summary">
                <div class="description-text">
             ⦁	Ease of Payment

                </div>
                 <div class="description-text">
⦁	No installation is required – it leverages the existing transfer channel available to payers.

                </div>
                 <div class="description-text">
⦁	No training is required to use.
                </div>


              </div>
              
            </div>
          </div>
        </div>
         <div class="usecase-col">
          <div class="usecase-card">
            <div class="usecase-description usecase">
              <div style="font-size:12px;margin-bottom:20px;">Benefits to Merchants</div>
              <div class="decription-summary">
                  <div class="description-text">
⦁	Instant debit of customer’s account

                </div>
                                  <div class="description-text">
⦁	Ease of payment assured.

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
           <li>	SLA between Zenith Bank & Company </li>
             <li>Merchant On Boarding Procedures</li>
               <li>KYC and AML Policy Manuals</li>
                 <li>Anti-Fraud Management System/Risk Monitoring Framework</li>
                   <li>Charge-back/Refund Procedures.</li>
                  
 </ul>
<br><br>
      
     </div>
      </div>

            <div class="section-usecases use-section2">
      <div class="section-usecase-header">Commercial</div>
      <div class="section-usecases-text">
       <ul>
           <li>Transaction Fee – 0.75% capped at N1,000 (negotiable).</li>
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
              <div class="description-header">E-Mandate</div>
              <div class="description-text">       This service enables a customer to establish an electronic mandate authorizing the bank to permit debits whenever purchases are made from eCommerce sites.
</div>
            </div>
                <router-link to="/api-docs/3" class = "description-button" >API Docs</router-link>
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
           'note': 'An option of Pay from Bank Account is activated on Payment Gateway Front-end'
         },
         {
           'title': 'Step 2',
           'note': 'When this option is selected, it will display all the participating banks and customer that intend to make payment will select his/her bank'
         },
         {
           'title': 'Step 3',
           'note': 'When Zenith Bank is selected, it invokes the API and it will prompt the customer to put his account number'
         },
         {
           'title': 'Step 4',
           'note': 'It will prompt the customer to authenticate himself/herself based on the required credentials'
         },
         {
           'title': 'Step 5',
           'note': 'Once the customer authenticate himself/herself, he/she will also authorize the transaction account. Once authorization is successful, the transaction hits the dedicated collection account immediately and transaction notification is sent to merchant instantly.'
         },
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
