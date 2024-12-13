import Box from '@mui/material/Box';
import {P, LinkOS} from 'tion'; // , LinkRR

export default function ItemMember (props) {
    const member = props.value;
    const sx = props.sx;
    const size = props.size || 33;

    if (!member) return null;

    return (
        <Box sx={{
            ...sx,
            ...{display:'flex', alignItems: 'center'}
        }}>

          <P>
            <LinkOS href={member.url()}>
              <img src={member.avatarUrl()}
                   alt={member.name()}
                   width={`${size}px`}/>
            </LinkOS>
          </P>

          {/* <P sx={{pl:2}}> */}
          {/*   <LinkRR href={'/memberanaizations/'+member.name()}> */}
          {/*     {member.name()} */}
          {/*   </LinkRR> */}
          {/* </P> */}

        </Box>
    );
}
