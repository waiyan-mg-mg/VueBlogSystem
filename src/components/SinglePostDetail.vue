<template>
  <div v-if="dataArr.length !== 0">
    <h3>{{ dataArr.title }}</h3>
    <p>{{ dataArr.body }}</p>
    <button @click="back">Back</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import Spinner from "./Spinner";
import router from "@/router";
import getSinglePost from "../composable/getSinglePost";
export default {
  components: { Spinner },
  name: "SinglePostDetail",
  props: ["id"],
  setup(props) {
    const { dataArr, err, load } = getSinglePost();
    load(props.id);
    const back = () => {
      router.go(-1);
    };
    return { dataArr, err, back };
  },
};
</script>

<style></style>
