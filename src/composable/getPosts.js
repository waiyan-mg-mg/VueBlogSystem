import { ref } from "vue";
const getPosts = () => {
  const random = Math.random() * 3000 + 1;
  const posts = ref([]);
  const error_msg = ref("");
  const response = async () => {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, random);
      });
      const response = await fetch("http://localhost:3000/posts");
      if (response.status !== 200) throw new Error("URL not found");
      const dataArr = await response.json();
      posts.value = dataArr;
    } catch (error) {
      error_msg.value = error.message;
    }
  };
  return { posts, error_msg, response };
};
export default getPosts;
