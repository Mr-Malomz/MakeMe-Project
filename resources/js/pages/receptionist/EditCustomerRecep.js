import React, {useState} from 'react';
import styled from 'styled-components';
import SideBar from '../../components/receptionist/SideBar';
import HeaderMain from '../../components/HeaderMain';
import Notifications from '../../components/Notifications';
import FormSearch from '../../components/receptionist/FormSearch';
import EditCstRecepForm from '../../components/receptionist/EditCstRecepForm';

const MainRecepWrapper = styled.div `
    width: 100vw;
    height: 100vh;
    display: float;
    position: relative;

    .nav-hgt {
        height: 125%
    }

    .main-content-side {
        
        
        .recept-content {
            display: flex;
            margin: 20px 60px 0 0;

            .recep-content-main {
                width: 80%;
                margin: 0 15px 0 15px;

                .search-fd {
                    width: 70%;
                   
                }

                hr{
                    margin: 10px 0 10px 0;
                    border: 0.3px solid #FFDF00
                }

                .component-section {
                    display: flex;
                    justify-content: space-around
                }
            }

            .notification {
                float: right;
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
        .recept-content {
            width: 100%;

            .recep-content-main {
                width: 100% !important;

                .component-section {
                    flex-direction: column;
                }
            }

        }
    }
`;


const EditCustomerRecep = () => {
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
        <MainRecepWrapper>
            {data.toggleNav && <SideBar />}
            <div className="main-content-side" style={{width: data.width ? '80.5%' : '100%'}}>
                <HeaderMain handleToggle={handleToggle} to='/reception/edit'/>
                <div className="recept-content">
                    <div className="recep-content-main">
                        <div className="search-fd">
                            <FormSearch />
                        </div>
                        <hr/>
                        <div className="component-section">
                            <EditCstRecepForm />
                        </div>
                    </div>
                    <div className="notification">
                        <Notifications />
                    </div>
                </div>
            </div>
        </MainRecepWrapper>
    )
}

export default EditCustomerRecep
