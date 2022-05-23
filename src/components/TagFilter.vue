<template>
  <div v-if="filterValue.length" class="layout">
    <div>
      <div v-for="post in filterValue" :key="post.id">
        <SinglePost :post="post" :editCss="editCss"></SinglePost>
      </div>
    </div>
    <div>
      <TagCloud :posts="posts"></TagCloud>
    </div>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import TagCloud from "./TagCloud";
import Spinner from "./Spinner";
import SinglePost from "./SinglePost";
import getPosts from "../composable/getPosts";
import { computed, ref } from "@vue/runtime-core";
export default {
  components: {
    TagCloud,
    Spinner,
    SinglePost,
  },
  props: ["tag"],
  setup(props) {
    const editCss = "max-width:800px;margin:20px auto;";
    const { posts, error, response } = getPosts();
    response();
    let filterValue = computed(() => {
      return posts.value.filter((post) => post.tags.includes(props.tag));
    });
    return { filterValue, editCss, posts };
  },
};
</script>

<style></style>
