import React, {useState} from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput'; 
import Button from '../Button'; 
import {Link} from 'react-router-dom';
import JobCardSVG1 from '../../assets/svg/JobCardSVG1';
import JobCardSVG2 from '../../assets/svg/JobCardSVG2';

const SupervisJobCard = styled.div `
    width: 100%;
    position: relative;

        .mainCard{
            position: absolute;
            width: 100%;
            margin: 20px auto 0 auto;
            box-shadow: 0px 12px 20px rgba(43, 86, 128, 0.25);

            .card-title{
                font-family: Montserrat;
                font-style: normal;
                font-weight: 300;
                font-size: 36px;
                line-height: 44px;
                color: #000000;
                text-align: center;
            }
            .content-paddn{
                margin: 25px 0 0 0;
                padding: 0 20px 0 20px;
            
                .cusName,.groupName, .Service{
                    font-family: Montserrat;
                    font-style: normal;
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 15px;
                    color: rgba(0, 0, 0, 0.7);
                }
              
                .xs{
                    background: #F5F5F5;
                    margin-bottom: -20px;
                }
                    table{
                        border-collapse: separate;
                        width: 100%;
                        border-spacing: 0 10px;
                        padding: 0 0 35px 0;
                        //background: #F5F5F5;
                    }

                    thead>tr>th:nth-child(1){
                        width 100%;
                        height: 35px
                        background: #E9EEF8;
                        font-family: Montserrat;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 12px;
                        color: rgba(0, 0, 0, 0.6);
                        padding: 0 0 0 15px;
                        text-align: left;
                    }
                    thead>tr>th:nth-child(2){
                        width 100%;
                        height: 35px
                        background: #E9EEF8;
                        font-family: Montserrat;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 12px;
                        color: rgba(0, 0, 0, 0.6);
                        margin: 0 100px 0 0;
                        padding: 0 20px 0 3px;
                    }
                        tr>td{
                            font-family: Montserrat;
                            font-style: normal;
                            font-weight: normal;
                            height: 35px;
                            font-size: 12px;
                            color: #000000;
                            background: rgba(217, 225, 232, 0.6);
                        }
                        tr>td:nth-child(1){
                            margin: 0 0 0 12px;
                        padding: 0 0 0 15px;
                        }
                        
                        tr>td:nth-child(2){
                            margin: 0 100px 0 0px;
                        }
                        // tr>td>input[type=checkbox]{
                        //     border: 1px solid black;
                        //     background-color: white;
                        // }

                    
                        .tableFoot{
                            width 100%;
                            height: 35px
                            font-family: Montserrat;
                            font-style: normal;
                            font-weight: 700;
                            font-size: 13px;
                            color: rgba(0, 0, 0, 0.6);
                            text-align: left;

                        }
                        .tableFoot>th:nth-child(1){
                            margin: 15px 0 0 0;
                            padding: 15px 0 0 15px;
                        }
                        .tableFoot>th:nth-child(2){
                            margin: 15px 0 0 0;
                            padding: 15px 0 0 1px;
                        }
                    input{
                        background: #FFFFFF;
                        border: 1px solid #363636;
                        box-sizing: border-box;
                    }

                    .link-align{
                        width: 100%;
                        margin: 30px 0 0 0;
                    }
                    a.link-style{
                        position: absolute;
                        text-decoration: none;
                        font-weight: bolder;
                        margin: 20px 0 0 30px;
                        width: 120px;
                        height: 38px;
                        font-size: 14px;
                        color: #3B5998; 
                        text-transform: capitalize;
                        border-radius: 7px;
                        border: 2px solid #3B5998; 
                        text-align: center;
                        padding: 8px 20px 10px 20px;
                        box-sizing: border-box;

                    :hover {
                        transform: scale(1.08)
                    }
                }
            }
            .svgWidth{
                width: 100%;
            }

        }
`;

const EditJobCardSV = () => {
    const [customerName, setName] = useState('');
    const [Group, setGroup] = useState('');


    const handleChange = e => {
        setName(e.target.value)
    };

    
      const groupList= [
        { id: 1, name: 'Select Customer Group' },
        { id: 2, name: 'VIP Client' },
        { id: 3, name: 'Exclusive Member' },
        { id: 4, name: 'Exclusive Partner' },
        { id: 5, name: 'Sub Dealer' },
      ];


    // const handleChange2 = e => {
    //     setGroup(e.target.value)
    // };

    return (
        <SupervisJobCard>
            <div className="mainCard">
                <JobCardSVG1 />
                <h3 className="card-title">Edit Job Card</h3>
                <div className="content-paddn">
                    <form action="">
                        <div className="cusName">Customer's Name *</div>
                            <FormInput 
                                type="text"
                                value={customerName}
                                name="customNam"
                                placeholder="Enter Customer's Name"
                                required
                                style={{
                                    margin: '5px 0 5px 0',
                                    width: '100%', 
                                    height: '35px',
                                    background: '#FFFFFF',
                                    border: '1px solid #3B5998',
                                    color: '#4C5A76',
                                    boxSizing: 'border-box'
                                }}
                                handleChange={handleChange}
                            />

                        <div className="groupName">Group</div>
                        <select
                            name="SelectGroup"
                            value={Group}
                            style={{
                                margin: '5px 0 5px 0',
                                width: '100%', 
                                height: '35px',
                                background: '#FFFFFF',
                                border: '1px solid #3B5998',
                                boxSizing: 'border-box',
                                color: '#4C5A76'
                            }}
                            required
                            onChange={e => setGroup(Number(e.target.value))}
                            >
                            {groupList.map(group => (
                            <option key={group.id} value={group.id}>
                                {group.name}
                            </option>
                            ))}
                        </select>

                        <div className="Service">Services</div>
                        <div className="xs">
                            <table>
                                <thead className="tableHead">
                                    <tr>
                                        <th>Available Services</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input type="checkbox" /> Ghana weaving and crochet</td>
                                        <td>&#x20A6;100</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /> Manicure and Pedicure</td>
                                        <td>&#x20A6;100</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /> Weavon</td>
                                        <td>&#x20A6;100</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /> Brazilian Wig</td>
                                        <td>&#x20A6;100</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /> Braids and Setting</td>
                                        <td>&#x20A6;100</td>
                                    </tr>
                                    <tr>
                                        <td><input type="checkbox" /> Attachment and Washing</td>
                                        <td>&#x20A6;100</td>
                                    </tr>
                                </tbody>
                                    <tr className="tableFoot">
                                        <th>Total</th>
                                        <th>&#x20A6; </th>
                                    </tr>
                            </table>
                        </div>
                        <div className="link-align">
                        
                            <Button style={{backgroundColor: '#3B5998', margin: '20px 0 0 0'}}>create</Button>
                            <Link to="/Supervisor/" className="link-style">Cancel</Link>
                        </div>
                    </form>
                </div>
                <div className="svgWidth">
                    <JobCardSVG2 style={{width: '100%', transform: 'translateY(9.2px)'}}/>
                </div>
            </div>

        </SupervisJobCard>
    )
}

export default EditJobCardSV;