<template>
  <div></div>
</template>
<script>
export default {
  setup() {},
};
</script>

<style scoped>
div {
  margin: 100px auto;
  background: red;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  transform: scale(0.4);
  border: 2px solid transparent;
  animation: skink 0.8s infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
}

@keyframes skink {
  to {
    transform: scale(0.9);
    opacity: 1;
  }
}
</style>
