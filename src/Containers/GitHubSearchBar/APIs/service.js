import ApiService from '../../../utils/services/ApiService';

class GitHubService {
    static baseUrl = 'https://api.github.com/'
    static getRepositories(userName) {
        const URL = `users/${userName}/repos`
        const options = {
            method: 'GET',
            url: `${GitHubService.baseUrl}${URL}`,
        };
        return ApiService(options, false);
    }
    static getPRs(userName, repo) {
        const URL = `repos/${userName}/${repo}/pulls`
        const options = {
            method: 'GET',
            url: `${GitHubService.baseUrl}${URL}`,
        };
        return ApiService(options, false);
    }
    static getFiles(userName, repo, pull) {
        const URL = `repos/${userName}/${repo}/pulls/${pull}/files`
        const options = {
            method: 'GET',
            url: `${GitHubService.baseUrl}${URL}`,
        };
        return ApiService(options, false);
    }
}
export default GitHubService;
