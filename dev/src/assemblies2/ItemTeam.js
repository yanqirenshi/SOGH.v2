import Box from '@mui/material/Box';
import {P, LinkOS, LinkRR} from 'tion';

export default function ItemTeam (props) {
    const team = props.value;
    const sx = props.sx;

    if (!team) return null;

    return (
        <Box sx={{
            ...sx,
            ...{display:'flex', alignItems: 'center'}
        }}>

          <P>
            <LinkOS href={team.url()}>
              <img src={team.avatarUrl()}
                   alt={team.name()}
                   width="33px"/>
            </LinkOS>
          </P>

          {/* <P sx={{pl:2}}> */}
          {/*   <LinkRR href={'/teamanaizations/'+team.name()}> */}
          {/*     {team.name()} */}
          {/*   </LinkRR> */}
          {/* </P> */}

        </Box>
    );
}
