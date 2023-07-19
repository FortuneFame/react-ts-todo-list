import { legacy_createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import allReducers from './reducers';

const myStore = legacy_createStore(allReducers, composeWithDevTools());

export default myStore;