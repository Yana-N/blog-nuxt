<template>
  <PostsList :admin=true :posts="posts"/>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      posts: [
        {
          id: 1,
          title: '1st post',
          descr: 'This is my 1st post!!',
          img: 'https://mobimg.b-cdn.net/v3/fetch/0e/0e26b1b65946ee36fac9605ae67e4ac8.jpeg',
        },
        {
          id: 2,
          title: '2nd post',
          descr: 'This is my 2nd post!!',
          img: 'https://klike.net/uploads/posts/2019-06/medium/1559799916_2.jpg',
        },
        {
          id: 3,
          title: '3rd post',
          descr: 'This is my 3rd post!!',
          img: 'https://arctic.ru/images/95/27/952722.jpg',
        },
      ]
    }
  }
}
</script>
