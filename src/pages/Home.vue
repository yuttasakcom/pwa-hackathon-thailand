<template>
  <div class="container">
    <div class="row pt-lg-6 pb-lg-6 pt-md-4 pb-md-5 pt-5">
      <div class="col-md-6 col-sm-12">
        <h1 class="text-uppercase text-center text-md-left">PWA TURN BASED</h1>
        <h4 class="text-uppercase text-center text-md-left">คุณพร้อมรึยัง! เข้าร่วมทำศึกครั้งนี้ เพื่อจารึกชื่อของคุณไว้ในประวัติศาสตร์</h4>

        <h6 class="text-center pt-5">สมัครเข้าร่วมแข่งขัน หรือ sign in</h6>
        <div class="row">

          <div class="col-lg-6 text-center">
            <router-link to="/signup" tag="button" class="btn btn-outline-success"><i class="fa fa-user-circle" aria-hidden="true"></i>Sign Up</router-link>
          </div>

          <div class="col-lg-6 text-center">
            <button type="button" class="btn btn-outline-secondary"><i class="fa fa-github" aria-hidden="true"></i>Sign in with Github</button>
          </div>
        </div>
        <div class="row">

          <div class="col-lg-6 text-center">
            <button type="button" class="btn btn-outline-primary"><i class="fa fa-facebook-official" aria-hidden="true"></i>Sign in with Facebook</button>
          </div>

          <div class="col-lg-6 text-center">
            <button type="button" class="btn btn-outline-danger"><i class="fa fa-google" aria-hidden="true"></i>Sign in with Google</button>
          </div>
        </div>

      </div>
      <div class="col-md-6 col-sm-12 text-center pb-sm-5">
        <img src="/static/img/background/overlay.png" class="hero-img mt-5 mt-md-0">
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-img {
  width: 80%;
}
.btn {
  cursor: pointer;
  width: 14em;
  margin-bottom: 10px;
}
i {
  padding-right: 7px;
}
</style>
