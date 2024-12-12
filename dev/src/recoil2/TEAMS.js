import * as recoil from 'recoil';

import sogh from '../manegers/sogh.js';

// TODO: これつかっている？ コピペしただけ？
export const getOrganaization = recoil.selectorFamily({
    key: 'VIWER',
    get: login => async () => {
        return await sogh.asyncFetchOrganaizationByLogin(login);
    },
});

export const getTeam = recoil.selectorFamily({
    key: 'TEAMS.GET-TEAM',
    get: data => async () => {
        return await sogh.asyncFetchTeamByLoginTeamName(data.login, data.team_name);
    },
});
