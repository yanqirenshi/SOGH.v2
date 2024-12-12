import Box from '@mui/material/Box';
import {P, LinkOS, LinkRR} from 'tion';

export default function ItemOrganization (props) {
    const org = props.value;
    const sx = props.sx;

    if (!org) return null;

    return (
        <Box sx={{
            ...sx,
            ...{display:'flex', alignItems: 'center'}}}>

          <P>
            <LinkOS href={org.url()}>
              <img src={org.avatarUrl()}
                   alt={org.name()}
                   width="33px"/>
            </LinkOS>
          </P>

          <P sx={{pl:2}}>
            <LinkRR href={'/organaizations/'+org.name()}>
              {org.name()}
            </LinkRR>
          </P>

        </Box>
    );
}
