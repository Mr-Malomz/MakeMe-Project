import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const TableStyle = styled.table`
    border-collapse: separate;
    width: 100%;
    border-spacing: 0 10px;

            th,td{
                text-align: left;
                padding: 0 0 0 25px;
                height: 55px;
            }
            th{
                font-family: Montserrat;
                font-style: normal;
                font-weight: bold;
                font-size: 12px;
                color: rgba(0, 0, 0, 0.5);
            }
            td{
                font-family: Montserrat;
                font-style: normal;
                font-weight: 500;
                font-size: 12px;
                background: white;
            }
                tr>td>a{
                    color: #3B5998;
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 12px;
                    text-decoration: none;
            }

                td:nth-child(8){
                    text-align: center;
                    padding-right: 25px!important;
            }

            td:nth-child(1){
                border-radius: 5px 0 0 5px; 
        }
        td:nth-child(8){
            border-radius: 0 5px 5px 0; 
        }

`;

const TableSV = () => {
    const [data, setData] = useState({
        price: '',
        isAssign: 'Assigned',
        isChecked: false
    })

    const handleCheck = e => {
        setData({
            ...data,
            isChecked: !data.isChecked
        })
    }

    return (
        <TableStyle>
      
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Service ID</th>
                            <th>Customer's Name</th>
                            <th>Price</th>
                            <th>CREATED ON</th>
                            <th></th>
                            <th></th>
                            <th>COMPLETED</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>120014</td>
                            <td>Ademola Motunrayo</td>
                            <td>&#x20A6;50,000</td>
                            <td>25-Sep-2017</td>
                            <td><Link to="/supervisor/assignjob/">{data.isAssign ? 'Assign' : 'Assigned'}</Link></td>
                            <td><Link to="/supervisor/editjob/">Edit</Link></td>
                            <td><input type="checkbox" name="complete" checked={data.isChecked} onChange={handleCheck} /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>120013</td>
                            <td>Chinenye Agungi</td>
                            <td>&#x20A6;10,000</td>
                            <td>2-Dec-2018</td>
                            <td><Link to="/supervisor/assignjob/">{data.isAssign ? 'Assign' : 'Assigned'}</Link></td>
                            <td><Link to="/supervisor/editjob/">Edit</Link></td>
                            <td><input type="checkbox" name="complete" /></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>120012</td>
                            <td>Chiamaka Nnamdi</td>
                            <td>&#x20A6;4,000</td>
                            <td>26-Feb-2017</td>
                            <td><Link to="/supervisor/assignjob/">{data.isAssign ? 'Assign' : 'Assigned'}</Link></td>
                            <td><Link to="/supervisor/editjob/">Edit</Link></td>
                            <td><input type="checkbox" name="complete" /></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>120011</td>
                            <td>Rebecca Nnammadi</td>
                            <td>&#x20A6;4,000</td>
                            <td>26-Feb-2019</td>
                            <td><Link to="/supervisor/assignjob/">{data.isAssign ? 'Assign' : 'Assigned'}</Link></td>
                            <td><Link to="/supervisor/editjob/">Edit</Link></td>
                            <td><input type="checkbox" name="complete" /></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>120010</td>
                            <td>Ruth Joshua</td>
                            <td>&#x20A6;4,000</td>
                            <td>29-Dec-2019</td>
                            <td><Link to="/supervisor/assignjob/">{data.isAssign ? 'Assign' : 'Assigned'}</Link></td>
                            <td><Link to="/supervisor/editjob/">Edit</Link></td>
                            <td><input type="checkbox" name="complete" /></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>12009</td>
                            <td>Esther Frodd</td>
                            <td>&#x20A6;4,000</td>
                            <td>29-Dec-2019</td>
                            <td><Link to="/supervisor/assignjob/">{data.isAssign ? 'Assign' : 'Assigned'}</Link></td>
                            <td><Link to="/supervisor/editjob/">Edit</Link></td>
                            <td><input type="checkbox" name="complete" /></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>12008</td>
                            <td>Kafilat Ogunbaide</td>
                            <td>&#x20A6;4,000</td>
                            <td>29-Dec-2019</td>
                            <td><Link to="/supervisor/assignjob/">{data.isAssign ? 'Assign' : 'Assigned'}</Link></td>
                            <td><Link to="/supervisor/editjob/">Edit</Link></td>
                            <td><input type="checkbox" name="complete" /></td>
                        </tr>
                    </tbody>

        </TableStyle>

    )
}

export default TableSV;