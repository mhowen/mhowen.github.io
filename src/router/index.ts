import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '@/views/LandingView.vue'
import HomeView from '@/views/HomeView.vue'
import ResumeView from '@/views/ResumeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView,
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/resume',
      name: 'resume',
      component: ResumeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
    },
    {
      path: '/projects/responsive_design_sandbox',
      name: 'Responsive Design Sandbox',
      component: () => import('../views/ResponsiveDesignSandboxView.vue'),
    },
    {
      path: '/projects/web_design_what_to_expect',
      name: 'Web Design: What to Expect',
      component: () => import('../views/WebDesignW2EView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    }
  ],
  scrollBehavior() {
    // should equal the view transition delay
    const transition_delay_ms = 500;

    // scrolls to top of page at the instant before new DOM is rendered
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0 })
      }, transition_delay_ms);
    })
  }
})

export default router
