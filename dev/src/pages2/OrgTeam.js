import React, {Suspense} from 'react';
import Measure from 'react-measure';

import { useRecoilValue } from "recoil";
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { H, P, Tabs } from 'tion';
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
        <Box sx={{height:'100%',width:'100%'}}>
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

    return (
        <Panel team={sogh.team(id)}/>
    );
}

function Panel (props) {
    const team = props.team;

    const [bounds, setBounds] = React.useState({height:0});
    const [tabs, setTabs] = React.useState({
        selected: 't1',
        list: [
            { code: 't1', label: 'Projects' },
            { code: 't2', label: 'Repositories' },
            { code: 't3', label: 'Teams' },
        ],
    });

    if (!team) return null;

    return (
        <>
          <Measure bounds onResize={contentRect => setBounds(contentRect.bounds)}>
            {({ measureRef }) => <Head ref={measureRef} team={team}
                                       tabs={tabs} onChangeTabs={v=>setTabs(v)}/>}
          </Measure>

          <Box sx={{
              height:`calc(100% - ${bounds.height}px)`,
              background:'#fff',
              overflow:'auto'
          }}>
            {tabs.selected==='t1' && <TabProjects team={team}/>}
            {tabs.selected==='t2' && <TabRepositories team={team}/>}
            {tabs.selected==='t3' && <TabTeams team={team}/>}
          </Box>
        </>
    );
}

function Head (props) {
    const team = props.team;
    const tabs = props.tabs;
    const onChangeTabs = props.onChangeTabs;

    return (
        <Box>
          <Container sx={{height:'100%'}}>
            <Breadcrumb/>

            <Box sx={{mt:1}}>
              <H>{team.name()}</H>

              <Box sx={{display:'flex', flexWrap:'wrap'}}>
                {team.members().map((member)=>
                    <ItemMember key={member.id()}
                                value={member}
                                sx={{p:0.5}}
                                size={22}/>)}
              </Box>
            </Box>
          </Container>

          <Tabs data={tabs} onChange={onChangeTabs}/>
        </Box>
    );
}

function TabProjects (props) {
    const team = props.team;
    return (
        <Box sx={{mt:6}}>
          <Container>
            <TableProjects value={team.projectsV2()}/>
          </Container>
        </Box>
    );
}

function TabRepositories (props) {
    const team = props.team;
    return (
        <Box sx={{mt:6}}>
          <Container>
            <TableRepositories value={team.repositories()}/>
          </Container>
        </Box>
    );
}

function TabTeams (props) {
    const team = props.team;
    return (
        <Box sx={{mt:3, pl:5, pr:5}}>
          {team.teams().length > 0 &&
           <Box sx={{mt:1}}>
             {team.teams().map((team)=>
                 <ItemTeam key={team.id()} value={team} sx={{p:0.5}}/>)}
           </Box>}
        </Box>
    );
}
