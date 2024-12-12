import Box from '@mui/material/Box';
import {P, LinkRR} from 'tion'; // , LinkOS, 

export default function Breadcrumb (props) {
    const path = window.location.pathname;

    const route = findRoute(path);

    if (!route.result)
        return null;

    const path_arr = path.split('/').slice(1);

    const list = [];
    for (let i=1 ; i<route.result.length ; i++ )
        list.push({
            path: '/' + path_arr.slice(0, route.data.detail[i].end).join('/'),
            label: route.result[i],
        });

    return (
        <Box sx={{display:'flex'}}>
          {list.map((item,i)=> {
              return (
                  <P>
                    {i >0 &&
                     <span style={{marginLeft:11, marginRight:11}}>
                       {">"}
                     </span>}

                    <span>
                      <LinkRR href={item.path}>
                        {item.label}
                      </LinkRR>
                    </span>
                  </P>
              );
          })}
        </Box>
    );
}

function findRoute(path) {

    for (const route of routes) {
        const ret = new RegExp(route.regex, "g").exec(path);
        if (ret)
            return {
                data: route,
                result: ret,
            };
    }

    return null;
}

const routes = [
    {
        regex: "/organaizations/(\\S+)/teams/(\\S+)/projects/(\\d+)",
        detail: {
            1: { end: 2 },
            2: { end: 4 },
            3: { end: 6 },
        }
    },
    {
        regex: '/organaizations/(\\S+)/teams/(\\S+)',
        detail: {
            1: { end: 2 },
            2: { end: 4 },
        }
    },
    {
        regex: '/organaizations/(\\S+)',
        detail: {
            1: { end: 2 },
            2: { end: 4 },
        }
    },
];
