import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Signup from '@/pages/Signup'
import Signin from '@/pages/Signin'
import ChooseCharacter from '@/pages/ChooseCharacter'
import ChooseMap from '@/pages/ChooseMap'
import ChooseMonster from '@/pages/ChooseMonster'
import Fighting from '@/pages/Fighting'
import Winner from '@/pages/Winner'
import Loser from '@/pages/Loser'
import ManageItem from '@/pages/ManageItem'
import Ranking from '@/pages/Ranking'
import { USERONSTATE } from '@/services/Auth'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/signup', name: 'Signup', component: Signup},
    {path: '/signin', name: 'Signin', component: Signin},
    {path: '/choose/character', name: 'ChooseCharacter', component: ChooseCharacter, meta: { requiresAuth: true }},
    {path: '/choose/map', name: 'ChooseMap', component: ChooseMap, meta: { requiresAuth: true }},
    {path: '/choose/monster', name: 'ChooseMonster', component: ChooseMonster, meta: { requiresAuth: true }},
    {path: '/fighting', name: 'Fighting', component: Fighting, meta: { requiresAuth: true }},
    {path: '/winner', name: 'Winner', component: Winner, meta: { requiresAuth: true }},
    {path: '/loser', name: 'Loser', component: Loser, meta: { requiresAuth: true }},
    {path: '/manage/item', name: 'ManageItem', component: ManageItem, meta: { requiresAuth: true }},
    {path: '/ranking', name: 'Ranking', component: Ranking},
    {path: '*', component: Home}
  ],
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requiresAuth)) {
    USERONSTATE()
      .then(() => {
        next()
      }, () => {
        next({path: '/signin'})
      })
    return
  }
  next()
})

export default router
