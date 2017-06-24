<template>
  <div class="contianer">
    <div class="mt-5 text-center">
      กำลังพัฒนา...
    </div>
  </div>
</template>

<script>
  export default {
    created () {
      this.$store.dispatch('setCss', {
        bg: "background: url('/static/img/background/bg_choose_charecter.jpg') center center / cover no-repeat fixed;"
      })
    }
  }
</script>
