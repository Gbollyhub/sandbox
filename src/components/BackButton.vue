<template>
           <div @click="Back" style="margin-bottom:20px;cursor:pointer;border-radius:3px;padding:5px 15px;display:inline-block;color:white;background:#c02">Back</div>
</template>

<script>
import global from '../mixin.js'
export default {
  mixins:[global],
  methods:{
      Back(){
          this.$router.go(-1);
      }
  }

}
</script>