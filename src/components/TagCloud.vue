<template>
  <div class="container">
    <h2>Tags in Page</h2>
    <div class="tagsBox">
      <div v-for="tag in clearedTags" :key="tag">
        <SingleHashTag :singleTag="tag"></SingleHashTag>
      </div>
    </div>
  </div>
</template>

<script>
import SingleHashTag from "./singleHashTag";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
export default {
  components: { SingleHashTag },
  props: ["posts"],
  setup(props) {
    const tags = ref([]);
    props.posts.forEach((singlePost) => {
      singlePost.tags.forEach((singleTag) => tags.value.push(singleTag));
    });
    let clearedTags = computed(() => {
      return tags.value.filter((tag, index, array) => {
        return array.indexOf(tag) === index;
      });
    });
    return { clearedTags };
  },
};
</script>

<style scoped>
.container {
  min-height: 50px;
  background-color: rgba(255, 255, 255, 0.993);
  margin-right: 30px;
  padding: 20px 10px;
  border-radius: 10px;
}
.tagsBox {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  color: white;
}
.tagsBox div {
  background-color: rgb(172, 172, 172);
  padding: 3px;
  border-radius: 10px;
  margin: 2px 2px;
}
</style>
