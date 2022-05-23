<template>
  <h3>
    <div>Post Lists</div>
    <div class="create_post">
      <router-link :to="{ name: 'createPost' }">Create post</router-link>
    </div>
  </h3>
  <div v-if="posts.length > 0" class="home layout">
    <div><PostLists :posts="posts" /></div>
    <div>
      <TagCloud :posts="posts"></TagCloud>
    </div>
  </div>
  <div v-else><Spinner /></div>
</template>

<script>
import Spinner from "../components/Spinner";
import TagCloud from "../components/TagCloud";
import PostLists from "../components/PostLists";
import getPosts from "../composable/getPosts";

export default {
  components: {
    Spinner,
    TagCloud,
    PostLists,
  },
  setup() {
    let { posts, error_msg, response } = getPosts();
    response();

    return { posts, error_msg };
  },
};
</script>

<style>
.home {
  max-width: 2000px;
  margin: 0 auto;
  padding: 20px;
}
.layout {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
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
