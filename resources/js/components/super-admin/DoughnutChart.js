import React, {useState} from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';

const DoughWrapper = styled.section `
    width: 35%;
    padding: 20px;
    background: #FFFFFF;
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.25);
    height: 320px;

    .dough-change {
        display: flex;
        justify-content: space-between;

        h6 {
            text-transform: capitalize;
            transform: translateY(7px)
        }

        select {
            height: 30px;
            width: 90px;
            border-radius: 5px
        }
    }

    .dough-chart {
        margin: 20px 0;
    }

    canvas {
        width: 100% !important;
        height: 150px !important;
    }

    span {
        margin: auto;
        width: 150px;
        height: 40px;
        border-radius: 10px;
        background: rgba(43,86,128,0.18);
        display: block;
        color: #000000;
        font-size: 20px;
        text-align: center;
        font-weight: bold;
        margin: 10px auto;
        line-height: 45px;
    }

    @media (max-width: 700px) {
        width: 100%;
        margin-bottom: 20px
    }
`;

const DoughnutChart = ({data}) => {
    return (
        <DoughWrapper>
            <div className="dough-change">
                <h6>sales</h6>
                <select name="months" id="">
                    <option value="">Months</option>
                </select>
            </div>
            <div className="dough-chart">
                <Doughnut 
                    data={data} 
                    options={{
                        legend: {display: false},
                        responsive: true,
                        maintainAspectRatio: true
                        }}
                />
            </div>
            <span>&#x20A6; {data.datasets[0].data.reduce((total, initial) => total + initial)}</span>
        </DoughWrapper>
    )
}

export default DoughnutChart
