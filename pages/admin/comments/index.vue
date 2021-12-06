<template>
  <commentTable :thead="['Name', 'Text', 'Status', 'Changed status', 'Delete']">
    <tbody slot="tbody">
      <tr v-for="comment in comments" :key="comment.id">
        <td><span>{{ comment.name }}</span></td>
        <td><span>{{ comment.text }}</span></td>
        <td>
          <span class="status" :class="comment.status ? 'true' : 'false'">{{ comment.status ? 'Publish' : 'Hidden' }}</span>
        </td>
        <td><span @click="changeComment(comment.id)" class="link"> Change status </span></td>
        <td><span @click="deleteComment(comment.id)" class="link"> Delete </span></td>
      </tr>
    </tbody>
  </commentTable>
</template>

<script>
import CommentTable from '@/components/admin/CommentTable';

export default {
  layout: 'admin',
  components: {CommentTable},
  data() {
    return {
      comments: [
        {id: 1, name: 'Alex', text:
            'Самонаблюдение начинает онтогенез речи. Предсознательное дает индивидуальный кризис.',
          status: true},
        {id: 2, name: 'Dan', text: 'Предсознательное дает индивидуальный кризис.', status: false},
        {id: 3, name: 'John', text: 'Самонаблюдение начинает онтогенез речи.', status: true},
      ]
    }
  },
  methods: {
    changeComment(id) {
      console.log(`changed comment id - ${id}`)
    },
    deleteComment(id) {
      console.log(`delete comment id - ${id}`)
    }
  }
}
</script>
