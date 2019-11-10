<template>
  <div class="">
    <div class="title">
      热销推荐
    </div>
    <ul class="ul">
      <li class="item" v-for="item of recommendList"  :key="item.id">
        <img :src="item.imgUrl" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <span class="item-desc">{{item.desc}}</span>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '1',
          imgUrl: require('../../../assets/logo.png'),
          title: '海洋馆',
          desc: '海洋馆海洋馆海洋馆海洋馆'
        }, {
          id: '2',
          imgUrl: require('../../../assets/logo.png'),
          title: '海洋馆',
          desc: '海洋馆海洋馆海洋馆海洋馆'
        }, {
          id: '3',
          imgUrl: require('../../../assets/logo.png'),
          title: '海洋馆',
          desc: '海洋馆海洋馆海洋馆海洋馆'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'

  .title
    margin-top: 20px
    line-height: 40px
    background: #eee
    text-indent: 10px
  .ul
    margin: 0
    padding: 0
    .item
      overflow: hidden
      display: flex
      height: 95px
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
          font-size: 16px
          margin: 5px
          ellipsis()
        .item-desc
          line-height: 20px
          color: #ccc
          ellipsis()
        .item-btn
          margin-top: 8px
          background: #ff9300
          padding: 0 10px
          border-radius: 6px
          color: #fff
</style>
