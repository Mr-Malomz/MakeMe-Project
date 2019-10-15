import React from 'react';
import styled from 'styled-components';

const Error = styled.small`
    color: green;
    text-align: center;
    display: block;
`

const MessageField = ({msg}) => {
    return (
        <Error>{msg}</Error>
    )
};

export default MessageField;