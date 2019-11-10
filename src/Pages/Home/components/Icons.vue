<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) in pages"  :key="index">
        <div class="icon" v-for="item in page"  :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" class="icon-img-content">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [
        {
          id: '1',
          imgUrl: require('../../../assets/logo.png'),
          desc: '景点'
        }, {
          id: '2',
          imgUrl: require('../../../assets/logo.png'),
          desc: '旅游'
        }, {
          id: '3',
          imgUrl: require('../../../assets/logo.png'),
          desc: '温泉'
        }, {
          id: '4',
          imgUrl: require('../../../assets/logo.png'),
          desc: '温泉'
        }, {
          id: '5',
          imgUrl: require('../../../assets/logo.png'),
          desc: '温泉'
        }, {
          id: '6',
          imgUrl: require('../../../assets/logo.png'),
          desc: '温泉'
        }, {
          id: '7',
          imgUrl: require('../../../assets/logo.png'),
          desc: '温泉'
        }, {
          id: '8',
          imgUrl: require('../../../assets/logo.png'),
          desc: '温泉'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/var.styl'
@import '~styles/mixins.styl'

  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: 20px
    .icon
      position: relative
      overflow: hidden
      width: 25%
      height: 0
      float: left
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: 30px
        box-sizing: border-box
        padding: 5px
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        left: 0
        right: 0
        bottom: 0
        height: 22px
        line-height: 22px
        color: $txtcolor
        text-align: center
        ellipsis()
</style>
