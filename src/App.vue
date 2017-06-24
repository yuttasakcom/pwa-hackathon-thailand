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

export default {
  created () {
    this.fetchUser()
  },
  updated () {
    console.log('updated')
    this.fetchUser()
  },
  components: {
    containerNavbar: Navbar,
    containerFooter: Footer
  },
  methods: {
    fetchUser () {
      let accessToken = this.$cookie.get('access_token')
      if (accessToken) {
        console.log(this.getUserMe(accessToken))
      } else {
        this.$store.dispatch('setUser', null)
      }
    },
    getUserMe (accessToken) {
      return accessToken
    }
  }
}
</script>
