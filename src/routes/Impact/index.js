import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'impact',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require('./containers/ImpactContainer').default
      const reducer = require('./modules/impact').default
      injectReducer(store, { key: 'impact', reducer })
      cb(null, Counter)
    }, 'impact')
  }
})
