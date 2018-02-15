import { connect } from 'react-redux'
import { loadInitialView, changeLocale } from '../modules/impact'
import Impact from '../components/Impact'

const mapDispatchToProps = {
  loadInitialView, changeLocale
}

const mapStateToProps = (state) => ({
  impact : state.impact
})

export default connect(mapStateToProps, mapDispatchToProps)(Impact)
