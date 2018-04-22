export const resumeFetchError = (state = false, action) => {
  switch (action.type) {
    case 'RESUME_FETCH_ERROR':
      return action.hasErrored;
    default:
      return state;
  }
}

export const resumeLoading = (state = false, action) => {
  switch(action.type) {
    case 'RESUME_LOADING':
      return action.isLoading;
    default: 
      return state;
  }
}

export const resume = (state = [], action) => {
  switch(action.type) {
    case 'RESUME_FETCH_SUCCESS':
      return action.resume;
    default: 
      return state;
  }
}