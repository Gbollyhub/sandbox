<template>
  <div>
    <div class="sandbox-banner usecases">
      <div class="sanbox-banner-cover usecases">
        <Header />
        <div class="banner-text-heading usecases single">
          <div class="banner-other-title">Global Pay</div>
          <div class="banner-sub-text">
           A Payment Gateway Service 
          </div>
        </div>
      </div>
    </div>
    <div class="section-1">
      <div class="image-section section1"></div>
      <div class="text-section">
        <div class="text-section-header usecase">
         GlobalPAY accepts VISA, MasterCard and Verve cards. International acceptance is available for VISA and MasterCard. 
        </div>
        <p class="text-section-paragraph">
         GlobalPAY is a web-based solution that enables corporate bodies with or without functional websites accept card payments from people globally. In addition to being able to process card payments, the payment infrastructure enables merchants process bank transfer, USSD and QR transactions in a swift, secure and efficient way
        </p>
        <p class="text-section-paragraph">
         The payment gateway could be integrated into merchants’ websites enabling the website receive card payments from cardholders of any bank as well as other payment method listed above. Merchants who do not have websites can also make use of our GlobalPay gateway by signing up their business on our GlobalPay Storefront. The merchants’ website must have an existing shopping cart for switch integration to commence.
        </p>
      </div>
    </div>

    <div class="section-usecases ">
      <div class="section-usecase-header">Scenerio 1</div>
      <div class="section-usecases-text">
       <ul>
           <li>GlobalPay can be integrated to a website to allow merchant receive payment on their websites. Any bank card (Zenith and other banks) can be used to make payment directly on the merchant’s website checkout page when an option of Pay by Card is selected on the GlobalPay. </li>

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
           <li>GlobalPay integration also allows for the option of Pay by USSD whereby the user proceeds to checkout, selects GlobalPay and then chooses the Pay by USSD option. The merchant’s string is displayed on the page and the user dials the string using a mobile phone with the number registered with the respective bank. Once the payment is successful, it automatically updates on the website and a receipt is generated.</li>        
       </ul>
      </div>

    </div>

    <div class="section-usecases ">
      <div class="section-usecase-header">Scenerio 3</div>
      <div class="section-usecases-text">
       <ul>
           <li>GlobalPay integration also allows for the option of Pay by Transfer whereby the user proceeds to checkout, selects GlobalPay and then chooses the Pay by Transfer option. A dedicated account number is displayed and account holders initiate transfers from digital channels into the account generated at payment checkout. Once the payment is successful, it automatically updates on the website and a receipt is generated.
</li>           
       </ul>
      </div>

    </div>

        <div class="section-usecases use-section2">
      <div class="section-usecase-header">Scenerio 4</div>
      <div class="section-usecases-text">
       <ul>
           <li>GlobalPay integration also allows for the option of payment using QR. When the option is selected, a QR code is generated and automatically displayed on the e-commerce page, and payer can easily scan the QR code using a smartphone and transaction is consummated. Once the payment is successful, it automatically updates on the website and a receipt is generated.
</li>       
       </ul>
      </div>

    </div>

            <div class="section-usecases use-section2">
      <div class="section-usecase-header">Scenerio 5</div>
      <div class="section-usecases-text">
       <ul>
           <li>GlobalPay integration also allows for the option of Pay from Bank Account (for Zenith Bank account holders only) whereby the user proceeds to checkout, selects GlobalPay and then chooses the Pay from Bank Account option. 
</li>       
                <div style="color:black;font-weight:600;font-size:14px;margin-bottom:20px;">Transaction Dynamics</div>
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
⦁	Instant debit of cardholder’s account
                </div>
                 <div class="description-text">
⦁	Multi-currency processing capability
                </div>
                 <div class="description-text">
⦁	Processes all major credit, debit and prepaid cards
                </div>
                 <div class="description-text">
⦁	Acceptance of both local & international cards

                </div>
                  <div class="description-text">
⦁	Ease of payment assured.
                </div>
      <div class="description-text">
⦁	Refund capabilities
                </div>
                      <div class="description-text">
⦁	Real-Time transaction monitoring portal
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
           <li>Global Pay merchant registration form with terms and conditions</li>
             <li>Account Officer’s risk assessment form </li>
               <li>Merchant Physical Visitation form</li>
                 <li>Pre Implementation risk assessment form</li>
                   <li>Post Implementation assessment form</li>
 </ul>
<br><br>
      
     </div>
      </div>

            <div class="section-usecases use-section2">
      <div class="section-usecase-header">Commercial</div>
      <div class="section-usecases-text">
       <ul>
           <li>Integration Fee – (free) </li>
             <li>Transaction Fee – 1.5% capped @ N2000 (Local Cards) </li>
               <li>Transaction Fee – 3.5% no cap (International Cards)</li>

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
              <div class="description-header">Global Pay</div>
              <div class="description-text">This document contains both global pay and interswitch documentations.</div>
            </div>
                <router-link to="/api-docs/7" class = "description-button" >API Docs</router-link>
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
           'note': 'The Global Pay gateway is activated on the Front-end of a website.'
         },
         {
           'title': 'Step 2',
           'note': 'When this option is selected, the user’s payment details are displayed along with a wide range of payment options to choose from.'
         },
         {
           'title': 'Step 3',
           'note': 'The customer then selects his/her preferred payment option and proceeds to make payment according to the instructions that will follows. At this period, the customer is doing the transaction on the GlobalPay environment.'
         },
         {
           'title': 'Step 4',
           'note': 'Once authorization is successful, the transaction hits the dedication collection account almost immediately.'
         },
         {
           'title': 'Step 5',
           'note': 'Once Zenith Bank receives the inflow in the dedicated Settlement Account of the merchant or PF, a transaction notification is sent to Payment Gateway instantly.'
         },
       ],
              s2:[
         {
           'title': 'Step 1',
           'note': 'An option of Pay from Bank Account is activated on Payment Gateway Front-end'
         },
         {
           'title': 'Step 2',
           'note': 'It will prompt the customer to put his/her account number'
         },
         {
           'title': 'Step 3',
           'note': 'It will prompt the customer to authenticate himself/herself based on the credentials he has from the Bank (hardware or software'
         },
         {
           'title': 'Step 4',
           'note': 'Once the customer authenticate himself/herself, he/she will also authorize the transaction account. Once authorization is successful, the transaction hits the dedicated merchant’s collection account immediately.'
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
