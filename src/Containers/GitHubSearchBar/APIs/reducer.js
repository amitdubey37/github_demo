import { ACTION } from './constants';

const initialState = {
    repositories: [],
    active_repo: null,
    active_PR: null,
    PRs: [],
    files: [],
    userName: '',
    selectedRepo: '',
    selectedPR: ''
};
export default function loginReducer(state =  initialState, action) {
    switch (action.type) {
    case ACTION.FETCH_REPOSITORIES:
        return { ...state, repositories: action.repositories, userName: action.userName };
    case ACTION.FETCH_PULL_REQUESTS:
        return { ...state, PRs: action.PRs, files: [], active_repo: action.index, active_PR: null, selectedRepo: action.repo };
        case ACTION.FETCH_FILES:
        return { ...state, files: action.files, active_PR: action.active_PR, selectedPR: action.selectedPR };
    default:
        return state;
    }
}
