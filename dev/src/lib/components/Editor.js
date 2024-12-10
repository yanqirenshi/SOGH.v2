import React from 'react';

import Box from '@mui/material/Box';

import MDEditor from '@uiw/react-md-editor';

export default function Editor (props) {
    const data = props.data;
    const onChange = props.onChange;

    return (
        <Box sx={{display:'flex'}}>
          <div className="container">
            <MDEditor height={222}
                      value={data.contents}
                      onChange={(v)=> onChange(data.code, 'contents', v)}/>
          </div>
        </Box>
    );
}
