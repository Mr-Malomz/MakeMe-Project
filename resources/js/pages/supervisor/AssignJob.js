import React, {useState} from 'react';
import styled from 'styled-components';
import SideBar from '../../components/supervisor/SideBar';
import HeaderMain from '../../components/HeaderMain';
import AssignJobSV from '../../components/supervisor/AssignJobSV';

const MainSupervisWrapper = styled.div `
    width: 100vw;
    height: 100vh;
    display: float;
    position: relative;

    .main-content-side {
        
        
        .SuperVs-content {
            display: flex;
            margin: 20px 60px 0 0;
            // width: 80%;
            // display: block;
            // margin-top: 20px;
            // margin-left: auto;
            // margin-right: auto;

            .superVS-content-main {
                // margin: 0 15px 0 15px;
                // background: #F5F5F5;
                // height: 734px;
                // box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.25);
                // border-radius: 10px;

            // .supervs-content-main{
                position: absolute;
                width: 80%;
                height: 734px;
                background: #F5F5F5;
                box-shadow: 4px 5px 10px rgba(0, 0, 0, 0.25);
                border-radius: 10px;

             }
        }
    }

    @media (max-width: 700px) {
        .SuperVs-content {
            width: 100%;

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
                <div className="SuperVs-content">
                    <div className="supervs-content-main">
                        <AssignJobSV />
                    </div>
                </div>
            </div>

        </MainSupervisWrapper>
    )
}

export default AssignJob;
