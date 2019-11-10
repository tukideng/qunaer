<template>
  <div class="">
    <div class="title">
      周末去哪儿
    </div>
    <ul class="ul">
      <li class="item" v-for="item of recommendList"  :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [
        {
          id: '1',
          imgUrl: require('../../../assets/tu.jpg'),
          title: '海洋馆',
          desc: '海洋馆海洋馆海洋馆海洋馆'
        }, {
          id: '2',
          imgUrl: require('../../../assets/tu.jpg'),
          title: '海洋馆',
          desc: '海洋馆海洋馆海洋馆海洋馆'
        }, {
          id: '3',
          imgUrl: require('../../../assets/tu.jpg'),
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
