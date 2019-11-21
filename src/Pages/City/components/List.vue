<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">当前城市</div>
        <div class="btn-list">
          <div class="btn-wrapper">
            <div class="btn">
              {{this.city}}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <div class="btn-list">
          <div class="btn-wrapper" v-for="item of hot"  :key="item.id">
            <div class="btn">
              {{item.name}}
            </div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key">
        <div class="title">{{key}}</div>
        <div class="item-list" v-for="innerItem in item"  :key="innerItem.id">
          <div class="item">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    city: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/var.styl'

  .list
    overflow: hidden
    position: absolute
    margin: 8px
    top: 93px
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: 22px
      background: #eee
      padding-left: 10px
      color: #666
      font-size: 15px
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
