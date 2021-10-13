<template>
  <div class="wrapper">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '@/components/system/Header'

export default {
  name: 'default',
  components: { Header },
}
</script>

<style scoped>

</style>
