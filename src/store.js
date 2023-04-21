import {createStore} from 'redux';
import rootReduxer from './reducer/main';
const store = createStore(rootReduxer);


export default store;