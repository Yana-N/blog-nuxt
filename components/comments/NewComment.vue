<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title"> Comment the post! </h2>

      <Message v-if="message" :message="message"/>

      <form @submit.prevent="onSubmit" class="contact-form">
        <AppInput v-model="comment.name">Name:</AppInput>
        <AppTextarea v-model="comment.text">Text:</AppTextarea>
        <div class="controls">
          <AppButton>Submit</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      message: null,
      comment: {
        name: '',
        text: '',
      }
    }
  },
  methods: {
    onSubmit() {
      this.message = "Submitted!"
      this.comment.name = ''
      this.comment.text = ''

      console.log(this.comment)
    }
  }
}
</script>

<style lang="scss">
.new-comment {
  text-align: center;
  &-form {
    margin: 0 auto;
    max-width: 600px;

    label {
      text-align: left;
    }

    input, textarea {
      margin-bottom: 15px;
    }
  }
}
</style>
