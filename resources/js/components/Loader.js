import React from 'react'
import { RiseLoader } from "react-spinners";
import { css } from "@emotion/core";
import styled from "styled-components";

const style = css`
    display: block;
    margin: auto auto;
    border-color: red;
`;

const LoaderContainer = styled.section`
    position: absolute;
    right: 40%;
    top: 50%;
    z-index: 20;

    @media(max-width: 450px) {
        right: 25%
    }

`;

const Loader = ({loading}) => {
    return (
        <LoaderContainer>
            <RiseLoader
            css={style}
            sizeUnit={"px"}
            size={40}
            color={'#3B5998'}
            loading={loading}
            />
        </LoaderContainer>
    )
}

export default Loader
