export function mapStateToProps (state) {
  return {
    stage: state.ux.stage,
    isLoading: state.ux.isLoading,
    beers: state.beers.beerList,
    selectedBeer: state.beers.selectedBeer,
    numPageUser: state.beers.pagination,
    styleView: state.ux.styleView,
    favoriteBeers: state.beers.favoriteBeers
  }
}
