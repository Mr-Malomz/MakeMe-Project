import React, {useState} from 'react';
import styled from 'styled-components';
import SideBar from '../../components/supervisor/SideBar';
import HeaderMain from '../../components/HeaderMain';
import AssignJobInput from '../../components/supervisor/AssignJobInput'; 


const MainSupervisWrapper = styled.div `
    width: 100vw;
    height: 100vh;
    display: float;
    position: relative;

    .main-content-side {
        
        
        .superVs-content {
            width: 80%;
            display: block;
            margin: 30px auto 30px auto;


            .superVs-content-main {
                width: 100%;
                background: #F5F5F5;
                padding: 0 0 55px 0;
                box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.25);
                border-radius: 10px;

                .header-bg{
                    width: 100%;
                    height: 60px;
                    background: #FFFFFF;
                    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
                    border-radius: 10px 10px 0px 0px;
            
                    .header-title{
                        display: flex;
                        position: absolute;
                        margin: 15px 0 0 35px;
                        font-style: normal;
                        font-weight: 600;
                        font-size: 20px;
                        color: rgba(0, 0, 0, 0.6); 
                    }
                }

             }

             
        }
    }

    @media (max-width: 700px) {
        .superVs-content {
            width: 95%;

        }
    }
`;

const AssignJob = () => {
    const [data, setData] = useState({
        width: true,
        toggleNav: true,
    });

    const handleToggle = () => {
        setData({
            width: !data.width,
            toggleNav: !data.toggleNav
        })
    };

    return (
        <MainSupervisWrapper>
            {data.toggleNav && <SideBar />}
            <div className="main-content-side" style={{width: data.width ? '80.5%' : '100%'}}>
                <HeaderMain handleToggle={handleToggle} to='/supervisor/editprofile' />
                <div className="superVs-content">
                    <div className="superVs-content-main">
                        <div className="header-bg">
                            <h5 className="header-title">Assign Employee(s) to Job Card</h5>
                        </div>
                        <AssignJobInput />
                    </div>
                </div>
            </div>

        </MainSupervisWrapper>
    )
}

export default AssignJob;