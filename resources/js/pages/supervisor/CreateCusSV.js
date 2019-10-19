import React, {useState} from 'react';
import styled from 'styled-components';
import SideBar from '../../components/supervisor/SideBar';
import HeaderMain from '../../components/HeaderMain';
import CreateCstRecepForm from '../../components/receptionist/CreateCstRecepForm';


const MainSuperVSWrapper = styled.div `
    width: 100vw;
    height: 100vh;
    display: float;
    position: relative;

    .nav-hgt {
        height: 125%
    }

    .main-content-side {
        
        
        .superVS-content {
            width: 80%;
            display: block;
            margin-top: 20px;
            margin-left: auto;
            margin-right: auto;

            .superVS-content-main {
                margin: 0 15px 0 15px;

                .component-section {
                    display: flex;
                    justify-content: space-around
                }
            }

        }
    }

    @media (max-width: 1000px) {
        .component-section {
            flex-direction: column;
        }

        .nav-hgt {
            height: 140%
        }
    }

    @media (max-width: 700px) {

        .nav-hgt {
            height: 180%
        }
        .superVS-content {
            width: 100%;

            .superVS-content-main {
                width: 100% !important;

                .component-section {
                    flex-direction: column;
                }
            }

        }
    }
`;


const CreateCusSV = () => {
    const [data, setData] = useState({
        width: true,
        toggleNav: true,
        modalShow: false
    });

    const handleToggle = () => {
        setData({
            width: !data.width,
            toggleNav: !data.toggleNav
        })
    }



    return (
        <MainSuperVSWrapper>
            {data.toggleNav && <SideBar />}
            <div className="main-content-side" style={{width: data.width ? '80.5%' : '100%'}}>
                <HeaderMain handleToggle={handleToggle} to='/supervisor/editprofile' />
                <div className="superVS-content">
                    <div className="superVS-content-main">
                        <div className="component-section">
                            <CreateCstRecepForm />
                        </div>
                    </div>
                </div>
            </div>
        </MainSuperVSWrapper>
    )
}

export default CreateCusSV;

