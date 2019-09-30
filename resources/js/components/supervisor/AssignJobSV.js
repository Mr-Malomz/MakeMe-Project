import React, {useState} from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput';

const CardWrapper = styled.form `
   .header-bg{
        position: absolute; 
        width: 934px;
        height: 60px;
        background: #FFFFFF;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
        border-radius: 10px 10px 0px 0px;

        .header-title{
            margin: 15px 0 0 35px;
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            color: rgba(0, 0, 0, 0.6); 
        }
    }
`

const AssignJobSV = () => {


    return (
        <CardWrapper>
            <div className="header-bg">
                <h5 className="header-title">Assign Employee(s) to Job Card</h5>
           </div>
        
        </CardWrapper>
    )
}

export default AssignJobSV;
