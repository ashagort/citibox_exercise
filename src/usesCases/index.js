export const useCaseStore = (repository) => (dispatch) => ({
    getBeers: getBeers(repository, dispatch)

})

function getBeers (repository, dispatch) {
    return async function() {
        const beers = await repository.getBeers()
        dispatch({
            type: 'GET_BEERS',
            payload: beers
        })
    }
}