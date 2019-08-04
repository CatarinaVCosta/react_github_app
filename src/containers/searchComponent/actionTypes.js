export const DO_SEARCH = 'DO_SEARCH';
export const DO_SEARCH_SUCCESS = 'DO_SEARCH_SUCCESS';
export const DO_SEARCH_ERROR = 'DO_SEARCH_ERROR';

export const GitHubAPIRequestInterface = {
  path: 'https://api.github.com/users/',
  method: 'GET'
};

export const gitHubAPIRequest = () => {
  return {
    ...GitHubAPIRequestInterface
  }
};
