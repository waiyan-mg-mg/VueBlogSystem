<template>
  <div v-if="dataArr.body">
    <SinglePost :post="dataArr"></SinglePost>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from "./Spinner";
import SinglePost from "./SinglePost";
import router from "@/router";
import { useRoute } from "vue-router";
import getSinglePost from "../composable/getSinglePost";
export default {
  components: {
    Spinner,
    SinglePost,
  },
  name: "SinglePostDetail",
  props: ["id"],
  setup(props) {
    let route = useRoute();

    const { dataArr, err, load } = getSinglePost();
    load(route.params.id);
    const back = () => {
      router.go(-1);
    };
    return { dataArr, err, back };
  },
};
</script>

<style></style>
