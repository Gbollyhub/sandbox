<template>
  <div>
<div class="sandbox-banner usecases">
    <div class="sanbox-banner-cover usecases">
      <Header/>
      <div class="banner-text-heading usecases single">
        <div class="banner-other-title">FAQs</div>
        <div class="banner-sub-text">Frequently asked questions</div>
      </div>
    </div>
  </div>
  <div class="section-usecases use-section2">
     <div class="app-header">
    <template v-if="isLoading">
      Loading...
    </template>

    <template v-else>
      <span v-if="showAllPages">
        {{ pageCount }} page(s)
      </span>

      <span v-else>
        <button :disabled="page <= 1" @click="page--">❮</button>

        {{ page }} / {{ pageCount }}

        <button :disabled="page >= pageCount" @click="page++">❯</button>
      </span>

      <label class="right">
        <input v-model="showAllPages" type="checkbox">

        Show all pages
      </label>
    </template>
  </div>

  <div class="app-content">
    <vue-pdf-embed ref="pdfRef" :source="pdfSource" :page="page" @rendered="handleDocumentRender" />
  </div>

  </div>

  <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/footer.vue'
import Header from '@/components/header.vue'
import VuePdfEmbed from 'vue-pdf-embed'
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
      page: 1,
      pageCount: 1,
      pdfSource: 'https://res.cloudinary.com/vlog/image/upload/v1629033996/pdf/FAQs-on-API-Integration-Updated-_1_.pdf',
      showAllPages: false,
    
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
    handleDocumentRender() {
      this.isLoading = false
      this.pageCount = this.$refs.pdfRef.pageCount
    }
  }
}
</script>

<style scoped>
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