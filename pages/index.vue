<template>
  <div class="wrapper-content wrapper-content--fixed">
      <Promo/>
      <Intro title="My last posts"/>
      <PostsList :posts="postsLoaded" />
      <Contacts />
  </div>
</template>

<script>
import Promo from '@/components/Promo'
import Contacts from '@/components/Contacts'

export default {
  components: { Promo, Contacts },
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>

<style lang="scss">
.promo {
  text-align: center;
  p {
    color: #999;
  }
}
</style>
