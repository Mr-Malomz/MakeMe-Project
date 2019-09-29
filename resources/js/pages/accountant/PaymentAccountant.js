import React, {useState} from 'react';
import styled from 'styled-components';
import SideBar from '../../components/accountant/Sidebar';
import HeaderMain from '../../components/HeaderMain';
import PaymentList from '../../components/accountant/PaymentList';

const PaymentAccountantWrapper = styled.div `
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


            .super-content-main {
                width: 100%;
                margin: 60px 15px 0 15px;
                
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


        }
    }
`;


const PaymentAccountant = () => {
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
        <PaymentAccountantWrapper>
            {inputs.toggleNav && <SideBar />}
            <div className="main-content-side" style={{width: inputs.width ? '80.5%' : '100%'}}>
                <HeaderMain handleToggle={handleToggle} to='/accountant/edit'/>
                <div className="superad-content">
                    <div className="super-content-main">
                        <PaymentList />
                    </div>
                </div>
            </div>
        </PaymentAccountantWrapper>
    )
}

export default PaymentAccountant

