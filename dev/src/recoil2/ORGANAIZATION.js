import * as recoil from 'recoil';

import sogh from '../manegers/sogh.js';

export const getOrganaization = recoil.selectorFamily({
    key: 'GITHUB_ORGANAIZATION',
    get: login => async () => {
        return await sogh.asyncFetchOrganaizationByLogin(login);
    },
});

export const findOrganaizations = recoil.selectorFamily({
    key: 'GITHUB_ORGANAIZATION',
    get: login => async () => {
        return await sogh.asyncFetchOrganaizationByViewer();
    },
});
