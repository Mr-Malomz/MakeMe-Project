import React from 'react';
import styled from 'styled-components';

const NotWrapper = styled.section `
    width: 200px;
    min-height: 215px;
    height: auto;
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.25);
    border-radius: 0 0 10px 10px;
    padding-bottom: 20px;  

    .not-header {
        background: #E9EEF8;
        width: 100%;
        height: 33px;
        text-align: center;
        text-transform: capitalize;
        font-size: small;
        line-height: 30px
    }

    .msg-wrapper {
        margin: 20px;
        border: 1px solid #E5E5E5;
        height: auto;

        > header {
            background: #E5E5E5;
            width: 100%;
            height: 35px;
            /* line-height: 25px; */
            padding-left: 10px;
            text-transform: capitalize;

            h6 {
                margin: 0;
                padding: 0
            }

            span {
                font-size: 10px;
            }
        }

        > span {
            font-size: 10px;
            padding: 10px;
            display: block;
        }
    }

    @media(max-width:700px) {
        display: none;
    }
`;

const Notifications = () => {
    return (
        <NotWrapper>
            <header className="not-header">
                <h4>notifications</h4>
            </header>
            <div className="msg-wrapper">
                <header>
                    <h6>admin</h6>
                    <span>20-Sept-2019</span>
                </header>
                <span>
                    We have a meeting at the end of the month
                </span>
            </div>
        </NotWrapper>
    )
}

export default Notifications
