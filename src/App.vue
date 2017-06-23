<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Navbar from '@/containers/Navbar'
  import Footer from '@/containers/Footer'
  export default {
    components: {
      Navbar,
      Footer
    }
  }
</script>
