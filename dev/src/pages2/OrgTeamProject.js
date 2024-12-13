import React, {Suspense} from 'react';
import Measure from 'react-measure';

import { useRecoilValue } from "recoil";
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {H, P, Tabs, LinkOS} from 'tion';
import { getProjectAtOrg } from '../recoil2/PROJECT.js';

import sogh from '../manegers/sogh.js';

import { GITHUB_AUTH } from '../recoil/GITHUB.js';

import Loading from 'panels/Loading.js';
import Breadcrumb from 'assemblies2/Breadcrumb.js';

export default function OrgTeamProject () {
    const { login, prj_number } = useParams();

    const github_auth = useRecoilValue(GITHUB_AUTH);

    if (!github_auth)
        return null;

    return (
        <Box sx={{height:'100%',width:'100%'}}>
          <Suspense fallback={<Loading/>}>
            <Contents login={login} prj_number={prj_number}/>
          </Suspense>
        </Box>
    );
}

function Contents (props) {
    const { login, prj_number } = props;

    const id = useRecoilValue(getProjectAtOrg({login, prj_number}));

    if (!id) return null;

    return (
        <Panel value={sogh.projectV2(id)}/>
    );
}


function Panel (props) {
    const prj = props.value;

    const [bounds, setBounds] = React.useState({height:0});
    const [tabs, setTabs] = React.useState({
        selected: 't1',
        list: [
            { code: 't1', label: 'Tasks(Board)' },
            { code: 't2', label: 'Tasks(List)' },
            { code: 't3', label: 'Issues' },
            { code: 't9', label: 'Attributes' },
        ],
    });

    if (!prj) return null;

    return (
        <>
          <Measure bounds onResize={contentRect => setBounds(contentRect.bounds)}>
            {({ measureRef }) => (
                <Header ref={measureRef} value={prj}
                        tabs={tabs} onChangeTabs={v=>setTabs(v)}/>
            )}
          </Measure>

          <Box sx={{
              height:`calc(100% - ${bounds.height}px)`,
              background:'#fff',
              overflow:'auto'
          }}>
            {tabs.selected==='t1' && <TabTasksBoard/>}
            {tabs.selected==='t2' && <TabTasksList/>}
            {tabs.selected==='t3' && <TabIssues/>}
            {tabs.selected==='t9' && <TabTasksAttributes/>}
          </Box>
        </>
    );
}

function Header (props) {
    const prj = props.value;
    const ref = props.ref;
    const tabs = props.tabs;
    const onChangeTabs = props.onChangeTabs;

    return (
        <Box ref={ref}>
          <Container>
            <Breadcrumb/>

            <Box sx={{mt:1}}>
              <H lev="6">
                {prj.title()}

                <span>
                  (
                  <LinkOS href={prj.url()}>
                    {prj.number()}
                  </LinkOS>
                  )
                </span>
              </H>
            </Box>

            <Box sx={{mt:1}}>
              <P>Attributes ........</P>
              <Box sx={{display:'flex', flexWrap:'wrap', pl:2, pr:2}}>
              </Box>
            </Box>
          </Container>

          <Tabs data={tabs} onChange={onChangeTabs}/>
        </Box>
    );
}

function TabTasksBoard () {
    return (
        <P>TabTasksBoard</P>
    );
}

function TabTasksList () {
    return (
        <P>TabTasksList</P>
    );
}

function TabIssues () {
    return (
        <P>TabIssues</P>
    );
}

function TabTasksAttributes () {
    return (
        <P>TabTasksAttributes</P>
    );
}
