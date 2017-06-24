<template>
  <div>
    <button type="button" :class="`btn btn-outline-${login.btnType}`" @click="signIn"><i :class="`${login.btnIcon}`" aria-hidden="true"></i>{{login.btnMsg}}</button>
  </div>
</template>

<script>
  import { SIGNIN } from '@/services/Auth'
  export default {
    props: ['login'],
    methods: {
      signIn () {
        SIGNIN(this.login.btnProvider).then(res => {
          this.$router.replace('/choose/character')
        })
      }
    }
  }
</script>

<style scoped>
button {
  cursor: pointer;
  width: 14em;
  margin-bottom: 10px;
}
i {
  padding-right: 7px;
}
</style>