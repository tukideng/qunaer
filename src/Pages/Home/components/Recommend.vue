<template>
  <div class="">
    <div class="title">
      热销推荐
    </div>
    <ul class="ul">
      <router-link
        tag="li"
        class="item"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img :src="item.imgUrl" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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
    .item
      overflow: hidden
      display: flex
      height: 105px
      .item-img
        width: 85px
        height: 85px
        padding: 5px
      .item-info
        flex: 1
        padding: 5px
        min-width: 0
        .item-title
          line-height: 27px
          font-size: 18px
          margin: 5px
          ellipsis()
        .item-desc
          line-height: 20px
          margin: 5px
          color: #ccc
          ellipsis()
        .item-btn
          margin-top: 8px
          background: #ff9300
          padding: 2px 10px
          border-radius: 3px
          color: #fff
          border: none
</style>
