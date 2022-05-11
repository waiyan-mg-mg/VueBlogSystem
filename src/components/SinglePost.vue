<template>
  <div>
    <h4>
      <router-link :to="{ name: 'SinglePostDetail', params: { id: post.id } }">
        {{ post.title }}</router-link
      >
      <button @click="singlePostVisible = true">Show</button>
      <button @click="singlePostVisible = false">Hide</button>
    </h4>
    <p v-if="singlePostVisible">
      {{ spliceText }}
      <span @click="showMore" v-if="show_seeMore_btn"
        ><b style="cursor: pointer"> see more ...</b></span
      >
      <span @click="showLess" v-if="!show_seeMore_btn"
        ><b style="cursor: pointer"> see less..</b></span
      >
    </p>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
export default {
  props: ["post"],
  setup(props) {
    let singlePostVisible = ref(props.post.visible);
    let spliceText = ref(props.post.body.substring(0, 50));
    let show_seeMore_btn = ref(true);
    const showMore = () => {
      spliceText.value = props.post.body;
      show_seeMore_btn.value = false;
    };
    const showLess = () => {
      spliceText.value = props.post.body.substring(0, 50);
      show_seeMore_btn.value = true;
    };
    onMounted(() => console.log("mounted"));
    onUnmounted(() => console.log("un mounted (destory)"));
    onUpdated(() => console.log("updated"));
    return {
      spliceText,
      singlePostVisible,
      show_seeMore_btn,
      showMore,
      showLess,
    };
  },
};
</script>

<style></style>
