<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Post :post="post"/>
    <Comments :comments="comments" />
    <NewComment/>
  </div>
</template>

<script>
import Post from '@/components/blog/Post'
import Comments from '@/components/comments/Comments'
import NewComment from '@/components/comments/NewComment'

export default {
  components: { Post, Comments, NewComment },
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
      comments: [
        { name: 'Alex', text: 'Самонаблюдение начинает онтогенез речи. Предсознательное дает индивидуальный кризис.' },
        { name: 'Dan', text: 'Предсознательное дает индивидуальный кризис.' },
        { name: 'John', text: 'Самонаблюдение начинает онтогенез речи.' },
      ]
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
