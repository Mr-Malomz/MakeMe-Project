import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2';

const BarWrapper = styled.section`
    width: 60%;
    padding: 20px;
    background: #FFFFFF;
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.25);
    height: 320px;

    @media (max-width: 700px) {
        width: 100%;
        height: 250px;
    }
`;

const BarChart = ({data}) => {
    return (
        <BarWrapper>
            <Bar data={data} />
        </BarWrapper>
    )
}

export default BarChart
