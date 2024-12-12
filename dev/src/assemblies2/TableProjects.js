import {Table} from 'tion'; // P, LinkOS, LinkRR

export default function TableProjects (props) {
    const projects = props.value;

    if (!projects) return null;

    const sx = {
        head: {
            background:'#f2f2b0',
            row: {},
        },
        body: {
            row: {},
        },
    };

    const sorted_projects = projects.sort((a,b)=> {
        return a.title().localeCompare(b.title());
    });

    return (
        <Table columns={columns}
               rows={sorted_projects}
               ids={{column: (col,i)=> i, row: (row,i)=> i}}
               sx={sx}/>
    );
}

const columns = [
    {
        code: 'number',
        label: '#',
        sx: {whiteSpace: 'nowrap'},
        val: (row)=> {
            return row.number();
        },
    },
    {
        code: 'name',
        label: 'Name',
        sx: {whiteSpace: 'nowrap'},
        val: (row)=> {
            return row.title();
        },
    },
    {
        code: 'description',
        label: 'Description',
        val: (row)=> {
            return row.shortDescription();
        },
    },
];
