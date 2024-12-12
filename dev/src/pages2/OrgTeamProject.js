import React, {Suspense} from 'react';

import { useRecoilValue } from "recoil";
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {H} from 'tion';
import { getOrganaization } from '../recoil2/ORGANAIZATION.js';

import sogh from '../manegers/sogh.js';

import { GITHUB_AUTH } from '../recoil/GITHUB.js';

import Loading from 'panels/Loading.js';
import Breadcrumb from 'assemblies2/Breadcrumb.js';

export default function OrgTeamProject () {
    const { login, team_name, prj_number } = useParams();

    const github_auth = useRecoilValue(GITHUB_AUTH);

    if (!github_auth)
        return null;

    return (
        <Box sx={{height:'100%',width:'100%', overflow:'auto'}}>

          <Container sx={{height:'100%'}}>

            <Breadcrumb/>

            <Suspense fallback={<Loading/>}>
              <Contents login={login} team_name={team_name} prj_number={prj_number}/>
            </Suspense>

          </Container>

        </Box>
    );
}

function Contents (props) {
    const { login, team_name, prj_number } = props;

    const x = useRecoilValue(getOrganaization(login));
    console.log([login, team_name, prj_number]);
    console.log(x);

    return (
        <Box>

          <Box>
            <H>Attributes</H>
            <Box sx={{display:'flex', flexWrap:'wrap', pl:2, pr:2}}>
            </Box>
          </Box>

          <Box>
            <H>Tasks</H>
            <Box sx={{display:'flex', flexWrap:'wrap', pl:2, pr:2}}>
            </Box>
          </Box>

        </Box>
    );
}
