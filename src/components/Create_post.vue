<template>
  <form @submit.prevent>
    <div class="title">
      <label for="title">Create Title</label>
      <input type="text" id="title" v-model="title" />
    </div>
    <div class="body">
      <label for="body">Create Body</label>
      <textarea id="body" v-model="body"></textarea>
    </div>
    <div class="tag">
      <label for="tag">Tags <span>hit "Enter" to add new tag</span></label>
      <input
        type="text"
        id="tag"
        v-model="tag"
        @keydown.enter.prevent="hitTag"
      />
    </div>
    <div>
      <button class="create_btn" @click="submitPost">Create Post</button>
      <button class="reject_btn" @dblclick="rejectSubmit">
        Double Click to Reject
      </button>
    </div>
    <div v-if="tags.length">
      <div class="tags">
        <div v-for="singleTag in tags" :key="singleTag">
          <div>
            <span @click="deleteTag(singleTag)">➕</span>#{{ singleTag }}
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

export default {
  setup() {
    let title = ref("");
    let body = ref("");
    let tag = ref("");
    let tags = ref([]);
    let router = useRouter();
    let hitTag = () => {
      if (!tags.value.includes(tag.value)) tags.value.push(tag.value);
      tag.value = "";
    };
    let deleteTag = (singleTag) => {
      tags.value = tags.value.filter((tag) => tag !== singleTag);
    };
    let submitPost = async () => {
      if ((title.value, body.value, tags.value.length)) {
        await fetch("http://localhost:3000/posts", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({
            title: title.value,
            body: body.value,
            tags: tags.value,
            visible: true,
          }),
        });
        router.push("/");
      }
    };
    let rejectSubmit = () => {
      router.push("/");
    };
    return {
      title,
      body,
      tag,
      tags,
      hitTag,
      deleteTag,
      submitPost,
      rejectSubmit,
    };
  },
};
</script>

<style scoped>
form {
  width: 400px;
  text-align: center;
  margin: 50px auto 0;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  border-radius: 10px;
  text-align: left;
  user-select: none;
  background: rgba(255, 255, 255, 0.993);
  box-shadow: 2px 2px 2px white, -2px -2px 2px white;
}
form > div {
  margin: 20px auto;
}
div label {
  display: block;
  color: #5947fc;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 20px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
div input,
div textarea {
  outline: none;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  width: 300px;
  height: 30px;
  padding: 20px;
  font-size: 18px;
  border-radius: 5px 5px 0 0;
  border-color: transparent;
  border-bottom: 4px solid #ffa0a0;
}
div textarea {
  height: 100px;
}
div input:focus,
div textarea:focus {
  border: 4px solid #8c9dff;
}
.create_btn,
.reject_btn {
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  background-color: #8c9dff;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
}
.create_btn:hover {
  transition: transform 0.3s;
  animation: postEffect 300ms 2;
}
.create_btn:active,
.reject_btn:active {
  background-color: #ffa0a0;
  transform: translateY(-3px);
}
.reject_btn {
  background-color: crimson;
  color: white;
  margin-left: 15px;
}
.reject_btn:hover {
  animation: rejectEffect 400ms 2;
}
@keyframes rejectEffect {
  to {
    opacity: 0.2;
  }
}
@keyframes postEffect {
  50% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(-8px);
  }
}
div.tags {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  color: white;
}
div.tags div {
  background-color: gray;
  padding: 5px;
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
