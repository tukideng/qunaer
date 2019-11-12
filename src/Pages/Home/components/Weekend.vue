<template>
  <div class="">
    <div class="title">
      周末去哪儿
    </div>
    <ul class="ul">
      <li class="item" v-for="item of list"  :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <span class="item-desc">{{item.desc}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'

  .title
    line-height: 40px
    background: #eee
    text-indent: 10px
  .ul
    margin: 0
    padding: 0
    .item-img-wrapper
      overflow: hidden
      height: 0
      padding-bottom: 67%
      .item-img
        width: 100%
    .item-info
      padding: 5px
      .item-title
        line-height: 27px
        font-size: 16px
        margin: 5px
        ellipsis()
      .item-desc
        line-height: 20px
        color: #ccc
        ellipsis()
</style>
