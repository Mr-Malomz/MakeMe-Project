import React, {useState} from 'react';
import styled from 'styled-components';
import SideBar from '../../components/supervisor/SideBar';
import HeaderMain from '../../components/HeaderMain';
import JobTableTitleSV from '../../components/supervisor/JobTableTitleSV';
import TableSV from '../../components/supervisor/TableSV';
import PaginateSV from '../../components/supervisor/PaginateSV';

const MainSupervisWrapper = styled.div `
    width: 100vw;
    height: 100vh;
    display: float;
    position: relative;

    .main-content-side {
        justify-content: center;
        flex-direction: row;
        
        .SuperVsCard{
            width: 85%;
            margin: 40px 20px 20px 20px;
            text-align: center;
            display: flex;
            display: block;
            margin-left: auto;
            margin-right: auto;
            background: rgba(166, 206, 227, 0.2); 
            height: 550px;

            .SuperVs-content {
                display: flex;
                margin: 20px 60px 0 0;
                width: 100%;
               
                

                .supervs-content-main{
                    position: absolute;
                }
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
                <div className="SuperVsCard">
                    <div className="SuperVs-content">
                        <JobTableTitleSV />
                    </div>
                    <br/>
                    <div className="supervs-content-main">
                        
                        <TableSV />

                        <PaginateSV />
                    </div>
                </div>
            </div>

        </MainSupervisWrapper>
    )
}

export default MainSupervis;
