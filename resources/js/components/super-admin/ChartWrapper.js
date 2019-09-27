import React, {useState} from 'react';
import styled from 'styled-components';
import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart';

const ChartContWrapper = styled.section `
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

const ChartWrapper = () => {
    const [state, setState] = useState({
        chart: {
            datasets: [{
                data: [40, 50, 60, 37],
                backgroundColor: '#A6CEE3',
                label: 'Sales'
            }],
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        }
    });

    return (
        <ChartContWrapper>
            <DoughnutChart data={state.chart}/>
            <BarChart data={state.chart}/>
        </ChartContWrapper>
    )
}

export default ChartWrapper
