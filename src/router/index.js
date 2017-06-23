import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Signup from '@/pages/Signup'
import Login from '@/pages/Login'
import ChooseCharacter from '@/pages/ChooseCharacter'
import ChooseMap from '@/pages/ChooseMap'
import ChooseMonster from '@/pages/ChooseMonster'
import Fighting from '@/pages/Fighting'
import Winner from '@/pages/Winner'
import Loser from '@/pages/Loser'
import ManageItem from '@/pages/ManageItem'
import Ranking from '@/pages/Ranking'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Home', component: Home},
    {path: '/signup', name: 'Signup', component: Signup},
    {path: '/login', name: 'Login', component: Login},
    {path: '/choose/character', name: 'ChooseCharacter', component: ChooseCharacter},
    {path: '/choose/map', name: 'ChooseMap', component: ChooseMap},
    {path: '/choose/monster', name: 'ChooseMonster', component: ChooseMonster},
    {path: '/fighting', name: 'Fighting', component: Fighting},
    {path: '/winner', name: 'Winner', component: Winner},
    {path: '/loser', name: 'Loser', component: Loser},
    {path: '/manage/item', name: 'ManageItem', component: ManageItem},
    {path: '/ranking', name: 'Ranking', component: Ranking},
    {path: '*', component: Home}
  ],
  mode: 'history'
})
