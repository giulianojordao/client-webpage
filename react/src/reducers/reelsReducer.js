export const reelsFetchError = (state = false, action) => {
  switch (action.type) {
    case 'REELS_FETCH_ERROR':
      return action.hasErrored;
    default:
      return state;
  }
}

export const reelsLoading = (state = false, action) => {
  switch(action.type) {
    case 'REELS_LOADING':
      return action.isLoading;
    default: 
      return state;
  }
}

export const reels = (state = [], action) => {
  switch(action.type) {
    case 'REELS_FETCH_SUCCESS':
      return action.reels;
    default: 
      return state;
  }
}