<template>
  <section class="contact">
    <div class="container">
      <h2 class="title"> Contact me! </h2>

      <Message v-if="message" :message="message" />

      <form @submit.prevent="onSubmit" class="contact-form">
        <AppInput v-model="user.name" >Name:</AppInput>
        <AppInput v-model="user.email" type="email">Email:</AppInput>
        <AppTextarea v-model="user.text">Text:</AppTextarea>
        <div class="controls">
          <AppButton class="btnWhite">Submit</AppButton>
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
      user: {
        name: '',
        email: '',
        text: '',
      }
    }
  },
  methods: {
    onSubmit() {
      this.message = "Submitted!"
      this.user.name = ''
      this.user.email = ''
      this.user.text = ''

      console.log(this.user)
    }
  }
}
</script>

<style lang="scss">
.contact {
  text-align: center;
  background-color: #4400ff;
  color: #fff;
  .title {
    color: #fff;
  }
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
