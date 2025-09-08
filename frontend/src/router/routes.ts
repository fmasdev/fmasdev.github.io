// router/routes.js

import type { RouteRecordRaw } from 'vue-router'
import HomePageComponent from '@components/Pages/HomePageComponent.vue'
import TrainingPageComponent from '@components/Pages/TrainingPageComponent.vue'
import SkillsPageComponent from '@components/Pages/SkillsPageComponent.vue'
import PojectsPageComponent from '@components/Pages/PojectsPageComponent.vue'
import ExperiencePageComponent from '@components/Pages/ExperiencePageComponent.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomePageComponent,
    meta: { labelKey: 'navigation.home' },
  },
  {
    path: '/experience',
    component: ExperiencePageComponent,
    meta: { labelKey: 'navigation.experience' },
  },
  {
    path: '/training',
    component: TrainingPageComponent,
    meta: { labelKey: 'navigation.training' },
  },
  {
    path: '/skills',
    component: SkillsPageComponent,
    meta: {
      labelKey: 'navigation.skills',
    },
  },
  {
    path: '/projects',
    component: PojectsPageComponent,
    meta: {
      labelKey: 'navigation.projects',
    },
  },
]

export default routes
