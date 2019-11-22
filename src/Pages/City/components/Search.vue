<template>
  <div class="">
    <div class="search">
      <input type="text" placeholder="输入拼音/汉字" class="search-input" v-model="key">
    </div>
    <div class="search-content" ref="search" v-show="key">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      key: '',
      list: [],
      timer: null
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    key () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.key) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const res = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.key) > -1 || value.name.indexOf(this.key) > -1) {
              res.push(value)
            }
          })
        }
        this.list = res
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/var.styl'
  ul {
    padding-left: 0
  }
  li {
    list-style-type:none
  }
  .search-content
    z-index: 1
    position: absolute
    overflow: hidden
    top: 102px
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: 30px
      padding-left: 10px
      color: #666
      background: #fff
  .search
    height: 36px
    background: $bgcolor
    padding: 0 8px
    .search-input
     box-sizing: border-box
     height: 30px
     line-height: 30px
     padding: 0 5px
     width: 100%
     border-radius: 3px
     border: none
     text-align: center
</style>
