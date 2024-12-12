import {Table} from 'tion'; // P, LinkOS, LinkRR

export default function TableRepositories (props) {
    const repositories = props.value;

    if (!repositories) return null;

    const sx = {
        head: {
            background:'#f2f2b0',
            row: {},
        },
        body: {
            row: {},
        },
    };

    const sorted_repositories = repositories.sort((a,b)=> {
        return a.name().localeCompare(b.name());
    });

    return (
        <Table columns={columns}
               rows={sorted_repositories}
               ids={{column: (col,i)=> i, row: (row,i)=> i}}
               sx={sx}/>
    );
}

const columns = [
    {
        code: 'name',
        label: 'Name',
        sx: {whiteSpace: 'nowrap'},
        val: (row)=> {
            return row.name();
        },
    },
    {
        code: 'description',
        label: 'Description',
        val: (row)=> {
            return row.description();
        },
    },
    // {
    //     code: 'owner',
    //     label: 'Owner',
    //     val: (row)=> {
    //         return row.owner().login;
    //     },
    // },
];
