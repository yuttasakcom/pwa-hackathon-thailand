<template>
  <div>
    <div class="sprite" :style="`height:${character.height}px;`">
      <div class="slide" :style="`
        -webkit-animation-duration:${speed}ms;
        -moz-animation-duration:${speed}ms;
        -webkit-animation-name:animate_${character.height}_frame_${character.frame};
        -moz-animation-name:animate_${character.height}_frame_${character.frame};
      `">
      <img
        :src="`/static/img/sprites/${character.name}/${character.action}_${character.position}/${n}.png`"
        :height="character.height"
        class="displayed"
        v-for="n in character.frame">
      </div>
    </div>
    <div class="name">{{character.msg}}</div>
  </div>
</template>

<script>
  export default {
    props: ['character'],
    computed: {
      speed () {
        switch (this.character.speed) {
          case 1:
            return 1000
          case 2:
            return 800
          case 3:
            return 600
          case 4:
            return 400
          case 5:
            return 200
          default:
            return 1000
        }
      }
    }
  }
</script>

<style scoped>
img.displayed {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.sprite {
  position: relative;
  overflow: hidden;
}
.slide {
  position: relative;
  -webkit-animation-iteration-count:infinite;
  -webkit-animation-timing-function:step-start;
  -webkit-animation-direction:forward;
  -moz-animation-iteration-count:infinite;
  -moz-animation-timing-function:step-start;
  -moz-animation-direction:forward;
}
@keyframes animate_200_frame_10 {
  0%   { top:0; }
  10%  { top:-200px; }
  20%  { top:-400px; }
  30%  { top:-600px; }
  40%  { top:-800px; }
  50%  { top:-1000px; }
  60%  { top:-1200px; }
  70%  { top:-1400px;}
  80%  { top:-1600px; }
  90%  { top:-1800px; }
  100% { top:0 }
}
@keyframes animate_190_frame_10 {
  0%   { top:0; }
  10%  { top:-190px; }
  20%  { top:-380px; }
  30%  { top:-570px; }
  40%  { top:-760px; }
  50%  { top:-950px; }
  60%  { top:-1140px; }
  70%  { top:-1330px;}
  80%  { top:-1520px; }
  90%  { top:-1710px; }
  100% { top:0 }
}
</style>
