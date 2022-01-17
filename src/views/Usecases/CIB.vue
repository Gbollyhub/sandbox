<template>
  <div>
    <div class="sandbox-banner usecases">
      <div class="sanbox-banner-cover usecases">
        <Header />
        <div class="banner-text-heading usecases single">
          <div class="banner-other-title">Corperate Internet Banking</div>
          <div class="banner-sub-text">
        This service enables corporate account holders make authorized payments and transfers to any beneficiary
          </div>
        </div>
      </div>
    </div>
    <div class="section-1">
      <div class="image-section section1"></div>
      <div class="text-section">
        <div class="text-section-header usecase">
        Make authorized payments and transfers to any beneficiary, anywhere in the world; 24 hours a day, 7 days a week.
 
        </div>
        <p class="text-section-paragraph">
Zenith Corporate Internet Banking (CIB) is a secure online disbursement banking platform that enables corporate account holders make authorized payments and transfers to any beneficiary, anywhere in the world; 24 hours a day, 7 days a week.
        </p>
        <p class="text-section-paragraph">
With Corporate i-Bank, payments can be made electronically to beneficiaries such as staff, vendors, suppliers, contractors, payment of winnings (POWs) for gaming and betting companies etc.
        </p>
                <p class="text-section-paragraph">
Zenith Bank has a variety of APIs that enable corporate customers connect to the Bank and perform their transactions from their own legacy Enterprise Resource Planners (ERPs). They are able to do their transactions without necessarily accessing our front end portal.
        </p>
      </div>
    </div>
        <div class="section-usecases">
 <div class="section-usecase-header">User Roles</div>
         <p class="text-section-paragraph">
           The following are roles that can be created on the CIB platform:
        </p>
        <br>
        <img src="../../assets/userflow-1.png" alt="" class="user-roles-img">
         <img src="../../assets/userflow-2.png" alt="" class="user-roles-img">
    </div>

    <div class="section-usecases ">
      <div class="section-usecase-header">Scenerio 1</div>
      <div class="section-usecases-text">
       <ul>
           <li>
	With our Corporate Internet Banking (CIB) service, you can carry out secure internet banking transactions and e-payments of all kinds, monitor trade transactions and administer payroll. Hardware Authentication Token adds a further level of security to ensure your online banking experience is completely worry-free.
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
       </ul>
      </div>

    </div>
    
    <div class="section-usecases  use-section2">
      <div class="section-usecase-header">Scenerio 2</div>
      <div class="section-usecases-text">
       <ul>
<li>
CIB serves as a financial command centre from where you can make payments to customers with accounts anywhere in the world, confirm cheques, stop cheques, issue drafts and pay Import Duty amongst other functions.
  </li>       </ul>
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
               ⦁	Funds Transfer within and outside Nigeria: Transfer money from your corporate account to any beneficiary’s account worldwide.

                </div>
                 <div class="description-text">
⦁	Payroll Administration: Pay staff salaries electronically.

                </div>
                 <div class="description-text">
⦁	Accounts Activities Monitoring/Reporting: View transaction logs, daily activities, download transactions.
                </div>
                                                  <div class="description-text">
⦁	Audit trail: Complete monitoring of all activities on the platform.
                </div>

              </div>
              
            </div>
          </div>
        </div>
         <div class="usecase-col">
          <div class="usecase-card">
            <div class="usecase-description usecase">
              <div style="font-size:12px;margin-bottom:20px;">Benefits </div>
              <div class="decription-summary">
                  <div class="description-text">
⦁	Multi-Bank Account Viewing/Reporting.
                </div>
                                  <div class="description-text">
⦁	Import Duty Payment: Make import duty payment and print receipt at your convenience.

                </div>
                 <div class="description-text">
⦁	Track Trade Finance Transactions: Monitor status of Letters of Credit, Payments, Confirmation and Establishments, Form M and Bills for Collection.

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
           <li>	Corporate account with the bank.</li>
             <li>Executed Standard Service Level Agreement</li>
               <li>Board Resolution for Corporate I Bank Straight Through Processing</li>
                 <li>Indemnity letter on company letter head.</li>
                   <li>Request letter from company for the Integration.</li>
                   <li>All original documents must have the company seal and appropriately signed.</li>
 </ul>
<br><br>
      
     </div>
      </div>

            <div class="section-usecases use-section2">
      <div class="section-usecase-header">Commercial</div>
      <div class="section-usecases-text">
       <ul>
           <li>Setup/Integration Fee – NIL</li>
             <li>Cost of Hardware token and e-Token to log in to portal – N2,500 per user/hardware-token and N1,500 for e-Token</li>
               <li>Transfers Transaction Fee </li>
                <li>⦁	Zenith Bank to Zenith Bank accounts – Nil
 </li>
                 <li>⦁	Zenith Bank to other Banks depends on Amount
 </li>
                  <li>⦁	Amount less or equal to N5,000 – charge is N10 plus VAT
</li>
                   <li>⦁	N5,001 to N50,000 – charge is N25 plus VAT
</li>
                    <li>⦁	Above N50,000 – Charge is N50 plus VAT
 </li>

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
              <div class="description-header">Corperate Internet Banking</div>
              <div class="description-text">This service enables corporate account holders make authorized payments and transfers to any beneficiary</div>
            </div>
                <router-link to="/api-docs/9" class = "description-button" >API Docs</router-link>
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
           'note': 'The CIB allows for access to view account information'
         },
         {
           'title': 'Step 2',
           'note': 'It can be logged into by visiting the Bank’s website and entering credentials. Otherwise, it can be accessed via the ERP interface of the company.'
         },
         {
           'title': 'Step 3',
           'note': '	Sign-on is done with username and token details.'
         },
         {
           'title': 'Step 4',
           'note': '	Based on the rights of the user, certain privileges are availed after sign-on.'
         },
         {
           'title': 'Step 5',
           'note': 'Transactions happen in realtime.'
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
