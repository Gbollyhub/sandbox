<template>
  <div>
 <div class="sandbox-banner usecases">
    <div class="sanbox-banner-cover usecases">
     <Header/>
      <div class="banner-text-heading usecases single">
        <div class="banner-other-title">API Docs</div>
        <div class="banner-sub-text">Help cardholders understand their purchases and reduce chargebacks and cardholder inquiries.</div>
      </div>
    </div>
  </div>
  <div class="section-usecases use-section2">
    <div class="section-usecase-header">Documentations</div>
    <div class="actions-div">
      <div class="search-div">
        <div class="w-form">
          <form id="email-form" name="email-form" data-name="Email Form"><input type="text" class="search-input w-input" maxlength="256" name="name" data-name="Name" placeholder="What are you looking for?" id="name"></form>
          <div class="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div class="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
      <div class="action-div">
        <div class="w-form">
          <form id="email-form-2" name="email-form-2" data-name="Email Form 2"><select id="field" name="field" class="select-input w-select">
              <option value="">Filter By Category</option>
              <option value="First">Mobile Banking</option>
              <option value="Second">Integration</option>
              <option value="Third">Loan</option>
            </select></form>
          <div class="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div class="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </div>
    </div>
    <div class="usecase-row">
      <div class="usecase-col" v-for="(doc, index) in docs" :key="index">
        <div class="usecase-card">
          <div class="usecase-description usecase">
            <div class="description-text usecase">{{ doc.category }}</div>
            <div class="decription-summary">
              <div class="description-header">{{ doc.title }}</div>
              <div class="description-text text-control">{{ doc.description }}</div>
            </div>
                 <router-link :to="{  name: 'ApiDocPage', params: {id: doc.id} }" class = "description-button" >API Docs</router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
  <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'
import Database from './Database.json'
export default {
  name: 'Home',
  components: {
    Footer,
    Header
  },
  data(){
  return{
    docs: Database
  }
  },
    mounted () {
  window.scrollTo(0, 0)
},
}
</script>

<style scoped>
.text-control{
  height: 100px;
  overflow: hidden;
  white-space: wrap; 
  text-overflow: ellipsis; 

}
</style>