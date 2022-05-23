<template>
  <div>
    <router-link :to="{ name: 'filterTag', params: { tag: singleTag } }"
      >#{{ singleTag }}</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["singleTag"],
};
</script>

<style scoped></style>
