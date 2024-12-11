import React, {Suspense} from 'react';
import { useParams } from 'react-router-dom';

import { useRecoilValue } from "recoil";
import { getOrganaization } from '../recoil2/ORGANAIZATION.js';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {P, H, LinkOS, LinkRR} from 'tion';

import sogh from '../manegers/sogh.js';

import { GITHUB_AUTH } from '../recoil/GITHUB.js';

import SideMenu from '../assemblies/SideMenu.js';
import Loading from '../panels/Loading.js';

export default function Organaization () {
    const { login } = useParams();

    const github_auth = useRecoilValue(GITHUB_AUTH);

    if (!github_auth)
        return null;

    return (
        <Box sx={{height:'100%',width:'100%'}}>

          <Container sx={{height:'100%', background:'#fff'}}>

            <Suspense fallback={<Loading/>}>
              <Contents login={login}/>
            </Suspense>

          </Container>

        </Box>
    );
}

function Contents (props) {
    const { login } = props;

    const id = useRecoilValue(getOrganaization(login));
    const org = sogh.organization(id);

    console.log(org);

    return (
        <Box>

          <Box sx={{display:'flex', alignItems: 'center'}}>
            <P>
              <LinkOS href={org.url()}>
                <img src={org.avatarUrl()} width="33px"/>
              </LinkOS>
            </P>
            <P>
              <LinkRR href={'/organaizations/'+org.name()}>
                {org.name()}
              </LinkRR>
            </P>
          </Box>


        <Box>
          <H>Members</H>
        </Box>

        <Box>
          <H>Teams</H>
        </Box>

        <Box>
          <H>Repositoies</H>
        </Box>

        <Box>
          <H>Projects</H>
        </Box>

        </Box>
    );
}
