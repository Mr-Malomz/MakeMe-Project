import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button `
    position: relative;
    width: 120px;
    height: 38px;
    font-size: 14px;
    color: #ffffff;
    text-transform: capitalize;
    border-radius: 7px;
    font-weight: bold;

    :hover {
        transform: scale(1.08)
    }
`;

const Button = ({children, ...otherProps}) => {
    return (
        <CustomButton {...otherProps}>
            {children}
        </CustomButton>
    )
}

export default Button
