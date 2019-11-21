<template>
  <ul class="list">
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @click="handleCLick"
      @touchstart="TouchStart"
      @touchmove="TouchMove"
      @touchend="TouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchstatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleCLick (e) {
      this.$emit('change', e.target.innerText)
    },
    TouchStart () {
      this.touchstatus = true
    },
    TouchMove (e) {
      if (this.touchstatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 127
          const index = Math.floor((touchY - this.startY) / 16)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    TouchEnd () {
      this.touchstatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/var.styl'

  .list
    margin: 0
    padding: 0
    position: absolute
    display: flex
    flex-direction: column
    justify-content: center
    right: 0
    top: 110px
    bottom: 0
    width: 18px
    .item
      list-style-type:none
      text-align: center
      color: $bgcolor
</style>
