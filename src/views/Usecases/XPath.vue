<template>
  <div>
    <div class="sandbox-banner usecases">
      <div class="sanbox-banner-cover usecases">
        <Header />
        <div class="banner-text-heading usecases single">
          <div class="banner-other-title">Xpath Deposit Query Service</div>
          <div class="banner-sub-text">
         Xpath Deposit Query Service
          </div>
        </div>
      </div>
    </div>
    <div class="section-1">
      <div class="image-section section1"></div>
      <div class="text-section">
        <div class="text-section-header usecase">
         It can be customized to meet the customer’s requirements.
        </div>
        <p class="text-section-paragraph">
         The X-Path application enables customers convert all or selected Zenith Bank branches into its funds collection outlets. Unique details about the depositor as required by the customer can be captured and reports can be defined according to customer's request, i.e. it can be customized to meet the customer’s requirements.
        </p>
        <p class="text-section-paragraph">
        It allows queries relating to collection transactions and also tracks the reporting of transaction records such that records are reported only once.
        </p>
         <p class="text-section-paragraph">
        Some features of Xpath:
        </p>
         <ul>
           <li>High Availability/Common Interface across branches.</li>
            <li> Electronic Fees Splitting is available.</li>
             <li>Bullet & Installment Payments are possible</li>
              <li>Electronic Receipts are issued to payers</li>
               <li>Unique Payment Record Identification and reporting are available</li>
                <li>Direct Integration</li>
                 <li>Transaction Tracking/Matching</li>
                 <li>PIN Vending</li>
        </ul>
      </div>
    </div>

    <div class="section-usecases ">
      <div class="section-usecase-header">Scenerio 1</div>
      <div class="section-usecases-text">
       <ul>
           <li>Xpath can be provided to corporate customers who want to receive payments across all Zenith bank’s over 370 branches while also capturing unique details (e.g. Customer number/ID, Matric number, Distributor ID) which are presented to the customer on a real time basis ensuring efficient reconciliation. </li>

                 <div style="color:black;font-weight:600;font-size:14px;margin-bottom:20px;">Transaction Dynamics for XPath</div>
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
    
    <div class="section-usecases  use-section2">
      <div class="section-usecase-header">Scenerio 2</div>
      <div class="section-usecases-text">
       <ul>
           <li>X-Path can be integrated with customer's ERP (Enterprise Resource Planner) e.g. SAGE, SAP e.t.c. to automatically update customer's records at customer's office as payments are made at any Zenith Bank’s branch. Using webservice calls for automatic retrieval of transaction records for collections done on customer’s account and vice-versa can be achieved. </li>        
                       <div style="color:black;font-weight:600;font-size:14px;margin-bottom:20px;">Transaction Dynamics when integrated to XPath</div>
      <div class="usecase-row">
        <div class="usecase-col" v-for="item in s2" :key="item.id">
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

    <div class="section-usecases ">
      <div class="section-usecase-header">Scenerio 3</div>
      <div class="section-usecases-text">
       <ul>
           <li>Schools and other corporate customers who want to vend electronic PINs at the various Zenith bank branches for payer identification or as proof of payment can be registered on Xpath.
                 <div style="color:black;font-weight:600;font-size:14px;margin-bottom:20px;">Transaction Dynamics XPath with PIN vending</div>
      <div class="usecase-row">
        <div class="usecase-col" v-for="item in s3" :key="item.id">
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
              <div style="font-size:12px;margin-bottom:20px;">Benefits to Merchants </div>
              <div class="decription-summary">
                <div class="description-text">
⦁	Provides a convenient means of payment
                </div>
                 <div class="description-text">
⦁	Ensures that monies collected are not diverted.
                </div>
                 <div class="description-text">
⦁	Allows for easy reconciliation of all records.
                </div>
                 <div class="description-text">
⦁	Allows for easy identification of customers such as; who paid, how much, when, how & where it was paid

                </div>
                  <div class="description-text">
⦁	X-Path will eliminate inconsistencies in posting by tellers (i.e. posting name before deposit slip number and vice versa
                </div>
      <div class="description-text">
⦁	It is customizable to meet unique customer’s needs

                </div>
                      <div class="description-text">
⦁	Customer service and satisfaction
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
           <li>Xpath Application form</li>
             <li>Indemnity</li>
               <li>SLA between Zenith Bank & Merchant</li>
                 <li>Approvals from relevant governing body</li>
 </ul>
<br><br>
      
     </div>
      </div>

            <div class="section-usecases use-section2">
      <div class="section-usecase-header">Commercial</div>
      <div class="section-usecases-text">
       <ul>
           <li>Integration Fee – (free) </li>
             <li>Transaction Fee – 100 flat fee (negotiable)</li>

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
              <div class="description-header">XPath</div>
              <div class="description-text">Xpath Deposit Query Service.</div>
            </div>
                <router-link to="/api-docs/10" class = "description-button" >API Docs</router-link>
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
