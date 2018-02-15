import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import CounterRoute from './Counter'
import ImpactRoute from './Impact'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    CounterRoute(store),
    ImpactRoute(store)
  ]
})

export default createRoutes
