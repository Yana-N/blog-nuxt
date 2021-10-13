<template>
  <div class="posts-list">
    <div class="container">
      <div class="posts__wrapper">
        <PostPreview v-for="post in posts" :key="post.id" :post="post"/>
      </div>
    </div>
  </div>
</template>

<script>
import PostPreview from '@/components/blog/PostPreview'

export default {
  name: 'PostsList',
  components: { PostPreview },
  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style lang="scss">
.posts-list {
  margin-bottom: 50px;
}
.posts__wrapper {
  display: grid;
  gap: 40px;
  grid-template: 1fr / 1fr 1fr 1fr;
}
</style>
