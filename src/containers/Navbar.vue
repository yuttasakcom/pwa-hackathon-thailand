<template>
  <div class="container">
    <nav class="navbar navbar-inverse bg-inverse navbar-toggleable-sm">

      <h1 class="navbar-brand text-center text-md-left text-primary ml-3" @click="goHome">PWA TURN BASED</h1>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <div v-if="currentUser === null">
          <router-link to="/signup" tag="button" class="btn btn-outline-success pull-lg-right" active-class="active">Sign Up</router-link>
          <router-link to="/signin" tag="button" class="btn btn-outline-warning pull-lg-right" active-class="active">Sign In</router-link>
        </div>
        <div v-else>
          <button class="btn btn-outline-danger pull-lg-right" @click="signOut">Sign Out</button>
        </div>
      </div>

      <div class="navbar-toggler navbar-toggler-left mt-1" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="fa fa-bars text-primary"></span>
    </div>
    </nav>
  </div>
</template>

<script>
  import { SIGNOUT } from '@/services/Auth'
  import firebase from 'firebase'
  export default {
    data: () => ({
      currentUser: null
    }),
    created () {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.currentUser = user
        }
        return
      })
    },
    methods: {
      goHome () {
        this.$router.push('/')
      },
      signOut () {
        this.$store.dispatch('setCss', {
          bg: "background: url('/static/img/background/bg.jpg') center center / cover no-repeat fixed;"
        })
        SIGNOUT().then(res => {
          this.currentUser = null
          this.$router.replace('/')
        })
      }
    }
  }
</script>

<style scoped>
button {
  margin-left: 5px;
  cursor: pointer;
}
.navbar {
  width: 100%;
  background: none !important;
}
.navbar-brand {
  cursor: pointer;
}
.text-primary {
  color: #00ffc4 !important;
}
.navbar-toggler {
  background: transparent;
  cursor: pointer;
  font-size: 22px;
}
</style>
