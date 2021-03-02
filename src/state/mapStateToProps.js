export function mapStateToProps (state) {
  return {
    stage: state.ux.stage,
    isLoading: state.ux.isLoading,
    beers: state.beers.beerList
  }
}
