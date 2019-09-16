import React, {useState} from 'react';
import styled from 'styled-components';
import Table from './Table';
import Pagination from '../Pagination';

const TimeWrapper = styled.section `
    width: 100%;
    height: auto;
    font-size: 14px;

    .timeline-content {
        width: 85%;
        height: 35px;
        padding: 10px 30px 10px 120px;
        position: relative;


        section {
            display: inline;
            float: right;
            transform: translateY(-7.5px);

           > span:nth-child(1) {
                font-weight: bold;
                margin-right: 90px;
                
            }

            > span:nth-child(2) {
                font-weight: bolder;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: #FFFFFF;
                opacity: 0.6;
                display: inline-block;
                text-align: center;
                font-size: 20px;
                padding-top: 3px;
                cursor: pointer;
            }
        }
    }

    .timeline-content:nth-of-type(odd) {
        background: #D9E1E8
    }

    .timeline-content:nth-of-type(even) {
        background: #F5F5F5
    }

    .toggle-timeline-table {
        width: 85%;
        margin: 0
    }

    @media(max-width:900px){
        font-size: 8px;
        
        .timeline-content {
            padding-left: 30px;
        }

        > span:nth-child(1) {
                font-weight: bold;
                margin-right: 30px;
                
            }

        > span:nth-child(2) {
            width: 20px;
            height: 20px;
            font-size: 16px
        }
    }

    @media(max-width:700px){
        .timeline-content {
            width: 100%;
        }

        .toggle-timeline-table {
            width: 100%;
        }
    }
`;

const Timeline = () => {
    const [showtable, setShowTable] = useState(false);

    const handleToggle = () => setShowTable(!showtable);

    return (
        <TimeWrapper>
            <div className="timeline-content">
                <span>01-Sep-2019</span>
                <section>
                    <span>&#x20A6; 100,000</span>
                    <span className="toggle-btn-time" onClick={handleToggle}>{showtable ? '-' : '+'}</span>
                </section>
            </div>
            <div className="toggle-timeline-table">
                {showtable && <Table />}
                
            </div>
            <Pagination />
        </TimeWrapper>
    )
}

export default Timeline
