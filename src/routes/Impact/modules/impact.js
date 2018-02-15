// ------------------------------------
// Constants
// ------------------------------------
export const LOAD_INITIAL_VIEW = 'LOAD_INITIAL_VIEW'
export const CHANGE_LOCALE = 'CHANGE_LOCALE'

// ------------------------------------
// Actions
// ------------------------------------
export const loadInitialView = () => {
  return {
    type    : LOAD_INITIAL_VIEW,
    payload: impactData,
  }
}

export const changeLocale = (lang) => {
  return {
    type    : CHANGE_LOCALE,
    payload: lang,
  }
}

export const actions = {
  loadInitialView, changeLocale
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const impactData = {
  baseScoreVer3 : 7.8,
  vectorVer3 : 'CVSS:3.0/AV:L/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H (legend)',
  impactScoreVer3 : 5.9,
  exploitabilityScoreVer3 : 1.8,
  attackVector : 'Local',
  attackComplexity : 'Low',
  privilegesRequired : 'Low',
  userInteraction : 'None',
  scope : 'Unchanged',
  confidentiality : 'High',
  integrity : 'High',
  availability : 'High',
  baseScoreVer2 : 7.2,
  vectorVer2 : '(AV:L/AC:L/Au:N/C:C/I:C/A:C) (legend)',
  impactScoreVer2 : 10.0,
  exploitabilityScoreVer2 : 3.9,
  accessVecotr : 'Locally exploitable',
  accessCompexity : 'Low',
  authentication : 'Not required to exploit',
  impactType : 'Allows unauthorized disclosure of information; Allows unauthorized modification; Allows disruption of service',
  locale : 'en'
}

const ACTION_HANDLERS = {
  [LOAD_INITIAL_VIEW] : (state, action) => Object.assign({}, state, action.payload),
  [CHANGE_LOCALE] : (state, action) => Object.assign({}, state, action.payload),
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function impactReducer (state = {}, action) {
// TODO: ネストが深いのを修正しないといけない(p.93~)
  if (action.type === 'CHANGE_LOCALE') {
    if (action.payload === 'jpn') {
      return {
        ...state,
        locale: 'ja'
      }
    } else if (action.payload === 'eng') {
      return {
        ...state,
        locale: 'en'
      }
    }
  }
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
