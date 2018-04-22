export const newsFetchError = (bool) =>  {
  return {
    type: 'NEWS_FETCH_ERROR',
    hasErrored: bool,
  }
}

export const newsLoading = (bool) => {
  return {
    type: 'NEWS_LOADING',
    isLoading: bool,
  }
}

export const newsFetchSuccess = (articles) => {
  return {
    type: 'NEWS_FETCH_SUCCESS',
    articles,
  }
}

export const fetchArticles = (url) => {
  return (dispatch) => {
    dispatch(newsLoading(true));

    return fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          dispatch(newsLoading(false));
          console.log('error, link no good')
          throw new Error(response.statusText);
        }
        dispatch(newsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((news) => dispatch(newsFetchSuccess(news.articles)))
      .catch(() => dispatch(newsFetchError(true)));
  }
}