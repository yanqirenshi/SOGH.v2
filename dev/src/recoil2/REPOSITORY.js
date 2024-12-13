import * as recoil from 'recoil';

import sogh from '../manegers/sogh.js';

export const getRepositoriesAtOrgName = recoil.selectorFamily({
    key: 'REPOSITORY.GET-REPOSITORIES-AT-ORG-NAME',
    get: data => async () => {
        return await sogh.asyncFetchRepositoryByLoginRepoName(data.login,
                                                              data.repo_name);
    },
});
