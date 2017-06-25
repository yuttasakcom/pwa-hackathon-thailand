<template>
  <div id="app">
    <container-navbar></container-navbar>
    <router-view></router-view>
    <container-footer></container-footer>
  </div>
</template>

<script>
import Navbar from '@/containers/Navbar'
import Footer from '@/containers/Footer'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'getCss'
    ])
  },
  created () {
    console.log('created', this.getCss)
  },
  update () {
    console.log('updated', this.getCss)
  },
  components: {
    containerNavbar: Navbar,
    containerFooter: Footer
  }
}
</script>

<style scoped>
#app {
  background: url("/static/img/background/bg.jpg") no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
}
</style>
