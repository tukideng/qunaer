<template>
  <div class="header">
    城市选择
    <div class="header-back">
      <router-link to="/">back</router-link>
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
</style>
