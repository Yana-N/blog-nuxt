<template>
 <section class="new-post">
   <div class="container">
     <form @submit.prevent>
       <AppInput v-model="post.title">Title:</AppInput>
       <AppInput v-model="post.descr">Description:</AppInput>
       <AppInput v-model="post.img">Image:</AppInput>
       <AppTextarea v-model="post.content">Content:</AppTextarea>
       <div class="controls">
         <AppButton class="btnDanger" @click="onCancel">Cancel</AppButton>
         <AppButton @click="onSubmit">Save</AppButton>
       </div>
     </form>
   </div>
 </section>
</template>

<script>
export default {
  name: 'newPostForm',
  data() {
    return {
      post: {
        title: '',
        descr: '',
        img: '',
        content: '',
      }
    }
  },
  methods: {
    onCancel() {
      this.$router.push('/admin')
    },
    onSubmit() {
      this.$emit('submit', this.post)
    }
  }
}
</script>

<style lang="scss">
.new-post {
  .controls {
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }
}
</style>
