import React, {useState} from 'react';
import styled from 'styled-components';
import SideBar from '../../components/supervisor/SideBar'; 
import HeaderMain from '../../components/HeaderMain';
import JobCardSV from '../../components/supervisor/JobCardSV';


const MainSupervisWrapper = styled.div `
width: 100vw;
    height: 100vh;
    display: float;
    position: relative;

    .main-content-side {
        
        
    .SuperVs-content {
        width: 35%;
        display: block;
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;

            .superVs-content-main{
                width: 100%;
            }

        }
    }

    @media (max-width: 700px) {
        .SuperVs-content {
            width: 90%;

        }
    }
`;

const CreateJobSV = () => {
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
                    <div className="superVs-content-main">
                        <JobCardSV />
                    </div>
                </div>

            </div>
            
        </MainSupervisWrapper>
    )
}

export default CreateJobSV;
