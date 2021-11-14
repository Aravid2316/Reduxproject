import {createStore,combineReducers} from 'redux';
import {reducertextdata} from '../reducer/reducer';
const rootReducer = combineReducers({
    textInstore:reducertextdata
});
const store  = () =>{
    // console.log("reducertextdata",reducertextdata)
    return createStore(rootReducer);
}
export default store;