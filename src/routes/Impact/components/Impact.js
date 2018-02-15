import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { IntlProvider, addLocaleData, FormattedMessage } from 'react-intl'
import ja from 'react-intl/locale-data/ja'
import en from 'react-intl/locale-data/en'
import jpnDescription from './jpnDescription'
import engDescription from './engDescription'

addLocaleData([...ja, ...en])

export class Impact extends Component {
  componentDidMount () {
    this.props.loadInitialView()
  }

  getIntlProviderMessage = (lang) => {
    if (lang === 'ja') {
      return jpnDescription
    } else if (lang === 'en') {
      return engDescription
    }
  }

  getIntlProviderLocale () {
    const currentLocale = this.props.impact.locale
    // localeの初期値がない場合Reactは自動的にlocale:'en'として
    // warningするので、warningがかかる前にlocaleがnullの場合
    // localeに初期値を設定する
    if (currentLocale) {
      return currentLocale
    } else {
      return 'ja'
    }
  }

  render () {
    return (
      <IntlProvider
        locale={this.getIntlProviderLocale()}
        messages={this.getIntlProviderMessage(this.getIntlProviderLocale())}
      >
        <div className='impact'>
          <button onClick={() => this.props.changeLocale('jpn')}>
            日本語
          </button>
          <button onClick={() => this.props.changeLocale('eng')}>
            English
          </button>
          <h2 className='impact-h2'>
            <FormattedMessage
              id='title'
            />
          </h2>
          <div className='impact-div'>
            <h5><FormattedMessage id='cvssSeverity_Ver3' />:</h5>
            <dl>
              <dt><FormattedMessage id='baseScore_Ver3' />: {this.props.impact.baseScoreVer3}</dt>
              <dt><FormattedMessage id='vector' />: {this.props.impact.vectorVer3}</dt>
              <dt><FormattedMessage id='impactScore' />: {this.props.impact.impactScoreVer3}</dt>
              <dt><FormattedMessage id='exploitabilityScore_Ver3' />: {this.props.impact.exploitabilityScoreVer3}</dt>
            </dl>
          </div>
          <div className='impact-div'>
            <h5><FormattedMessage id='cvssMetrics_Ver3' />:</h5>
            <dl>
              <dt><FormattedMessage id='attackVector' />: {this.props.impact.attackVector}</dt>
              <dt><FormattedMessage id='attackComplexity' />: {this.props.impact.attackComplexity}</dt>
              <dt><FormattedMessage id='privilegesRequired' />: {this.props.impact.privilegesRequired}</dt>
              <dt><FormattedMessage id='userInteraction' />: {this.props.impact.userInteraction}</dt>
              <dt><FormattedMessage id='scope' />: {this.props.impact.scope}</dt>
              <dt><FormattedMessage id='confidentiality' />: {this.props.impact.confidentiality}</dt>
              <dt><FormattedMessage id='integrity' />: {this.props.impact.integrity}</dt>
              <dt><FormattedMessage id='availability' />: {this.props.impact.availability}</dt>
            </dl>
          </div>
          <div className='impact-div'>
            <h5><FormattedMessage id='cvssSeverity_Ver2' />:</h5>
            <dl>
              <dt><FormattedMessage id='baseScore_Ver2' />: {this.props.impact.baseScoreVer2}</dt>
              <dt><FormattedMessage id='vector' />: {this.props.impact.vectorVer2}</dt>
              <dt><FormattedMessage id='impactSubscore' />: {this.props.impact.impactScoreVer2}</dt>
              <dt><FormattedMessage id='exploitabilitySubscore_Ver2' />: {this.props.impact.exploitabilityScoreVer2}</dt>
            </dl>
          </div>
          <div className='impact-div'>
            <h5><FormattedMessage id='cvssMetrics_Ver2' />:</h5>
            <dl>
              <dt><FormattedMessage id='accessVector' />: {this.props.impact.accessVecotr}</dt>
              <dt><FormattedMessage id='accessComplexity' />: {this.props.impact.accessCompexity}</dt>
              <dt><FormattedMessage id='authentication' />: {this.props.impact.authentication}</dt>
              <dt><FormattedMessage id='disclosureInformation' />: {this.props.impact.impactType}</dt>
            </dl>
          </div>
        </div>
      </IntlProvider>
    )
  }
}

Impact.propTypes = {
  loadInitialView: PropTypes.func,
  changeLocale: PropTypes.func,
  impact: PropTypes.object
}

export default Impact
