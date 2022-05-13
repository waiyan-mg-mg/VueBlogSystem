<template>
  <div class="post_conatiner">
    <h4>
      <router-link :to="{ name: 'SinglePostDetail', params: { id: post.id } }">
        {{ post.title }}</router-link
      >
      <button @click="singlePostVisible = !singlePostVisible">
        <span v-if="!singlePostVisible">Show</span
        ><span v-if="singlePostVisible">Hide</span>
      </button>
    </h4>
    <div class="tags">
      <div v-for="singleTag in post.tags" :key="singleTag">
        <div>#{{ singleTag }}</div>
      </div>
    </div>
    <p v-if="singlePostVisible">
      {{ spliceText }}
      <span v-if="toggle_seeButtons">
        <span @click="showMore" v-if="show_seeMore_btn"
          ><b style="cursor: pointer"> see more ...</b></span
        >
        <span @click="showLess" v-if="!show_seeMore_btn"
          ><b style="cursor: pointer"> see less..</b></span
        >
      </span>
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
    let toggle_seeButtons = ref(true);
    const showMore = () => {
      spliceText.value = props.post.body;
      show_seeMore_btn.value = false;
    };
    const showLess = () => {
      spliceText.value = props.post.body.substring(0, 50);
      show_seeMore_btn.value = true;
    };
    onMounted(() => {
      if (props.post.body.length < 50) {
        toggle_seeButtons.value = false;
        spliceText.value = props.post.body;
      }
    });
    onUnmounted(() => console.log("un mounted (destory)"));
    onUpdated(() => console.log("updated"));
    return {
      spliceText,
      singlePostVisible,
      show_seeMore_btn,
      showMore,
      showLess,
      toggle_seeButtons,
    };
  },
};
</script>

<style scoped>
.post_conatiner {
  background-color: rgba(255, 255, 255, 0.993);
  padding: 20px;
  border-radius: 10px;
  border-bottom: 1px solid white;
  margin-bottom: 10px;
}
h4 {
  font-size: 1.3rem;
  font-weight: bold;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  display: flex;
  justify-content: space-between;
}
h4 * {
  display: inline-block;
}
h4 button {
  padding: 10px 15px;
  border: none;
  color: white;
  background-color: orangered;
  cursor: pointer;
  border-radius: 5px;
}
h4 a:hover {
  transition: all 0.5s;
  background-color: aqua;
  color: black;
  padding: 5px 10px;
  display: block;
  border-radius: 5px;
  transform: translateY(-10px);

}

p {
  font-size: 1.2rem;
  font-style: italic;
  overflow-wrap: anywhere;
}
p span {
  color: deepskyblue;
}
div.tags {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  color: white;
}
div.tags div {
  background-color: rgb(172, 172, 172);
  padding: 3px;
  border-radius: 10px;
  margin: 0 2px;
}
div.tags span {
  display: inline-block;
  transform: rotate(45deg);
  opacity: 0.8;
  font-size: 13px;
  cursor: pointer;
}
.tag label span {
  font-size: 15px;
  color: gray;
}
</style>
