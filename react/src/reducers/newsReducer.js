export const newsFetchError = (state = false, action) => {
  switch (action.type) {
    case 'NEWS_FETCH_ERROR':
      return action.hasErrored;
    default:
      return state;
  }
}

export const newsLoading = (state = false, action) => {
  switch(action.type) {
    case 'NEWS_LOADING':
      return action.isLoading;
    default: 
      return state;
  }
}

export const articles = (state = [], action) => {
  switch(action.type) {
    case 'NEWS_FETCH_SUCCESS':
      return action.articles;
    default: 
      return state;
  }
}