import React from 'react';
import MaterialTable from 'material-table';
import { forwardRef } from 'react';
import { ArrowDownward, ChevronLeft, ChevronRight, Clear, FirstPage, LastPage, Search } from '@material-ui/icons';
import data from '../../data';
/**
 * Configure Table icons
 */
const tableIcons = {
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
};


function Table() {
    return (
        <MaterialTable
            icons={tableIcons}
            columns={[
                { title: 'City', field: 'city', align: "left", headerStyle: { fontWeight: 'bold' } },
                { title: 'Impressions', field: 'audio_impression', type: 'numeric', headerStyle: { fontWeight: 'bold' } },
                { title: 'Clicks', field: 'clicks', type: 'numeric', headerStyle: { fontWeight: 'bold' } },
            ]}
            data={data[0].locations}
            options={{
                padding: "dense",
                showTitle: false,
                paginationType: "stepped",
                sorting: true,
                search: true
            }}
        />
    )
}

export default Table;
