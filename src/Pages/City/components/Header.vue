<template>
  <div class="header">
    城市选择
    <div class="header-back">
      <router-link to="/">返回</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
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
   height: 50px
   line-height: 50px
   background: $bgcolor
   text-align: center
   color: #fff
   .header-back
    position: absolute
    top: 0
    left: 0
    width: 60px
    text-align: center
</style>
