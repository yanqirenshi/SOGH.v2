import React, {Suspense} from 'react';

import { useRecoilValue } from "recoil";
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {H, P} from 'tion';
import { getTeam } from '../recoil2/TEAMS.js';

import sogh from '../manegers/sogh.js';

import { GITHUB_AUTH } from '../recoil/GITHUB.js';

import Loading from 'panels/Loading.js';
import Breadcrumb from 'assemblies2/Breadcrumb.js';
import ItemMember from 'assemblies2/ItemMember.js';
import ItemTeam from 'assemblies2/ItemTeam.js';
import TableRepositories from 'assemblies2/TableRepositories.js';
import TableProjects from 'assemblies2/TableProjects.js';

export default function OrgTeam () {
    const { login, team_name } = useParams();

    const github_auth = useRecoilValue(GITHUB_AUTH);

    if (!github_auth)
        return null;

    return (
        <Box sx={{height:'100%',width:'100%', overflow:'auto'}}>
          <Suspense fallback={<Loading/>}>
            <Contents login={login} team_name={team_name}/>
          </Suspense>
        </Box>
    );
}

function Contents (props) {
    const { login, team_name } = props;

    const id = useRecoilValue(getTeam({login, team_name}));

    if (!id) return null;

    const team = sogh.team(id);

    if (!team) return null;

    return (
        <Box sx={{pb:33}}>

          <Container sx={{height:'100%'}}>
            <Breadcrumb/>

            <Box sx={{mt:1}}>
              <H>
                {team_name}
              </H>
            </Box>
          </Container>


          <Box sx={{mt:3, pl:5, pr:5}}>
            <Box>
              <H lev="6">Members</H>
              <Box sx={{display:'flex', flexWrap:'wrap'}}>
                {team.members().map((member)=>
                    <ItemMember key={member.id()} value={member} sx={{p:0.5}}/>)}
              </Box>
            </Box>

            {team.teams().length > 0 &&
             <Box sx={{mt:1}}>
               <H lev="6">Teams</H>
               <Box sx={{display:'flex', flexWrap:'wrap'}}>
                 {team.teams().map((team)=>
                     <ItemTeam key={team.id()} value={team} sx={{p:0.5}}/>)}
               </Box>
             </Box>}
          </Box>

          <Box sx={{mt:6}}>
            <H>Repositoies</H>
            <Box sx={{display:'flex', flexWrap:'wrap', pl:2, pr:2}}>
              <TableRepositories value={team.repositories()}/>
            </Box>
          </Box>

          <Box sx={{mt:6}}>
            <H>Projects</H>
            <Box sx={{display:'flex', flexWrap:'wrap', pl:2, pr:2}}>
              <TableProjects value={team.projectsV2()}/>
            </Box>
          </Box>
        </Box>
    );
}
