import { combineReducers } from 'redux';
import propertiesSlice from './propertiesSlice';

const combinedSlices = combineReducers({
    properties: propertiesSlice, 
});

export default combinedSlices;
