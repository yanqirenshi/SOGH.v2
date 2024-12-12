import React, {Suspense} from 'react';
import { useParams } from 'react-router-dom';

import { useRecoilValue } from "recoil";
import { getOrganaization } from '../recoil2/ORGANAIZATION.js';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {H} from 'tion';

import sogh from '../manegers/sogh.js';

import { GITHUB_AUTH } from '../recoil/GITHUB.js';

import Loading from '../panels/Loading.js';

import ItemOrganization from 'assemblies2/ItemOrganization.js';
import ItemMember from 'assemblies2/ItemMember.js';
import ItemTeam from 'assemblies2/ItemTeam.js';
import TableRepositories from 'assemblies2/TableRepositories.js';
import TableProjects from 'assemblies2/TableProjects.js';

export default function Organaization () {
    const { login } = useParams();

    const github_auth = useRecoilValue(GITHUB_AUTH);

    if (!github_auth)
        return null;

    return (
        <Box sx={{height:'100%',width:'100%', overflow:'auto'}}>

          <Container sx={{height:'100%'}}>

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

    if (!org) return null;

    return (
        <Box sx={{pb:33}}>

          <Box sx={{pt:6, pb:2}}>
            <ItemOrganization value={org}/>
          </Box>

          <Box sx={{mt:3, pl:5, pr:5}}>
            <Box>
              <H lev="6">Teams</H>
              <Box sx={{display:'flex', flexWrap:'wrap'}}>
                {org.teams().map((team)=>
                    <ItemTeam key={team.id()} value={team} sx={{p:0.5}}/>)}
              </Box>
            </Box>

            <Box sx={{mt:1}}>
              <H lev="6">Members</H>
              <Box sx={{display:'flex', flexWrap:'wrap'}}>
                {org.members().map((member)=>
                    <ItemMember key={member.id()} value={member} sx={{p:0.5}}/>)}
              </Box>
            </Box>
          </Box>


          <Box sx={{mt:6}}>
            <H>Repositoies</H>
            <Box sx={{display:'flex', flexWrap:'wrap', pl:2, pr:2}}>
              <TableRepositories value={org.repositories()}/>
            </Box>
          </Box>

          <Box sx={{mt:6}}>
            <H>Projects</H>
            <Box sx={{display:'flex', flexWrap:'wrap', pl:2, pr:2}}>
              <TableProjects value={org.projectsV2()}/>
            </Box>
          </Box>
        </Box>
    );
}
