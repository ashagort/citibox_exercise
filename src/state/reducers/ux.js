export default function ux (state = {}, action) {
  const newState = { ...state }
  switch (action.type) {
    case 'IS_LOADING':
      return { ...newState, isLoading: true }
    case 'GET_BEERS':
      return { ...newState, isLoading: false }
    case 'SELECT_DETAIL_BEER':
      return { ...newState, stage: 'detail' }
    default:
      return newState
  }
}
