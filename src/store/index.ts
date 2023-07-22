import { applyMiddleware, legacy_createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

import allReducers from './reducers';
import thunk from 'redux-thunk';

const myStore = legacy_createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

export default myStore;