<template>
  <div class="container">
    <h3 class="text-center pt-lg-6 pt-5 pb-4">Sign Up</h3>

    <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="signupStatus">
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      {{signupErrMsg}}
    </div>

      <form @submit.prevent="submited" class="set-form">
        <div class="form-group">
          <div class="input-group">
            <span class="input-group-addon" id="sizing-addon2">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
            <input type="text" class="form-control" placeholder="Email" aria-describedby="sizing-addon2" v-model="email">
          </div>
        </div>

        <div class="form-group">
          <div class="input-group">
            <span class="input-group-addon">
              <i class="fa fa-key" aria-hidden="true"></i>
            </span>
            <input class="form-control" placeholder="Password" name="password" type="password" v-model="password">
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-lg btn-outline-success btn-block">Sign Up</button>
        </div>
      </form>

    <h6 class="text-center py-5">OR</h6>
    <Signin class="text-center"></Signin>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import Signin from '@/containers/Signin'
  export default {
    data: () => ({
      email: '',
      password: '',
      signupStatus: false,
      signupErrMsg: ''
    }),
    components: {
      Signin
    },
    methods: {
      submited () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(res => {
          console.log(res)
          this.$router.replace('/choose/character')
        }).catch(e => {
          this.signupStatus = true
          this.signupErrMsg = e.message
        })
      }
    }
  }
</script>

<style scoped>
input[type="text"]
{
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
}
input[type="password"]
{
    background: transparent;
    border: 1px solid #fff;
    color: #fff;
}
.btn {
  cursor: pointer;
}
@media (min-width: 992px) {
  .set-form {
    width: 60%;
    margin: auto;
  }
}
</style>
