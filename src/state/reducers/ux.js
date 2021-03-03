export default function ux (state = {}, action) {
  const newState = { ...state }
  switch (action.type) {
    case 'IS_LOADING':
      return { ...newState, isLoading: true }
    case 'GET_BEERS':
      return { ...newState, isLoading: false }
    case 'SELECT_DETAIL_BEER':
      return { ...newState, stage: 'detail', isLoading: false }
    case 'CHANGE_VIEW':
      return { ...newState, styleView: action.payload }
    case 'MY_FAVORITES_BEERS':
      return { ...newState, stage: 'favorites' }
    default:
      return newState
  }
}
