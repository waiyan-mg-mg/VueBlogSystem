import { ref } from "vue";

const getSinglePost = (id) => {
  let dataArr = ref([]);
  let err = ref("");
  const load = async (id) => {
    try {
    await  new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
      const response = await fetch("http://localhost:3000/posts/" + id);
      if (response.status !== 200) throw new Error("URL not found!!");
      dataArr.value = await response.json();
    } catch (e) {
      err.value = e.message;
    }
  };
  return { dataArr, err, load };
};
export default getSinglePost;
