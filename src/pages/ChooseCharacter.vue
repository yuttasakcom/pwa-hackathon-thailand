<template>
  <div class="container">
    <div class="pt-lg-30 pt-md-30 pt-sm-30 text-center">
      <h3 style="color:black">กำลังพัฒนา</h3>
      <button class="btn btn-primary" @click="selectMap">เลือกแผนที่</button>
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-6 col-6">
          <Sprite :character="characters.player1"></Sprite>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-6 col-6">
          <Sprite :character="characters.player2"></Sprite>
        </div>
      </div>
    </div>
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
