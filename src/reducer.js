import { combineReducers } from 'redux';
import { toast } from 'react-toastify';
import { ACTION } from './utils/constants';
import gitHubReducer from '../src/Containers/GitHubSearchBar/APIs/reducer'

const initialState = {
    isLoading: false,
    errorMessageInToaster: '',
};


const commonContent = (state = initialState, action) => {
    switch (action.type) {
    case ACTION.SHOW_MAIN_LOADER:
        return { ...state, isLoading: true };
    case ACTION.HIDE_MAIN_LOADER:
        return { ...state, isLoading: false };
    case ACTION.SHOW_ERROR:
        toast.error(action.data.message);
        return { ...state };
    default:
        return state;
    }
};


const Reducer = combineReducers({
    commonContent,
    github: gitHubReducer,
});

export default Reducer;
