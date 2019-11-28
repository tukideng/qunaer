<template>
  <div class="header">
    <div class="header-left">
      返回
    </div>
    <div class="header-input" type="input">
      输入城市/主题/景点
    </div>
    <div class="header-right">
        <router-link to="/city">{{this.city}}</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
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
    display: flex
    line-height: 50px
    color: #fff
    background-color: $bgcolor
    .header-left
      float: left
      width: 60px
      text-align: center
    .header-input
      flex: 1
      height: 36px
      line-height: 36px
      margin-top: 7px
      margin-left: 7px
      padding-left: 12px
      color: #ccc
      background: #fff
      border-radius: 6px
      font-size: 14px
    .header-right
      float: right
      min-width: 52px
      padding: 0 5px
      text-align: center
</style>
