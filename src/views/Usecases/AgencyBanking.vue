<template>
  <div>
    <div class="sandbox-banner usecases">
      <div class="sanbox-banner-cover usecases">
        <Header />
        <div class="banner-text-heading usecases single">
          <div class="banner-other-title">Agency Banking Solution</div>
          <div class="banner-sub-text">
              Agency Banking Web Service is a web API that is used to carry out operations related to Agency Banking
          </div>
        </div>
      </div>
    </div>
    <div class="section-1">
      <div class="image-section section1"></div>
      <div class="text-section">
        <div class="text-section-header usecase">
          Agency Banking Solution allows agents to offer the full range of transactions to their clients. 
        </div>
        <p class="text-section-paragraph">
        Agent Banking Solution allows agents to offer the full range of transactions to their clients. This includes cash deposits (cash to account) and withdrawals (account to cash), money transfers including cash to cash transfers, account to account payments, loan repayments, bill payments or mobile top-up. 
        </p>
        <p class="text-section-paragraph">
            Agents can on board new customers, performing KYC by capturing the customer ID and customer photo and submit it for verification and even open accounts on their behalf. 
        </p>
        <p class="text-section-paragraph">
       Once enrolled, the solution allows agents to offer the customers a complete range of services, including access to mini statements and balance inquiries, customer PIN change, cash withdrawal, issue a card or print a receipt.
        </p>
      </div>
    </div>

   
  

    <div class="section-usecases ">
      <div class="section-usecase-header">Advantages</div>
      <div class="section-usecases-text">
       <ul>
           <li style="font-size:15px;color:black;font-weight:500">New Toolbox for additional Income Streams</li> 
           <p>Zenith Bank’s Agent Banking solution completely transforms the way financial services are delivered to customers. By using the solution, fintech can expand the products offered to customers remotely.
</p> 
<br><br>

<li style="font-size:15px;color:black;font-weight:500">Fast Deployment and Instant Return</li> 
           <p>Zenith Bank Agent Banking solution is design for easy integration to any platform that can connect with restful API, and we have details documentation and support team to aid your smooth integration to the platform
</p> 

<br><br>

<li style="font-size:15px;color:black;font-weight:500">Additional delivery channel</li> 
           <p>Our Agent Banking is an additional delivery channel that enhances the convenience and outreach of affordable financial services to an underserved segment of the population in a very cost efficient manner.

</p> 

       </ul>
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
              <div class="description-header">Agency Banking Integration Service</div>
              <div class="description-text">Agency Banking Web Service is a web API that is used to carry out operations related to Agency Banking</div>
            </div>
                <router-link to="/api-docs/8" class = "description-button" >API Docs</router-link>
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
           'note': 'Customer will be registered as a collecting merchant on X-Path.'
         },
         {
           'title': 'Step 2',
           'note': 'Over 370 Zenith Bank branches will serve as customer’s collection outlets.'
         },
         {
           'title': 'Step 3',
           'note': 'Payers can make payments in cash, cheque or bank draft by walk into any Zenith bank branch.'
         },
         {
           'title': 'Step 4',
           'note': 'Payers may be identified with a unique identifier code. X-Path will capture items as specified by the customer and reflect these items in the report presented. e.g. Student name, ref number, Customer ID etc.'
         },
         {
           'title': 'Step 5',
           'note': 'Once Zenith Bank receives the inflow in the dedicated Settlement Account of the merchant or PF, a transaction notification is sent to Payment Gateway instantly.'
         },
         {
           'title': 'Step 6',
           'note': 'A receipt is printed by the Teller and handed over to the payer once posting is completed'
         },
         {
           'title': 'Step 7',
           'note': 'Customer will be given a reporting console, where transaction reports can be viewed real time by designated personnel for necessary decision making.'
         },
         {
           'title': 'Step 8',
           'note': 'Payments reports in excel format can be delivered to specified signatory e-mail addresses. The excel format reports can be sent via e-mail instantly, daily or monthly.'
         },
       ],
              s2:[
         {
           'title': 'Step 1',
           'note': 'Customer will be registered as a collecting merchant on X-Path.'
         },
         {
           'title': 'Step 2',
           'note': 'Over 370 Zenith Bank branches will serve as customer’s collection outlets.'
         },
         {
           'title': 'Step 3',
           'note': 'Payers can make payments in cash, cheque or bank draft by walk into any Zenith bank branch.'
         },
         {
           'title': 'Step 4',
           'note': 'Payers may be identified with a unique identifier code. X-Path will capture items as specified by the customer and reflect these items in the report presented. e.g. Student name, ref number, Customer ID etc.'
         },
          {
           'title': 'Step 5',
           'note': 'X-Path can also pull/authenticate data before teller posting via web-service calls.'
         },
          {
           'title': 'Step 6',
           'note': 'Information captured at bank-end will be submitted to customer ERP via web-services.'
         },
          {
           'title': 'Step 7',
           'note': 'A receipt is printed by the Teller and handed over to the payer once posting is completed.'
         }
       ],
              s3:[
         {
           'title': 'Step 1',
           'note': 'Customer will be registered as a collecting merchant on X-Path.'
         },
         {
           'title': 'Step 2',
           'note': 'Payers walks into any Zenith Bank branch and fill deposit slip.'
         },
         {
           'title': 'Step 3',
           'note': 'Payers may be identified with a unique identifier code. X-Path will capture items as specified by the customer and reflect these items in the report presented. e.g. Student name, ref number, Customer ID etc.'
         },
         {
           'title': 'Step 4',
           'note': 'Tellers post lodgement into customer’s account via x-path and a receipt is instantly generated'
         },
         {
           'title': 'Step 5',
           'note': 'This receipt carries a unique PIN code as well and other specified details'
         },
         {
           'title': 'Step 6',
           'note': 'Once the PIN is issued, payers can immediately go online to customer’s website to carry out further activities (registration for students …etc) or used for any specified purpose'
         },
         {
           'title': 'Step 7',
           'note': 'Customer’s account statement is updated and can also be viewed via Zenith Bank reporting console called Real-Time Access application'
         },
         {
           'title': 'Step 8',
           'note': 'Payments reports in excel format can be delivered to specified signatory e-mail addresses. The excel format reports can be sent via e-mail instantly, daily or monthly'
         },
              ]
             
    }
  },
    mounted () {
  window.scrollTo(0, 0)
},
};
</script>

<style scoped>
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
</style>
