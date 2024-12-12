import Box from '@mui/material/Box';
import {P, LinkRR} from 'tion'; //, LinkOS

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
            <LinkRR href={teamUrl(team)}>
              <img src={team.avatarUrl()}
                   alt={team.name()}
                   width="33px"/>
            </LinkRR>
          </P>

          {/* <P sx={{pl:2}}> */}
          {/*   <LinkRR href={'/teamanaizations/'+team.name()}> */}
          {/*     {team.name()} */}
          {/*   </LinkRR> */}
          {/* </P> */}

        </Box>
    );
}

function teamUrl (team) {
    const org = team.organization();

    if (!org) return null;

    return `/organaizations/${org.name()}/teams/${team.name()}`;
}
