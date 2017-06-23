<template>
  <div>
    <container-navbar></container-navbar>
    <router-view></router-view>
    <container-footer></container-footer>
  </div>
</template>

<script>
import Navbar from '@/containers/Navbar'
import Footer from '@/containers/Footer'
export default {
  components: {
    containerNavbar: Navbar,
    containerFooter: Footer
  }
}
</script>
