import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';
import FormUpload from '../../components/FormUpload';
import SupAdSVG2 from '../../assets/svg/SupAdSVG2';

const EditSuperAdminWrap = styled.div `
    overflow-x: hidden;
    width: 100vw;

    .main-content {
        width: 100vw;
        position: relative;

        svg {
            width: 100%;
            transform: translateY(-12px);
            position: relative;
        }
    }

    .responsive-edit {
        width: 100%;
        background: #3B5998;
        height: 120px;
        position: absolute;
        display: none
    }

    .content-section {
        position: absolute;
        width: 40%;
        left: 30vw;
        top: 15%;

        h2 {
            color: #ffffff;
            opacity: 0.8;
            text-transform: capitalize;
            text-align: center;
            margin-bottom: 30px;
        }
    }

    @media (max-width: 1200px) {
        svg {
            transform: translateY(-19px) !important
        }
    }

    @media (max-width: 1000px) {
        svg {
            transform: translateY(-35px) !important
        }

        .content-section {
            width: 90%;
            left: 5vw;
        }
    }

    @media (max-width: 900px) {
        svg {
            transform: translateY(-19px) !important;
            display: none;
        }

        .responsive-edit {
            display: block;
        }
    }
`;

const EditSuperAdmin = () => {
    return (
        <EditSuperAdminWrap>
            <Header to='/superadmin/edit'/>
            <div className="main-content">
                <SupAdSVG2 />
            </div>
            <div className="responsive-edit"></div>
            <div className="content-section">
                <h2>super admin</h2>
                <FormUpload path='/superadmin/' color='#3B5998'/>
            </div>
        </EditSuperAdminWrap>
    )
}

export default EditSuperAdmin
