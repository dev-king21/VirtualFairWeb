import Vue from 'vue'
import Router from 'vue-router'
import 'firebase/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/app/',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
   {
      path: '',
      component: () => import('@/layouts/full-page/FullPage.vue'),
      children: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/callback',
          name: 'auth-callback',
          component: () => import('@/views/Callback.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/Home.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/auth/login',
          name: 'auth-login',
          component: () => import('@/views/auth/Login.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/auth/register',
          name: 'auth-register',
          component: () => import('@/views/auth/Register.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/auth/forgot-password',
          name: 'auth-forgot-password',
          component: () => import('@/views/auth/ForgotPassword.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/auth/reset-password',
          name: 'auth-reset-password',
          component: () => import('@/views/auth/ResetPassword.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/auth/lock-screen',
          name: 'auth-lock-screen',
          component: () => import('@/views/auth/LockScreen.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/pages/comingsoon',
          name: 'pages-coming-soon',
          component: () => import('@/views/pages/ComingSoon.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/pages/error-404',
          name: 'page-error-404',
          component: () => import('@/views/pages/Error404.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/pages/error-500',
          name: 'page-error-500',
          component: () => import('@/views/pages/Error500.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/auth/not-authorized',
          name: 'auth-not-authorized',
          component: () => import('@/views/auth/NotAuthorized.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/pages/maintenance',
          name: 'page-maintenance',
          component: () => import('@/views/pages/Maintenance.vue'),
          meta: {
            rule: 'editor'
          }
        }
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: '*',
      redirect: '/pages/error-404'
    }
  ]
})

router.afterEach(() => {
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
