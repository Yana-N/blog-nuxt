<template>
  <div class="intro">
    <div class="container">
      <h2>{{ title }}</h2>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.intro {
  width: 100%;
  margin: 30px 0;
  padding: 10px;
  text-align: center;
  color: #fff;
  background-color: #4b40e3;
  h2 {
    font-size: 22px;
  }
}
</style>
