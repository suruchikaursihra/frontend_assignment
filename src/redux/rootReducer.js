import { combineReducers } from 'redux';
import DogReducer from './Dog/dog.reducer';

/**
 * @description root reducer
 */
const rootReducer = combineReducers({
    data: DogReducer,
});

export default rootReducer;