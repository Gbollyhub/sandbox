<template>
  <div>
    <div class="sandbox-banner usecases">
      <div class="sanbox-banner-cover usecases">
        <Header />
        <div class="banner-text-heading usecases single">
          <div class="banner-other-title">Managed Account</div>
          <div class="banner-sub-text">
           Allows payers transfer payment to a virtual account number assigned to a merchant.
          </div>
        </div>
      </div>
    </div>
    <div class="section-1">
      <div class="image-section section1"></div>
      <div class="text-section">
        <div class="text-section-header usecase">
          This service leverages NIP to drive collection seamlessly to our
          numerous customers.
        </div>
        <p class="text-section-paragraph">
          Managed Account is a service that allows payers transfer payment to a
          virtual account number assigned to a merchant. This service leverages
          NIP to drive collection seamlessly to our numerous customers.
        </p>
        <p class="text-section-paragraph">
          This product allows bank account holders initiate transfer via
          Internet banking platform of their bank, Mobile Banking and USSD into
          this dynamic account number and once payment is received, Zenith Bank
          send a notification to the custodian of the payment Gateway
          acknowledging the receipt of the payment, and as such provide value to
          the initiator of the transaction for whatever service the customer is
          paying for.
        </p>
        <p class="text-section-paragraph">
          The solution relies on the authentication protocols offered by their
          various bank to her numerous customers which is usually driven by
          NIBSS Instant Payment (NIP) infrastructure which guarantees instant
          credit into merchants or facilitator’s dedicated settlement account in
          Zenith Bank.
        </p>
      </div>
    </div>

    <div class="section-usecases ">
      <div class="section-usecase-header">Scenerio 1</div>
      <div class="section-usecases-text">
       <ul>
           <li>Managed Account can be integrated to a Payment Gateway to allow merchant receive payment on their websites or mobile apps. Any bank account holder (Zenith and other banks) can make payment from their account directly to a randomly generated account that would be displayed when this option is selected from the bouquet of payment option available on the Payment gateway. </li>

                 <div style="color:black;font-weight:600;font-size:14px;margin-bottom:20px;">Transaction Dynamics when integrated to Payment Gateway</div>
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
           <li>Managed Account can be integrated to A POS terminal, which allows payer transfer to the virtual account, and once payment is received, a notification is sent to the PTADs and the POS automatically prints transaction receipt for both the customer and the merchant.</li>

                 <div style="color:black;font-weight:600;font-size:14px;margin-bottom:20px;">Transaction Dynamics when integrated to POS Terminal</div>
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
           <li>Managed Account can be assigned to Key Distributors or Distributors of FMCGs. Anytime they want to make payment for goods, they can transfer to these virtual account numbers and notification is provided to the FMCG.</li>           
       </ul>
      </div>

    </div>

        <div class="section-usecases use-section2">
      <div class="section-usecase-header">Scenerio 4</div>
      <div class="section-usecases-text">
       <ul>
           <li>Payers can walk in to any of the Zenith Bank branch and make payment to the virtual account numbers.</li>

        <div style="color:black;font-weight:600;font-size:14px;margin-bottom:20px;">Transaction Dynamics when Customer Walks in to Pay at the Bank Branch</div>
      <div class="usecase-row">

       <div class="usecase-col" v-for="item in s4" :key="item.id">
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
⦁	All commercial bank account holders in Nigeria can use the service to make payment
                </div>
                 <div class="description-text">
⦁	It eliminates the risk of chargeback when compared to card transactions.

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
              <div style="font-size:12px;margin-bottom:20px;">Benefits to Merchants </div>
              <div class="decription-summary">
                <div class="description-text">
⦁	Transaction settlement to merchant or PF’s dedication collection account is instant
                </div>
                 <div class="description-text">
⦁	Transaction success rate is very high compared to card based transactions
                </div>
                 <div class="description-text">
⦁	All commercial bank account holders in Nigeria can use the service to make payment
                </div>
                 <div class="description-text">
⦁	It eliminates the risk of chargeback when compared to card transactions.

                </div>
                  <div class="description-text">
⦁	Ease of payment assured.
                </div>
              </div>
              
            </div>
          </div>
        </div>
         <!-- <div class="usecase-col">
          <div class="usecase-card ">
            <div class="usecase-description usecase">
              <div style="font-size:12px;margin-bottom:20px;">Benefits to Bank</div>
              <div class="decription-summary">
                <div class="description-text">
⦁	Deepening relationship between the Bank and her merchants.
                </div>
                 <div class="description-text">
⦁	Growing the bank’s Demand Deposit Account
                </div>
                 <div class="description-text">
⦁	Generate both revenue and income for the bank
                </div>
                 <div class="description-text">
⦁	The Bank is meeting the demand of her customers
                </div>
              </div>
              
            </div>
          </div>
        </div> -->
      </div>

    </div>
    
            <div class="section-usecases use-section2">
      <div class="section-usecase-header">Requirements</div>
      <div class="section-usecases-text">
       <ul>
           <li>Payment Service Solution Provider (PSSP) License from Central Bank of Nigeria</li>
             <li>SLA between Zenith Bank & Merchant/Payment Facilitator or PSSP</li>
               <li>Merchant On Boarding Procedures (in the case of Payment Facilitator or PSSP)</li>
                 <li>KYC and AML Policy Manuals</li>
                   <li>Anti-Fraud Management System/Risk Monitoring Framework</li>
                    <li>Charge-back/Refund Procedures.</li>
 </ul>
<br><br>
        <div style="color:black;font-weight:600;font-size:14px;margin-bottom:20px;">Accounting Entries for Managed Accounts</div>
          <div class="section-usecases-text">The Managed Accounts receive funds in 2 ways:</div>
     <div class="section-usecases-text">
       <ul>
           <li>Transfer from Zenith Accounts</li>
       </ul>
<br><br>
<ul>
            <li>Transfer from Other Nigerian Banks</li>
       </ul>
     </div>
      </div>

    </div>



    <!-- <div class="section-usecases">
      <div class="section-usecase-header">Screenshots of Examples</div>
      <div class="section-usecases-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua<br />
      </div>
      <div class="usecase-row">
        <div class="usecase-col usecases">
          <img
            src="images/Screenshot-66.png"
            loading="lazy"
            sizes="(max-width: 479px) 46vw, (max-width: 767px) 42vw, (max-width: 991px) 39vw, (max-width: 4797px) 40vw, 1919px"
            srcset="
              images/Screenshot-66-p-800.png   800w,
              images/Screenshot-66-p-1080.png 1080w,
              images/Screenshot-66-p-1600.png 1600w,
              images/Screenshot-66.png        1919w
            "
            alt=""
            class="usecase-iimg-examples"
          />
        </div>
        <div class="usecase-col usecases">
          <img
            src="images/Screenshot-30.png"
            loading="lazy"
            sizes="(max-width: 479px) 46vw, (max-width: 767px) 42vw, (max-width: 991px) 39vw, (max-width: 4800px) 40vw, 1920px"
            srcset="
              images/Screenshot-30-p-500.png   500w,
              images/Screenshot-30-p-800.png   800w,
              images/Screenshot-30-p-1080.png 1080w,
              images/Screenshot-30-p-1600.png 1600w,
              images/Screenshot-30.png        1920w
            "
            alt=""
            class="usecase-iimg-examples"
          />
        </div>
        <div class="usecase-col usecases">
          <img
            src="images/Screenshot-75.png"
            loading="lazy"
            sizes="(max-width: 479px) 46vw, (max-width: 767px) 42vw, (max-width: 991px) 39vw, (max-width: 4800px) 40vw, 1920px"
            srcset="
              images/Screenshot-75-p-500.png   500w,
              images/Screenshot-75-p-800.png   800w,
              images/Screenshot-75-p-1080.png 1080w,
              images/Screenshot-75-p-1600.png 1600w,
              images/Screenshot-75.png        1920w
            "
            alt=""
            class="usecase-iimg-examples"
          />
        </div>
        <div class="usecase-col usecases">
          <img
            src="images/Screenshot-87.png"
            loading="lazy"
            sizes="(max-width: 479px) 46vw, (max-width: 767px) 42vw, (max-width: 991px) 39vw, (max-width: 4800px) 40vw, 1920px"
            srcset="
              images/Screenshot-87-p-500.png   500w,
              images/Screenshot-87-p-800.png   800w,
              images/Screenshot-87-p-1080.png 1080w,
              images/Screenshot-87.png        1920w
            "
            alt=""
            class="usecase-iimg-examples"
          />
        </div>
      </div>
    </div> -->


    <div class="section-usecases">
      <div class="section-usecase-header">Associated APIs</div>
  
   <div class="usecase-row">
      <div class="usecase-col">
        <div class="usecase-card">
          <div class="usecase-description usecase">
            <div class="description-text usecase">Banking</div>
            <div class="decription-summary">
              <div class="description-header">Managed Account</div>
              <div class="description-text">Managed Account is a service that allows payers transfer payment to a virtual account number assigned to a merchant. This service leverages NIP to drive collection seamlessly to our numerous customers.</div>
            </div>
                <router-link to="/api-docs/1" class = "description-button" >API Docs</router-link>
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
           'note': ' An option of Pay by Transfer is activated on Payment Gateway Front-end'
         },
         {
           'title': 'Step 2',
           'note': '	When this option is selected, it will display a dynamic NUBAN account number e.g 1010000001'
         },
         {
           'title': 'Step 3',
           'note': 'The customer logs into his/her Internet Banking or Mobile Banking APP or USSD and initiate a transfer into the dedicated account. At this period, the customer is doing the transaction on a traditional platform his or her bank has provided for him or her to be doing his electronic transfers.'
         },
         {
           'title': 'Step 4',
           'note': ' Once the customer authenticate himself/herself, he/she will also authorize the transaction account. Once authorization is successful, the transaction hits the dedication collection account almost immediately.'
         },
         {
           'title': 'Step 5',
           'note': 'Once Zenith Bank receives the inflow in the dedicated Settlement Account of the merchant or PF, a transaction notification is sent to Payment Gateway instantly.'
         },
       ],
              s2:[
         {
           'title': 'Step 1',
           'note': '  An option of Pay by Transfer is activated on POS Front-end'
         },
         {
           'title': 'Step 2',
           'note': 'When this option is selected, it will display a dynamic NUBAN account number e.g 1010000001'
         },
         {
           'title': 'Step 3',
           'note': 'The customer logs into his/her Internet Banking or Mobile Banking APP or USSD and initiate a transfer into the dedicated account. At this period, the customer is doing the transaction on a traditional platform his or her bank has provided for him or her to be doing his electronic transfers.'
         },
         {
           'title': 'Step 4',
           'note': 'Once the customer authenticate himself/herself, he/she will also authorize the transaction account. Once authorization is successful, the transaction hits the dedication collection account almost immediately.'
         },
         {
           'title': 'Step 5',
           'note': 'Once Zenith Bank receives the inflow in the dedicated Settlement Account of the merchant or PF, a transaction notification is sent to POS Terminal instantly.'
         },
                  {
           'title': 'Step 6',
           'note': 'POS generates transaction receipt – a copy for customer and another copy for the merchant.'
         },
       ],
        s4:[
         {
           'title': 'Step 1',
           'note': ' A customer visit any of the bank branch and request to Pay to merchant using a Virtual Account Number. The merchant would have provided the virtual account details to his customers.'
         },
         {
           'title': 'Step 2',
           'note': 'The customer fills Deposit Slips and hands over cash to Cashier.'
         },
         {
           'title': 'Step 3',
           'note': '	Teller posts transaction to the Virtual Account with relevant details.'
         },
         {
           'title': 'Step 4',
           'note': '	Zenith Bank Teller gives a copy of deposit slip to the payer'
         },
         {
           'title': 'Step 5',
           'note': '	Zenith Bank provides transaction notification to the merchant.'
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
