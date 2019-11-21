<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="btn-list">
          <div class="btn-wrapper">
            <div class="btn">
              北京
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="btn-list">
          <div class="btn-wrapper">
            <div class="btn">
              北京
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">A</div>
        <div class="item-list">
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/var.styl'
  .title
    line-height: 22px
    background: #eee
    margin: 8px
    padding-left: 10px
    color: #666
    font-size: 15px
  .list
    overflow: hidden
    position: absolute
    top: 93px
    left: 0
    right: 0
    bottom: 0
    .btn-list
     overflow: hidden
     padding: 5px 30px 5px 5px
     .btn-wrapper
      float: left
      width: 33.33%
      .btn
       margin: 5px
       padding: 5px 0
       border: 1px solid #ccc
       text-align: center
       border-radius: 3px
    .item-list
     .item
      line-height: 33px
      padding-left: 10px
</style>
