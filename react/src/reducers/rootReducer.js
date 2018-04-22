import shelf from './shelfReducer/shelfReducer';
import { imageFetchError, imagesLoading, images } from './imageReducer';
import { newsFetchError, newsLoading, articles } from './newsReducer';
import { resumeFetchError, resumeLoading, resume } from './resumeReducer';
import { reelsFetchError, reelsLoading, reels } from './reelsReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  shelf,
  images,
  imageFetchError,
  imagesLoading, 
  articles,
  newsFetchError,
  newsLoading,
  resume,
  resumeFetchError,
  resumeLoading, 
  reels,
  reelsFetchError,
  reelsLoading,
});

export default rootReducer;