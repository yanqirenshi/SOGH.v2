import * as recoil from 'recoil';

import sogh from '../manegers/sogh.js';

export const getProjectAtOrg = recoil.selectorFamily({
    key: 'PROJECT.GET-PROJECT-AT-ORG',
    get: data => async () => {
        return await sogh.asyncFetchProjectV2ByOrgLoginProjectV2Number(data.login, data.prj_number);
    },
});
