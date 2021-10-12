import get from 'lodash/get';

import { ACTION } from './constants';
import { showMainLoader, hideMainLoader } from '../../../action';
import GitHubService from './service';


export const fetchRepositories = (userName) => (dispatch) => {
    dispatch(showMainLoader());
    return GitHubService.getRepositories(userName).then((response) => {
        const apiResponse = get(response, 'data');
        if (apiResponse) {
            dispatch(hideMainLoader());
            dispatch({
                type: ACTION.FETCH_REPOSITORIES,
                repositories: apiResponse,
                userName,
            });
            return apiResponse;
        }
    });
};


export const fetchPRs = (userName, repo, index) => (dispatch) => {
    dispatch(showMainLoader());
    return GitHubService.getPRs(userName, repo).then((response) => {
        const apiResponse = get(response, 'data');
        if (apiResponse) {
            dispatch(hideMainLoader());
            dispatch({
                type: ACTION.FETCH_PULL_REQUESTS,
                PRs: apiResponse,
                index,
                repo
            });
            return apiResponse;
        }
    });
};



export const fetchFiles = (userName, repo, pull) => (dispatch) => {
    dispatch(showMainLoader());

    return GitHubService.getFiles(userName, repo, pull).then((response) => {
        const apiResponse = get(response, 'data');
        if (apiResponse) {
            dispatch(hideMainLoader());
            dispatch({
                type: ACTION.FETCH_FILES,
                files: apiResponse,
                selectedPR: pull
            });
            return apiResponse;
        }
    });
};

