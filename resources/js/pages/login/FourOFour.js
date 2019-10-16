import React from 'react';
import styled from 'styled-components';
import FourOFourSVG from '../../assets/svg/FourOFourSVG';
import {Link} from 'react-router-dom';


const FourOFourWrapper = styled.div`
    background: #F5F5F5;
    width: 100%;
    height: fit-content;

    .info-center{
        width: 100%;
        text-align: center;
        margin-bottom: 40px;

        h2{
            opacity: 0.6;
            padding-top: 3rem;
            margin-bottom: 30px;
        }
        a{
            text-decoration: none;
            background: #3B5998;
            color: white;
            padding: 5px 25px 5px 25px;
            border-radius: 7px;
        }
    }
    @media (max-width: 1024px) {
        height: 100vh;
    }
`;

export default function FourOFour() {
    return (
        <FourOFourWrapper>
            <div className="info-center">
                <h2>Page doesn't exist</h2>
                <Link to="/">Go Back</Link>
            </div>
            <div className="svg-container">
                <FourOFourSVG />
            </div>
        </FourOFourWrapper>
    )
}
