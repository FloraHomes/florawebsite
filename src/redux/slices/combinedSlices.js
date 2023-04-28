import { combineReducers } from 'redux';
import propertiesSlice from './propertiesSlice';
import storiesSlice from './storiesSlice';

const combinedSlices = combineReducers({
    properties: propertiesSlice,
    stories: storiesSlice
});

export default combinedSlices;
