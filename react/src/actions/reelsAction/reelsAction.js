export const reelsFetchError = (bool) =>  {
  return {
    type: 'REELS_FETCH_ERROR',
    hasErrored: bool,
  }
}

export const reelsLoading = (bool) => {
  return {
    type: 'REELS_LOADING',
    isLoading: bool,
  }
}

export const reelsFetchSuccess = (reels) => {
  return {
    type: 'REELS_FETCH_SUCCESS',
    reels,
  }
}

export const fetchReels = (url) => {
  return (dispatch) => {
    dispatch(reelsLoading(true));

    return fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          dispatch(reelsLoading(false));
          console.log('error, link no good')
          throw new Error(response.statusText);
        }
        dispatch(reelsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((reels) => dispatch(reelsFetchSuccess(reels.reels)))
      .catch(() => dispatch(reelsFetchError(true)));
  }
}