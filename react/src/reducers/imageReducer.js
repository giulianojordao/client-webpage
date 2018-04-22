export const imageFetchError = (state = false, action) => {
  switch (action.type) {
    case 'IMAGE_FETCH_ERROR':
      return action.hasErrored;
    default:
      return state;
  }
}

export const imagesLoading = (state = false, action) => {
  switch(action.type) {
    case 'IMAGES_LOADING':
      return action.isLoading;
    default: 
      return state;
  }
}

export const images = (state = {}, action) => {
  switch(action.type) {
    case 'IMAGES_FETCH_SUCCESS':
      return action.images;
    case 'PRELOAD_IMAGES':
      return action.images;
    default: 
      return state;
  }
}