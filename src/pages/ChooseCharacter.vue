<template>
  <div class="contianer">
    <div class="pt-lg-30 text-center">
      กำลังพัฒนา...
    </div>
  </div>
</template>

<script>
  export default {
    created () {
      this.$store.dispatch('setCss', {
        bg: "background: url('/static/img/background/bg_green1.jpg') center center / cover no-repeat fixed;"
      })
    }
  }
</script>
