<template>
  <ul class="list">
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
    <li class="item">a</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
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
      height: 17px
      color: $bgcolor
</style>
