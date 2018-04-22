export const resumeFetchError = (bool) =>  {
  return {
    type: 'RESUME_FETCH_ERROR',
    hasErrored: bool,
  }
}

export const resumeLoading = (bool) => {
  return {
    type: 'RESUME_LOADING',
    isLoading: bool,
  }
}

export const resumeFetchSuccess = (resume) => {
  return {
    type: 'RESUME_FETCH_SUCCESS',
    resume,
  }
}

export const fetchResume = (url) => {
  return (dispatch) => {
    dispatch(resumeLoading(true));

    return fetch(url)
      .then((response) => {
        if (response.status !== 200) {
          dispatch(resumeLoading(false));
          console.log('error, link no good')
          throw new Error(response.statusText);
        }
        dispatch(resumeLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((resume) => dispatch(resumeFetchSuccess(resume.resume)))
      .catch(() => dispatch(resumeFetchError(true)));
  }
}