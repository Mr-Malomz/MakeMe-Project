import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.table `
    width: 100%;
    height: auto;
    margin: 0;
    border-collapse: collapse;

    thead {
        background: #E9EEF8;
        
        th {
            text-align: left;
            padding-left: 10px;
            height: 35px;
            opacity: 0.6;
            text-transform: capitalize;
            font-weight: bold;
        }
    }

    tbody {
        tr {
            height: 30px;
            border: 1px solid #E9EEF8;
        }
    }

    td {
        padding-left: 10px
    }

`;

const Table = () => {
    return (
        <TableWrapper>
            <thead>
                <tr>
                    <th>time</th>
                    <th>description</th>
                    <th>percentage</th>
                    <th>commission</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>9:45 am</td>
                    <td>Ghana weaving and crochet</td>
                    <td>5</td>
                    <td>&#x20A6; 100</td>
                </tr>
                <tr>
                    <td>9:45 am</td>
                    <td>Ghana weaving and crochet</td>
                    <td>5</td>
                    <td>&#x20A6; 100</td>
                </tr>
            </tbody>
        </TableWrapper>
    )
}

export default Table
