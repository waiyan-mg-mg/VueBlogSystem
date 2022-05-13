<template>
  <h3>
    <div>Post Lists</div>
    <div class="create_post">
      <router-link :to="{ name: 'createPost' }">Create new post</router-link>
    </div>
  </h3>
  <div v-if="posts.length > 0" class="home">
    <PostLists :posts="posts" />
  </div>
  <div v-else><Spinner /></div>
</template>

<script>
import PostLists from "../components/PostLists";
import getPost from "../composable/getPosts";
export default {
  components: {
    PostLists,
  },
  setup() {
    let { posts, error_msg, response } = getPost();
    response();
    return { posts, error_msg };
  },
};
</script>

<style scoped>
.home {
  max-width: 2000px;
  margin: 0 auto;
  padding: 20px;
}
h3 {
  display: flex;
  justify-content: space-between;
  padding: 20px 20px 0;
}

.create_post {
  cursor: pointer;
  color: crimson;
}
</style>
