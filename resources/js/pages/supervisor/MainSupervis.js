import React, {useState} from 'react';
import styled from 'styled-components';
import SideBar from '../../components/supervisor/SideBar';
import HeaderMain from '../../components/HeaderMain';
import JobTableSV from '../../components/supervisor/JobTableSV';

const MainSupervisWrapper = styled.div `
width: 100vw;
    height: 100vh;
    display: float;
    position: relative;

    SideBar{overflow: none;}

    .main-content-side {
        
        
        .SuperVs-content {
            display: flex;
            margin: 20px 60px 0 0;

            .supervs-content-main{
                position: absolute;
                width: 998px;
                height: 799px;
                left: 346px;
                top: 148px;
                background: rgba(166, 206, 227, 0.2);

            }
        }
    }

    @media (max-width: 700px) {
        .SuperVs-content {
            width: 100%;

        }
    }
`;

const MainSupervis = () => {
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
                <HeaderMain handleToggle={handleToggle}/>
                <div className="SuperVs-content">
                    <div className="supervs-content-main">
                        <JobTableSV />
                    </div>
                </div>
            </div>

        </MainSupervisWrapper>
    )
}

export default MainSupervis;
