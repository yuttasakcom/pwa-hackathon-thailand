<template>
  <div>
    <SigninButton :login="github"></SigninButton>
    <SigninButton :login="twitter"></SigninButton>
    <SigninButton :login="facebook"></SigninButton>
    <SigninButton :login="google"></SigninButton>
  </div>
</template>

<script>
  import SigninButton from '@/components/SigninButton'
  export default {
    components: {
      SigninButton
    },
    data () {
      return {
        github: {
          btnType: 'secondary',
          btnMsg: 'Sign in with Github',
          btnIcon: 'fa fa-github',
          btnProvider: 'github'
        },
        twitter: {
          btnType: 'info',
          btnMsg: 'Sign in with Twitter',
          btnIcon: 'fa fa-twitter',
          btnProvider: 'twitter'
        },
        facebook: {
          btnType: 'primary',
          btnMsg: 'Sign in with Facebook',
          btnIcon: 'fa fa-facebook-official',
          btnProvider: 'facebook'
        },
        google: {
          btnType: 'danger',
          btnMsg: 'Sign in with Google',
          btnIcon: 'fa fa-google',
          btnProvider: 'google'
        }
      }
    }
  }
</script>
