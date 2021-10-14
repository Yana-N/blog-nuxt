<template>
  <section v-if="comments" class="comments">
    <div class="container">
      <h2 class="title">Comments:</h2>
      <div class="comment" v-for="comment in comments" :key="comment.name">
        <p class="name"> {{ comment.name }} </p>
        <p class="text"> {{ comment.text }} </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    comments: {
      type: Array,
      default: null,
    }
  }
}
</script>

<style lang="scss">
.comments {
  margin: 0 auto;
  max-width: 600px;
}

.comment {
  margin-bottom: 26px;
  padding: 20px;
  background-color: #fff;
  .name {
    font-weight: bold;
  }
  .text {
    color: #999;
  }
}
</style>
