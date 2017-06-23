<template>
  <div class="container">
    <nav class="navbar navbar-inverse bg-inverse navbar-toggleable-sm">

      <h1 class="navbar-brand text-center text-md-left text-primary" @click="goHome">YOYEA</h1>

      <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <div>
          <router-link to="/login" tag="button" class="btn btn-outline-warning pull-right">Sign In</router-link>
          <router-link to="/signup" tag="button" class="btn btn-outline-success pull-right">Sign Up</router-link>
        </div>
      </div>

      <div class="navbar-toggler navbar-toggler-right mt-1" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="fa fa-bars text-primary"></span>
    </div>
    </nav>
  </div>
</template>

<script>
  export default {
    methods: {
      goHome () {
        this.$router.push('/')
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
