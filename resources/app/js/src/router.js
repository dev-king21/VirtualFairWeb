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
          path: '/home/webinar',
          name: 'home-webinar',
          component: () => import('@/views/Webinar.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/home/sponsor',
          name: 'home-sponsor',
          component: () => import('@/views/contact/Sponsor.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/home/contact',
          name: 'home-contact',
          component: () => import('@/views/contact/Contact.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/home/sustainability',
          name: 'home-sustainability',
          component: () => import('@/views/Sustainability.vue'),
          meta: {
            rule: 'editor'
          }
        },
        
        {
          path: '/contact/query',
          name: 'contact-query',
          component: () => import('@/views/fair/FairCountry.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/contact/contact_message',
          name: 'contact-message',
          component: () => import('@/views/fair/FairCountry.vue'),
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
          component: () => import('@/views/stand/Stand.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/stand/purchase/:stand_id',
          name: 'stand-purchase',
          component: () => import('@/views/stand/StandPurchase.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/stand/home',
          name: 'stand-home',
          component: () => import('@/views/stand/StandHome.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/stand/information/:stand_id',
          name: 'stand-info',
          component: () => import('@/views/Stand/StandInformation.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/stand/brochure/:stand_id',
          name: 'stand-brochure',
          component: () => import('@/views/Stand/StandBrochure.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/stand/gallery/:stand_id',
          name: 'stand-gallery',
          component: () => import('@/views/Stand/StandGallery.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/stand/schedule/:stand_id',
          name: 'stand-schedule',
          component: () => import('@/views/Stand/StandSchedule.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/stand/video/:type/:video_id',
          name: 'stand-video',
          component: () => import('@/views/Stand/StandVideo.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/stand/contact/:stand_id',
          name: 'stand-contact',
          component: () => import('@/views/Stand/StandContact.vue'),
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
          path: '/auth/register/:type',
          name: 'register-user',
          component: () => import('@/views/sign/RegisterUser.vue'),
          meta: {
            rule: 'editor'
          }
        },
        /* {
          path: '/auth/register/expositor',
          name: 'register-expositor',
          component: () => import('@/views/sign/RegisterParticipant.vue'),
          meta: {
            rule: 'editor'
          }
        }, */
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
          path: '/room/webinar/:webinar_id',
          name: 'room-webinar-show',
          component: () => import('@/views/room/LiveVideo.vue'),
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
          path: '/fair/sponsor',
          name: 'fair-sponsor',
          component: () => import('@/views/contact/Sponsor.vue'),
          meta: {
            rule: 'editor'
          }
        },
        {
          path: '/fair/contact/:stand_id',
          name: 'fair-sponsor-contact',
          component: () => import('@/views/contact/StandContact.vue'),
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
          component: () => import('@/views/setting/ContactRequest.vue'),
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
