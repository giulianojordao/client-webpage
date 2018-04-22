import reducer from './shelfReducer';
import initialState from '../../initialState';

describe('shelf reducer', () => {
  it ('should move new item to front', () => {
    const payload = {
      type: "add",
      item: {
        src: "https://unsplash.it/300?image=15",
        name: "Our World",
        description: "Lorem ipsum dolor sit amet elit...",
        id: 2
      }
    }
    const expected = reducer(initialState, payload)
    expect(expected[0].id).toEqual(2)
  })
})