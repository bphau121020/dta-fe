import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { mockData } from "../../../constant"
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const columns = [
    { field: 'id', headerName: 'id', width: 50, headerAlign: 'left', },
    { field: 'comment', headerName: 'comment', minidth: 480, headerAlign: 'center', renderCell: (params) => <ExpandableCell {...params} />, flex: 1 },
];

export const DataTable = (props) => {
    const { rows } = props;

    return (
        rows && <div style={{ height: 650, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[10]}
                disableSelectAllCheckbox
                getRowHeight={() => 'auto'}
                getEstimatedRowHeight={() => 200}
                components={{ Toolbar: GridToolbar }}
                sx={{
                    fontSize: '14px',
                    "& .MuiDataGrid-row:hover": {
                        backgroundColor: "#e8f0fe"
                    },
                    '&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell': {
                        py: 1,
                    },
                    '&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell': {
                        py: '15px',
                    },
                    '&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell': {
                        py: '22px',
                    },
                }}
            />
        </div>
    );
}
export default DataTable;
const ExpandableCell = ({ value }) => {
    const [expanded, setExpanded] = React.useState(false);

    return (
        <Box>
            {expanded ? value : value.slice(0, 200)}&nbsp;
            {value.length > 200 && (
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <Link
                    type="button"
                    component="button"
                    sx={{ fontSize: 'inherit' }}
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? 'view less' : 'view more'}
                </Link>
            )}
        </Box>
    );
};

ExpandableCell.propTypes = {
    /**
     * The cell value.
     * If the column has `valueGetter`, use `params.row` to directly access the fields.
     */
    value: PropTypes.any,
};
