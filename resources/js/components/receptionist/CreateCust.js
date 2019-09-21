import React from 'react';
import styled from 'styled-components';

const CreateCustWrapper = styled.section `
    width: 45%;

    h5 {
        text-transform: capitalize;
    }
    
    .btn-wrp {
        background: #D7DEE3;
        height: 100px;
        padding: 20px;
        box-shadow: 0 8px 10px rgba(0, 0, 0, 0.25);
        display: flex;
        align-items: center;
        border-radius: 5px;

        button {
            position: relative;
            top: 0;
            width: 100%;
            height: 30px;
            font-size: 12px;
            font-weight: bold;
            text-transform: capitalize;
            color: #ffffff;
            border-radius: 5px;
            z-index: 0;

            :hover {
                transform: scale(1.01)
            }
        }
    }

    @media (max-width: 1000px) {
        width: 95%;
        margin-bottom: 20px;
    }

    @media (max-width: 700px) {
        width: 95%;
        margin-bottom: 20px;
    }
`;

const CreateCust = ({handleModalShow}) => {
    return (
        <CreateCustWrapper>
            <h5>create a job card</h5>
            <div className="btn-wrp">
                <button onClick={handleModalShow}>select user</button>
            </div>
        </CreateCustWrapper>
    )
}

export default CreateCust
