<template>
  <div>
<div class="sandbox-banner usecases">
    <div class="sanbox-banner-cover usecases">
      <Header/>
      <div class="banner-text-heading usecases single">
        <div class="banner-other-title">{{ filterDoc.title }}</div>
        <div class="banner-sub-text">{{ filterDoc.description }}</div>
      </div>
    </div>
  </div>
  <div class="section-usecases use-section2">

       <div class="app-header">
    <div v-if="isLoading">
      Loading...
    </div>

    <div v-else>
      <span>
     <a target="_blank" :href="filterDoc.codeSample"> <div :disabled="page <= 1" @click="page--" style="color:white;font-size:12px;border-radius:5px;padding:10px;">View Code Sample</div></a>  
      </span>
    </div>
  </div>
  <div class="app-content">
    <vue-pdf-embed ref="pdfRef" :source="filterDoc.fileurl" :page="page" @rendered="handleDocumentRender" />
  </div>

       <div class="app-header">
    <template v-if="isLoading">
      Loading...
    </template>

    <template v-else>
      <span v-if="showAllPages">
        {{ pageCount }} page(s)
      </span>

      <span v-else>
        <button :disabled="page <= 1" @click="previousPage" style="font-size:12px;border-radius:5px;padding:10px;color:black">❮ Previous</button>

        {{ page }} / {{ pageCount }}

        <button :disabled="page >= pageCount" @click="nextPage" style="font-size:12px;border-radius:5px;padding:10px;color:black"> Next ❯</button>
      </span>

      <label class="right">
        <input v-model="showAllPages" type="checkbox">
        Show all pages
      </label>
    </template>
  </div>

  </div>
  <div>
    
  </div>

  <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'
import VuePdfEmbed from 'vue-pdf-embed'
import Database from '../Database.json'
export default {
  name: 'Home',
  components: {
    Footer,
    Header,
    VuePdfEmbed
  },
    data() {
    return {
        isLoading: true,
      page: 2,
      pageCount: 1,
      pdfSource: 'https://res.cloudinary.com/vlog/image/upload/v1628691411/Managed_Accounts_compressed_1.pdf',
      showAllPages: false,
    
    }
    },
    computed:{
    filterDoc(){
      const doc =  Database.find( (x) => { return x.id == this.$route.params.id   })
      return doc;
    }
    },
     watch: {
    showAllPages() {
      this.page = this.showAllPages ? null : 2
    },
  },
  mounted () {
  window.scrollTo(0, 0)
},
  methods: {
    previousPage(){
      this.page--;
       window.scrollTo(0, 500)
    },
        nextPage(){
      this.page++;
       window.scrollTo(0, 500)
    },
    handleDocumentRender() {
      this.isLoading = false
      this.pageCount = this.$refs.pdfRef.pageCount
    }
  }
}
</script>

<style scoped>
a{ text-decoration: none;color:white !important}
canvas {
  margin-bottom: 8px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
}

.app-header {
  padding: 16px;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.1);
  background-color: #555;
  color: #ddd;
}

.app-content {
  padding: 24px 16px;
}

.right {
  float: right;
}

</style>