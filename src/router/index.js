import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import TermsCondition from '@/components/TermsCondition.vue'
import PublicPrivacy from '@/components/PublicPrivacy.vue'
import Tutorial from '@/components/Tutorial.vue'
import viewLock from '@/components/viewLock.vue'
import Walkthrough from '@/components/walkthrough.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/termscondition',
    name: 'TermsCondition',
    component: TermsCondition
  },
  {
    path: '/PublicPrivacy',
    name: 'PublicPrivacy',
    component: PublicPrivacy
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: Tutorial
  },
  {
    path: '/walkthrough',
    name: 'Walkthrough',
    component: Walkthrough
  },
  {
    path: '/viewlock:lockNum',
    name: 'viewLock',
    props: true,
    component: viewLock
  },
 




]

const router = new VueRouter({
  routes,
  mode: 'history' //delete # (add for older browser support)
})

export default router


