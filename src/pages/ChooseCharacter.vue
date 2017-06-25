<template>
  <div class="container text-center">
    กำลังพัฒนา...
  </div>
</template>

<script>
  import Sprite from '@/components/Sprite'
  export default {
    created () {
      this.$store.dispatch('setCss', {
        bg: "background: url('/static/img/background/HNK-1.gif') bottom / cover no-repeat fixed;"
      })
    },
    data: () => ({
      map: true,
      characters: {
        player1: {
          name: 'knight',
          msg: 'นักรบมังกร',
          height: '200',
          position: 'left',
          action: 'idle',
          speed: 1,
          frame: 10
        },
        player2: {
          name: 'ninja',
          msg: 'นักฆ่าหั่นศพ',
          height: '190',
          position: 'right',
          action: 'idle',
          speed: 1,
          frame: 10
        }
      }
    }),
    components: {
      Sprite
    },
    methods: {
      selectMap () {
        if (this.map) {
          this.$store.dispatch('setCss', {
            bg: "background: url('/static/img/background/83312792.gif') center center / cover no-repeat fixed;"
          })
          this.map = false
        } else {
          this.$store.dispatch('setCss', {
            bg: "background: url('/static/img/background/HNK-1.gif') bottom / cover no-repeat fixed;"
          })
          this.map = true
        }
      }
    }
  }
</script>

<style scoped>
.btn {
  cursor: pointer;
}
</style>
