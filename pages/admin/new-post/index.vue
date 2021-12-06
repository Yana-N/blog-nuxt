<template>
  <newPostForm @submit="onSubmit" />
</template>

<script>
import newPostForm from '@/components/admin/NewPostForm'

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
