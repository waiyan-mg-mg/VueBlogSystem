import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import "../assets/global.css";
import SinglePostDetail from "../components/SinglePostDetail.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/:id",
    name: "SinglePostDetail",
    component: SinglePostDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

// import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
// import About from "../views/AboutView.vue";
// import Jobs from "../views/Jobs/Jobs.vue";
// import JobDetail from "../components/Detail.vue";
// import NotFound from "../views/NotFound.vue"; //404
// import '../assets/global.css';
// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: HomeView,
//   },
//   {
//     path: "/about",
//     name: "About",
//     component: About,
//   },
//   {
//     path: "/jobs",
//     name: "Jobs",
//     component: Jobs,
//   },
//   {
//     path: "/jobs/:id",
//     name: "jobDetail",
//     component: JobDetail,
//     props: true,
//   },
//   // redirect
//   {
//     path: "/all-jobs",
//     redirect: "/jobs",
//   },
//   // 404
//   {
//     path: "/:catchAll(.*)",
//     component: NotFound,
//   },
// ];

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });

// export default router;
