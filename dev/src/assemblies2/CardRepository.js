import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {P, LinkOS, LinkRR} from 'tion';

export default function CardRepository (props) {
    const repository = props.value;

    if (!repository) return null;

    return (
        <Card sx={{ width: 166, height: 166, m:1 }}>
          <CardContent>
            <LinkRR href={null}>
              <P>
                {repository.name()}
              </P>
            </LinkRR>
          </CardContent>
        </Card>
    );
}

// function repositoryUrl (repository) {
//     const org = repository.organization();

//     if (!org) return null;

//     return `/organaizations/${org.name()}/repositorys/${repository.name()}`;
// }
