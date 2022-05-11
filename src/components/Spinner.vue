<template>
  <div>
    <div class="inner">
      <div class="inner">
        <div class="inner">
          <div class="inner">
            <div class="inner">
              <div class="inner">
                <div class="inner">Please wait a while</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  width: 100px;
  height: 100px;
  border-radius: 50%;
  transform: scale(0.4);
  border: 5px dashed transparent;
  animation: skink 2s infinite;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inner {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid rgb(255, 251, 0);
  font-size: 90px;
  color: white;
}
@keyframes skink {
  to {
    transform: scale(0.9);
  }
}
</style>
