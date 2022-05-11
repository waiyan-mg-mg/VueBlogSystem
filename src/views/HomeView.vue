<template>
  <div v-if="posts.length > 0">
    <PostLists :posts="posts" />
  </div>
  <div v-else><Spinner /></div>
</template>

<script>
import Spinner from "../components/Spinner";
import PostLists from "../components/PostLists";
import getPost from "../composable/getPosts";
export default {
  components: {
    Spinner,
    PostLists,
  },
  setup() {
    let { posts, error_msg, response } = getPost();
    response();
    return { posts, error_msg };
  },
};
</script>

<style></style>
