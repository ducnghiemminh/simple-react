import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

/* Slices */
import postReducer from './slices/postSlice';

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
  whitelist: []
};

const rootReducer = combineReducers({
  post: postReducer,
});

export { rootPersistConfig, rootReducer };
