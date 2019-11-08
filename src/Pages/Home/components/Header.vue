<template>
  <div class="header">
    <div class="header-left">
      返回
    </div>
    <div class="header-input">
      输入城市/主题/景点
    </div>
    <div class="header-right">
      <router-link to="/city"> 城市</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/var.styl'
  .header
    display: flex
    line-height: 50px
    color: #fff
    background-color: $bgcolor
    .heade-left
      float: right
      width: 60px
      text-align: center
    .header-input
      flex: 1
      height: 36px
      line-height: 36px
      margin-top: 7px
      margin-left: 17px
      padding-left: 12px
      color: #ccc
      background: #fff
      border-radius: 6px
      font-size: 14px
    .header-right
      float: right
      color: #fff
      width: 60px
      text-align: center
</style>
