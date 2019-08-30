import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Portfolio from './views/Portfolio.vue'
import Resume from './views/Resume.vue'
import Contact from './views/Contact.vue'
import Scrittor from './views/projects/Scrittor.vue'
import Cashmen from './views/projects/Cashmen.vue'
import Pulse from './views/projects/Pulse.vue'
import Pineapple from './views/projects/Pineapple.vue'
import Helpdesk from './views/projects/Helpdesk.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  {
    path: '/resume',
    name: 'resume',
    component: Resume
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/portfolio/scrittor',
    name: 'scrittor',
    component: Scrittor
  },
  {
    path: '/portfolio/cashmen',
    name: 'cashmen',
    component: Cashmen
  },
  {
    path: '/portfolio/pulse',
    name: 'pulse',
    component: Pulse
  },
  {
    path: '/portfolio/pineapple',
    name: 'pineapple',
    component: Pineapple
  },
  {
    path: '/portfolio/helpdesk',
    name: 'helpdesk',
    component: Helpdesk
  },
  ]
})