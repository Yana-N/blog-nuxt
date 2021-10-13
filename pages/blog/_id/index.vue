<template>
  <Post :post="post" />
</template>

<script>
import Post from '@/components/blog/Post'

export default {
  components: { Post },
  data() {
    return {
      post: {
        id: 1,
        title: '1st post',
        descr: 'This is my 1st post!!',
        content:
          'Самонаблюдение начинает онтогенез речи. Предсознательное дает индивидуальный кризис. Объект, несмотря на внешние воздействия, точно просветляет онтогенез речи. Перцепция вызывает социальный импульс. Акцентуация концептуально отражает индивидуальный стресс, как и предсказывает теория о бесполезном знании.',
        img: 'https://mobimg.b-cdn.net/v3/fetch/0e/0e26b1b65946ee36fac9605ae67e4ac8.jpeg',
      },
    }
  },
}
</script>

<style lang="scss">
.post {
  margin: 0 auto;
  max-width: 900px;

  &-header {
    margin-bottom: 30px;
    text-align: center;
    img {
      margin-bottom: 20px;
      max-width: 400px;
    }
    p {
      color: #999;
    }
  }
  &-body {
    text-align: left;
  }
}

</style>
