import React, {useState} from 'react';
import styled from 'styled-components';
import SideBar from '../../components/super-admin/SideBar';
import HeaderMain from '../../components/HeaderMain';
import EmployeeList from '../../components/super-admin/EmployeeList';

const EmployeeSuperAdminWrapper = styled.div `
    width: 100vw;
    height: 100vh;
    display: float;
    position: relative;

    .nav-hgt {
        height: 145%;
    }

    .main-content-side {
        
        
        .superad-content {
            margin: 20px 60px 0 0;

            .title {
                color: #ffffff;
                background: rgba(43, 86, 128, 0.8);
                padding: 5px 30px 10px 30px;
                border-radius: 0 5px 5px 0;
                text-transform: capitalize;
                font-weight: bold;
                margin: 20px 0;
                display: inline-block;
                
                i {
                    transform: translateY(5px);
                    margin-right: 5px;
                }
            }

            .super-content-main {
                width: 100%;
                margin: 15px 15px 0 15px;
                
            }
        }
    }

    @media (max-width: 1000px) {
        .component-section {
            flex-direction: column;
        }
    }

    @media (max-width: 700px) {

        .nav-hgt {
            height: 176%;
        }
        .superad-content {
            width: 100%;

            .super-content-main {
                width: 100% !important;

                .component-section {
                    flex-direction: column;
                }
            }

            .title {
                font-size: 12px
            }

        }
    }
`;


const EmployeeSuperAdmin = () => {
    const [inputs, setInputs] = useState({
        width: true,
        toggleNav: true,
        
    });

    const handleToggle = () => {
        setInputs({
            width: !inputs.width,
            toggleNav: !inputs.toggleNav
        })
    }

    return (
        <EmployeeSuperAdminWrapper>
            {inputs.toggleNav && <SideBar />}
            <div className="main-content-side" style={{width: inputs.width ? '80.5%' : '100%'}}>
                <HeaderMain handleToggle={handleToggle} to='/superadmin/edit'/>
                <div className="superad-content">
                    <span className="title"><i className="material-icons">group</i>  employees</span>
                    <div className="super-content-main">
                        <EmployeeList />
                    </div>
                </div>
            </div>
        </EmployeeSuperAdminWrapper>
    )
}

export default EmployeeSuperAdmin

