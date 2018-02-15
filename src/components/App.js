import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

// import { IntlProvider, addLocaleData } from 'react-intl'
// import ja from 'react-intl/locale-data/ja'
// import jpn from './ja'
//
// addLocaleData([...ja])

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <div style={{ height: '100%' }}>
          <Router history={browserHistory} children={this.props.routes} />
        </div>
      </Provider>
    )
  }
  // render () {
  //   return (
  //     <IntlProvider
  //       locale={'ja'}
  //       message={jpn}
  //       store={this.props.store}
  //     >
  //       <div style={{ height: '100%' }}>
  //         <Router history={browserHistory} children={this.props.routes} />
  //       </div>
  //     </IntlProvider>
  //   )
  // }
}

export default App
