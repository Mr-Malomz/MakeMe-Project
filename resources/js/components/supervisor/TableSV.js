import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const TableStyle = styled.section `


`;

const TableSV = () => {
    return (
        <TableStyle>
            <div className="table-wrapper">

                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Descripton</th>
                            <th>Customer's Name</th>
                            <th>Price</th>
                            <th>CREATED ON</th>
                            <th></th>
                            <th>COMPLETED</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>washing and Setting</td>
                            <td>Ademola Motunrayo</td>
                            <td>&#x20A6;50,000</td>
                            <td>25-Sep-2017</td>
                            <td><Link>Assign</Link><Link>Edit</Link></td>
                            <td><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Fixing</td>
                            <td>Chinenye Agungi</td>
                            <td>&#x20A6;10,000</td>
                            <td>2-Dec-2018</td>
                            <td><Link>Assign</Link><Link>Edit</Link></td>
                            <td><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Braids</td>
                            <td>Chiamaka Nnamdi</td>
                            <td>&#x20A6;4,000</td>
                            <td>26-Feb-2017</td>
                            <td><Link>Assign</Link><Link>Edit</Link></td>
                            <td><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Wig Making</td>
                            <td>Rebecca Nnammadi</td>
                            <td>&#x20A6;4,000</td>
                            <td>26-Feb-2019</td>
                            <td><Link>Assign</Link><Link>Edit</Link></td>
                            <td><input type="checkbox" value="checked"/></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Pedicure and Manicure</td>
                            <td>Ruth Joshua</td>
                            <td>&#x20A6;4,000</td>
                            <td>29-Dec-2019</td>
                            <td><Link>Assign</Link><Link>Edit</Link></td>
                            <td><input type="checkbox" value="checked"/></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Contact Lense</td>
                            <td>Esther Frodd</td>
                            <td>&#x20A6;4,000</td>
                            <td>29-Dec-2019</td>
                            <td><Link>Assign</Link><Link>Edit</Link></td>
                            <td><input type="checkbox"/></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Make Up</td>
                            <td>Kafilat Ogunbaide</td>
                            <td>&#x20A6;4,000</td>
                            <td>29-Dec-2019</td>
                            <td><Link>Assign</Link><Link>Edit</Link></td>
                            <td><input type="checkbox"/></td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </TableStyle>

    )
}

export default TableSV