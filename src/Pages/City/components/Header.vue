<template>
  <div class="header">
    城市选择
    <div class="header-back">
<<<<<<< HEAD
      <router-link to="/">back</router-link>
=======
      <router-link to="/">返回</router-link>
>>>>>>> city-search
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/var.styl'
<<<<<<< HEAD
a {
  color: inherit
  text-decoration: none
}
  .header
   position: relative
   overflow: hidden
   height: 36px
   line-height: 36px
   background: $bgcolor
   text-align: center
   color: #fff
   .header-back
    position: absolute
    top: 0
    left: 5px
    width: 30px
    text-align: center
=======
  a {
    color: inherit
    text-decoration: none
  }
  .header
   position: relative
   height: 50px
   line-height: 50px
   color: #fff
   background: $bgcolor
   text-align: center
   .header-back
    position: absolute
    top: 0
    left: 0
    width: 60px

>>>>>>> city-search
</style>
