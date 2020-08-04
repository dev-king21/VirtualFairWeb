import Vue from 'vue'
import Router from 'vue-router'
import 'firebase/auth'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/app',
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
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
          path: '/fair',
          name: 'fair-home',
          component: () => import('@/views/fair/FairCountry.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/fair/country/:fair_id',
          name: 'fair-country',
          component: () => import('@/views/fair/FairCountry.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/fair/country/:fair_id/:country_id',
          name: 'fair-country-stands',
          component: () => import('@/views/fair/FairStands.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/fair/stand/:fair_id/:country_id/:stand_id',
          name: 'fair-stands',
          component: () => import('@/views/fair/FairStandContent.vue'),
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
          path: '/auth/register/participant',
          name: 'register-participant',
          component: () => import('@/views/sign/RegisterParticipant.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/auth/register/expositor',
          name: 'register-expositor',
          component: () => import('@/views/sign/RegisterExpositor.vue'),
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
        },
        {
          path: '/room/schedule',
          name: 'room-schedule',
          component: () => import('@/views/room/Schedule.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/room/live-video',
          name: 'room-live',
          component: () => import('@/views/room/LiveVideo.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/room/webinar',
          name: 'room-webinar',
          component: () => import('@/views/room/Webinar.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/fair/chatting',
          name: 'fair-chatting',
          component: () => import('@/views/chat/Chatting.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/fair/contact',
          name: 'fair-contact',
          component: () => import('@/views/contact/Contact.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/setting',
          redirect: '/setting/home'
        },
        {
          path: '/setting/home',
          name: 'setting-home',
          component: () => import('@/views/setting/SettingHome.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/setting/profile',
          name: 'setting-profile',
          component: () => import('@/views/setting/Profile.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/setting/stand',
          name: 'setting-stand',
          component: () => import('@/views/setting/Stand/StandHome.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/setting/stand/information',
          name: 'setting-stand-info',
          component: () => import('@/views/setting/Stand/StandInformation.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/setting/stand/brochure',
          name: 'setting-stand-brochure',
          component: () => import('@/views/setting/Stand/StandBrochure.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/setting/stand/video',
          name: 'setting-stand-video',
          component: () => import('@/views/setting/Stand/StandVideo.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/setting/stand/schedule',
          name: 'setting-stand-schedule',
          component: () => import('@/views/setting/Stand/StandSchedule.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/setting/stand/contact',
          name: 'setting-stand-contact',
          component: () => import('@/views/setting/Stand/StandContact.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/setting/webinar',
          name: 'setting-webinar',
          component: () => import('@/views/setting/Webinar.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/setting/contact',
          name: 'setting-contact',
          component: () => import('@/views/setting/Contact.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/setting/schedule',
          name: 'setting-schedule',
          component: () => import('@/views/setting/Schedule.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/setting/download',
          name: 'setting-download',
          component: () => import('@/views/setting/Download.vue'),
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
