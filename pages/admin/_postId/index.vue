<template>
  <newPostForm @submit="onSubmit" :postEdit="post" />
</template>

<script>
import newPostForm from '@/components/admin/NewPostForm'

export default {
  layout: 'admin',
  components: {newPostForm},
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
  methods: {
    onSubmit(post) {
      console.log('post edited')
      console.log(post)
    }
  }
}
</script>
