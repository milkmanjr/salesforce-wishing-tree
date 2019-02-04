import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        content: require('@/components/Content'),
      },
      children: [
        {
          path: 'attract',
          name: 'attract',
          component: require('@/components/Attract')
        },
        {
          path: 'main-menu',
          name: 'main-menu',
          component: require('@/components/Main')
        },
        {
          path: 'predictor/:id',
          name: 'predictor',
          component: require('@/components/Predictor')
        },
        {
          path: 'videos/:id/:index',
          name: 'videos',
          component: require('@/components/VideoPlayer')
        },
        {
          path: 'cta/:id',
          name: 'cta',
          component: require('@/components/Cta')
        }
      ]
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

router.replace('/attract')
export default router
