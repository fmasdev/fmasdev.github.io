import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../components/pages/Home.vue";
import Experience from "../components/pages/Experience.vue";
import Training from "../components/pages/Training.vue";
import Skills from "../components/pages/skills.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/experience', component: Experience },
    { path: '/training', component: Training },
    { path: '/skills', component: Skills },
  ]
})

export default router
