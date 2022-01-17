import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Usecases from '../views/Usecases.vue'
import ManagedAccountUsecase from '../views/Usecases/ManagedAccount.vue'
import GlobalPayUsecase from '../views/Usecases/GlobalPay.vue'
import XPathUsecase from '../views/Usecases/XPath.vue'
import CIBUsecase from '../views/Usecases/CIB.vue'
import EmandateUsecase from '../views/Usecases/Emandate.vue'
import DirectUsecase from '../views/Usecases/DirectTransfer.vue'
import AgencyBankingUsecase from '../views/Usecases/AgencyBanking.vue'



import Apidocs from '../views/Apidocs.vue'
import ApiDocPage from '../views/Apidocs/ApiDocPage.vue'


import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Feedback from '../views/Feedback.vue'
import FAQ from '../views/FAQ.vue'


import Community from '../views/Community/community.vue'
import Blog from '../views/Community/blog.vue'
import BlogPage from '../views/Community/blog-page.vue'
import Forum from '../views/Community/forums.vue'
import ForumPage from '../views/Community/forum-page.vue'
import Tutorial from '../views/Community/tutorials.vue'
import Hackaton from '../views/Community/hackaton.vue'


import Overview from '../views/Dashboard/overview.vue'
import Post from '../views/Dashboard/post.vue'
import EditPost from '../views/Dashboard/editPost.vue'
import History from '../views/Dashboard/history.vue'
import Profile from '../views/Dashboard/profile.vue'


const routes = [
  {
    path: '/community',
    name: 'Community',
    component: Community
  }, 
  {
    path: '/blogs',
    name: 'Blog',
    component: Blog
  }, 
  {
    path: '/blog-page/:id',
    name: 'BlogPage',
    component: BlogPage
  }, 
  {
    path: '/forum',
    name: 'Forum',
    component: Forum
  }, 
  {
    path: '/forum-page/:id',
    name: 'ForumPage',
    component: ForumPage
  }, 
  {
    path: '/tutorials',
    name: 'Tutorial',
    component: Tutorial
  }, 
  {
    path: '/hackatons',
    name: 'Hackaton',
    component: Hackaton
  }, 



  

  {
    path: '/dashboard/overview',
    name: 'Overview',
    component: Overview,
    meta: { requiresAuth: true }
  }, 
  {
    path: '/dashboard/post',
    name: 'Post',
    component: Post,
    meta: { requiresAuth: true }
  }, 
  {
    path: '/dashboard/edit-post/:id',
    name: 'EditPost',
    component: EditPost,
    meta: { requiresAuth: true }
  }, 
  {
    path: '/dashboard/history',
    name: 'History',
    component: History,
    meta: { requiresAuth: true }
  }, 
  {
    path: '/dashboard/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
  }, 




  {
    path: '/',
    name: 'Home',
    component: Home
  }, 


   {
    path: '/usecases',
    name: 'Usecases',
    component: Usecases
  },
  {
    path: '/managed-accounts-uc',
    name: 'ManagedAccountUsecase',
    component: ManagedAccountUsecase
  },
  {
    path: '/xpath-uc',
    name: 'XPathUsecase',
    component: XPathUsecase
  },
  {
    path: '/global-pay-uc',
    name: 'GlobalPayUsecase',
    component: GlobalPayUsecase
  },
  {
    path: '/cib-uc',
    name: 'CIBUsecase',
    component: CIBUsecase
  },
  {
    path: '/emandate-uc',
    name: 'EmandateUsecase',
    component: EmandateUsecase
  },
  {
    path: '/direct-transfer-uc',
    name: 'DirectUsecase',
    component: DirectUsecase
  },
  {
    path: '/agency-banking-uc',
    name: 'AgencyBankingUsecase',
    component: AgencyBankingUsecase
  },






  {
    path: '/apidocs',
    name: 'Apidocs',
    component: Apidocs
  },
  {
    path: '/api-docs/:id',
    name: 'ApiDocPage',
    component: ApiDocPage,
    meta: { requiresAuth: true }
  },





  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresGuest: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresGuest: true }
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: Feedback
  },
  {
    path: '/faqs',
    name: 'FAQ',
    component: FAQ
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=> {
const apptoken = localStorage.getItem('user')
if (to.matched.some((record) => record.meta.requiresAuth)) {
 if(apptoken){
  next();
 }
 else{
   next({ path: '/login'});
 }
}
else{
  next();
}
})


router.beforeEach((to, from, next)=> {
  const token = localStorage.getItem('user')
  if (to.matched.some((record) => record.meta.requiresGuest)) {
   if(token){
    next({ path: '/'});
   }
   else{
     next();
   }
  }
  else{
    next();
  }
  })


export default router
