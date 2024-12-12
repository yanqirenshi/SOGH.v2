import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {P, LinkOS, LinkRR} from 'tion';

export default function CardTeam (props) {
    const team = props.value;

    if (!team) return null;

    return (
        <Card sx={{ width: 166, height: 166, m:1 }}>
          <CardContent>
            <LinkRR href={teamUrl(team)}>
              <P>
                {team.name()}
              </P>
            </LinkRR>
          </CardContent>
        </Card>
    );
}

function teamUrl (team) {
    const org = team.organization();

    if (!org) return null;

    return `/organaizations/${org.name()}/teams/${team.name()}`;
}
