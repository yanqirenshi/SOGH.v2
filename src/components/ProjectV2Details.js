import React from 'react';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Fields from './ProjectV2/Fields.js';

import Tabs from './ProjectV2/Tabs.js';

import Description from './ProjectV2/Description.js';
import GanttChart from './ProjectV2/GanttChart.js';
import Items from './ProjectV2/Items.js';
import Metrix from './ProjectV2/Metrix.js';
import Part from './ProjectV2/Part.js';
import Points from './ProjectV2/Points.js';

export default function ProjectV2Details (props) {
    const project = props.project;
    const items = props.items;
    const actions = ensureActions(props.actions);

    const [tabs, setTabs] = React.useState({
        selected: 'items',
        list: [
            { code: 'metrix',      label: 'Metrix' },
            { code: 'items',       label: 'Items' },
            { code: 'gantt-chart', label: 'Gantt Chart' },
            { code: 'part',        label: 'PART' },
            { code: 'points',      label: 'Points' },
            { code: 'description', label: 'Description' },
            { code: 'fields',      label: 'Fields' },
        ],
    });

    if (!project)
        return null;

    return (
        <Box sx={{pt:3}}>

          <Container maxWidth="lg">

            <Box>
              <Tabs data={tabs} onChange={new_tabs=>setTabs(new_tabs)}/>
            </Box>

            {'description'===tabs.selected && <Description/>}

            {'gantt-chart'===tabs.selected && <GanttChart/>}

            {'items'===tabs.selected &&
             <Box sx={{pt:4}}>
               <Items items={items} actions={actions}/>
             </Box>}

            {'metrix'===tabs.selected && <Metrix/>}

            {'part'===tabs.selected && <Part/>}

            {'points'===tabs.selected && <Points/>}

            {'fields'===tabs.selected &&
             <Box sx={{pt:4}}>
               <Fields project={project}/>
             </Box>}
          </Container>

        </Box>
    );
}

function ensureActions (actions) {
    if (actions)
        return actions;

    return {
        item: {
            title: {
                click: (id, type)=> console.log(id),
            },
        },
        issue: {
            title: {
                click: (id, type)=> console.log(id),
            },
        },
    };
}
