import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import WorkerSVG from '../../assets/svg/WorkerSVG';
import pic1 from '../../assets/img/pic1.jpg';
import Notifications from '../../components/Notifications';
import Timeline from '../../components/workers/Timeline';

const WorkersWrapper = styled.div `

    .mid-header-cont {

        svg {
            height: 5% !important;
            width: 100vw;
            position: relative;
        }

        .responsive {
            width: 100vw;
            background: #2B5680;
            height: 140px;
            position: relative;
            display: none;
        }

        .mid-header-main {
            position: absolute;
            top: 75px;
            left: 150px;
            width: 83.5%;

            .mid-header-main-img {
                display: flex;

                img {
                    width: 130px;
                    height: 130px;
                    border-radius: 50%;
                }
                
                section {
                    margin: 10px 0 0 20px;

                    h3, p {
                        color: #ffffff;
                        margin-bottom: 13px;
                    }

                    h3, .main-child {
                        text-transform: capitalize
                    }

                    p {
                        font-size: 14px;
                    }
                }
            }

            .amount {
                width: 200px;
                height: 100px;
                background: #ffffff;
                float: right;
                bottom: 120px;
                position: relative;
                text-align: center;
                padding: 10px;
                border-radius: 10px;
                box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.25), 0px 12px 20px rgba(0, 0, 0, 0.25);

                h5 {
                    text-transform: capitalize;
                    font-weight: bold;
                    opacity: 0.7;
                }

                span {
                    width: 150px;
                    height: 50px;
                    border-radius: 10px;
                    background: rgba(43, 86, 128, 0.18);
                    display: block;
                    color: #000000;
                    font-size: 20px;
                    text-align: center;
                    font-weight: bold;
                    margin: 10px auto;
                    line-height: 50px;
                }
            }

        }
    }

    h3.header-title {
        text-align: center;
        margin: 20px 0 20px 0;
        opacity: 0.8;
        text-transform: capitalize;
    }

    h3.header-timeline {
        opacity: 0.8;
        text-transform: capitalize;
        margin-left: 60px
    }

    @media(max-width:900px) { 
        svg {
            display: none;
        }

        .responsive {
            display: block !important;
        }

        .mid-header-main {
            left: 30px !important;
            width: 83.5% !important; 
            font-size: 10px;

            img {
                width: 110px !important;
                height: 110px !important;
            }

           
        }

         p {
            font-size: 8px;
         }

        .amount {
            transform: scale(0.7);
            left: 65px;
        }
    }

    @media (max-width:370px) {
        .mid-header-main {
            transform: scale(0.7);
        }
    }
`;

const WorkersContent = styled.div `
    margin: 0 60px 30px 60px;
    display: flex;
    margin-top: 20px;
`;

const MainWorkers = () => {
    return (
        <WorkersWrapper>
            <Header />
            <div className="mid-header-cont">
                <WorkerSVG />
                <div className="responsive"></div>
                <div className="mid-header-main">
                    <div className="mid-header-main-img">
                        <img src={pic1} alt="profile picture" />
                        <section>
                            <h3>chinenye agungi</h3>
                            <p className="main-child">nail technician</p>
                            <p>08050676783</p>
                            <p>chinenye.agu@makeme.com</p>
                        </section>
                    </div>
                    <section className="amount">
                        <h5>monthly total</h5>
                        <span>	&#x20A6; 100,000</span>
                    </section>
                </div>
            </div>
            <h3 className="header-title">work breakdown</h3>
            <h3 className="header-timeline">job timeline</h3>
            <WorkersContent>
                <Timeline />
                <Notifications />
            </WorkersContent>
        </WorkersWrapper>
    )
}

export default MainWorkers
