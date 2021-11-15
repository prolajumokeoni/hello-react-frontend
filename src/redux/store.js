import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import greetingReducer from './greetings/Greetings';

const reducer = combineReducers({
  greeting: greetingReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(thunk),
);
export default store;
