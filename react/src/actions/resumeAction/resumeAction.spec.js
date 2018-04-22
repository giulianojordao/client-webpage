import { imageFetchError, fetchImages, imagesLoading, imageFetchSuccess } from './imageAction';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Image Action', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })
  
  it('gets correct actions when fetching images from actual url', () => {
    const store = mockStore({});

    return store.dispatch(fetchImages('https://unsplash.it/list'))
      .then(() => {
        expect(store.getActions()).toMatchSnapshot();
      })
  });

  it('gets correct actions using a mock url on successful request', () => {
    const store = mockStore({});
    const expectedActions = [
      'IMAGES_LOADING',
      'IMAGES_LOADING',
      'IMAGES_FETCH_SUCCESS'
    ]

    fetchMock.get('*', {})

    return store.dispatch(fetchImages())
      .then(() => {
        const actualActions = store.getActions().map(action => action.type);
        expect(actualActions).toEqual(expectedActions);
      })
  });
 
  it('gets correct actions using a mock url on failed request', () => {
    const store = mockStore({});
    const expectedActions = [
      'IMAGES_LOADING',
      'IMAGES_LOADING',
      'IMAGE_FETCH_ERROR'
    ]

    fetchMock.get('*', { status: 500 })

    return store.dispatch(fetchImages())
      .then(() => {
        const actualActions = store.getActions().map(action => action.type);
        expect(actualActions).toEqual(expectedActions);
      })
  });

  it('should set fetch error to false', () => {
    const expected = {
      type: 'IMAGE_FETCH_ERROR',
      hasErrored: false,
    }
    expect(imageFetchError(false)).toEqual(expected)
  })

  it(' should set fetch error to true', () => {
    //another way of doing the test above but with a snapshot
    const result = imageFetchError(true);
    expect(result).toMatchSnapshot()
  })
})