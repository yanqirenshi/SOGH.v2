import React, {Suspense} from 'react';

import { useRecoilValue } from "recoil";
import { findOrganaizations } from '../recoil2/ORGANAIZATION.js';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import sogh from '../manegers/sogh.js';
import {H} from 'tion';

import Loading from '../panels/Loading.js';
import ItemOrganization from 'assemblies2/ItemOrganization.js';

export default function Home () {
    const viewer = sogh.viewer();

    if (!viewer) return null;

    return (
        <Box sx={{height:'100%',width:'100%'}}>

          <Container sx={{height:'100%', background:'#fff'}}>
            <Box>
              <p>
                {viewer.email()}
              </p>
            </Box>

            <Box>
              {viewer.company()}
            </Box>

            <Suspense fallback={<Loading/>}>
              <Organaization viewer={viewer}/>
            </Suspense>

          </Container>

        </Box>
    );
}

function Organaization (props) {
    const { viewer } = props;

    const organizations = useRecoilValue(findOrganaizations(viewer.login()));

    return (
        <Box>
          <H>Organaization</H>

          <Box sx={{mt:2}}>
            {organizations.map(id=> {
                const org = sogh.organization(id);

                return <ItemOrganization value={org}/>;
            })}
          </Box>
        </Box>
    );
}
