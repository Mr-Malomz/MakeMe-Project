import React from 'react';
import styled from 'styled-components';

const JobTableWrapper = styled.section `
    width: 90%;
    margin: 30px auto;

    h4 {
        text-align: center;
        text-transform: capitalize;
        opacity: 0.8;
        color: #000000;
        margin-bottom: 15px
    }

    table {
        width: 100%;
        /* min-height: 150px; */
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
    }

    @media (max-width: 700px) {
        font-size: 12px;
    }
`;

const JobTable = () => {
    return (
        <JobTableWrapper>
            <h4>job completion board</h4>
            <table>
                <thead>
                    <tr>
                        <th>rating</th>
                        <th>firstname</th>
                        <th>lastname</th>
                        <th>jobs completed</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Sadiat</td>
                        <td>Olounlayo</td>
                        <td>34</td>
                    </tr>
                </tbody>
            </table>
        </JobTableWrapper>
    )
}

export default JobTable
