<template>
  <newPostForm @submit="onSubmit" />
</template>

<script>
import newPostForm from '@/components/admin/newPostForm'

export default {
  layout: 'admin',
  components: {newPostForm},
  methods: {
    onSubmit(post) {
      console.log(post)
    }
  }
}
</script>
