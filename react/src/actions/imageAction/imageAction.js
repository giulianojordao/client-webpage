export const imageFetchError = (bool) =>  {
  return {
    type: 'IMAGE_FETCH_ERROR',
    hasErrored: bool,
  }
}

export const imagesLoading = (bool) => {
  return {
    type: 'IMAGES_LOADING',
    isLoading: bool,
  }
}

export const imageFetchSuccess = (images) => {
  return {
    type: 'IMAGES_FETCH_SUCCESS',
    images,
  }
}

export const fetchImages = (url) => {
  return (dispatch) => {
    dispatch(imagesLoading(true));

    return fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          dispatch(imagesLoading(false));
          console.log('error, link no good')
          throw new Error(response.statusText);
        }
        dispatch(imagesLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((data) => dispatch(imageFetchSuccess(data.images)))
      .catch(() => dispatch(imageFetchError(true)));
  }
}

export const preloadImages = (images) => {
  return {
    type: 'PRELOAD_IMAGES',
    images
  }
}