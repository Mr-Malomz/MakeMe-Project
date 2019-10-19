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
    
    .nav-height{
        height: 115%;
    }

    .main-content-side {
        
        .SuperVsCard{
            width: 90%;
            display: block;
            margin-top: 40px;
            margin-left: auto;
            margin-right: auto;
            padding: 20px;
            background: rgba(166, 206, 227, 0.2); 

            .SuperVs-content-title {
                display: flex;
                // margin-top: 20px 60px 0 0;
                margin-top: 1px auto;
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
                <HeaderMain handleToggle={handleToggle} to='/supervisor/editprofile' />
                <div className="SuperVsCard">
                    <div className="SuperVs-content-title">
                        <JobTableTitleSV />
                    </div>
                    <br/>
                    <div className="supervs-content-main">
                        
                        <TableSV />
                    <div className="paginate-position">
                        <PaginateSV />
                    </div>
                    </div>
                </div>
            </div>

        </MainSupervisWrapper>
    )
}

export default MainSupervis;
