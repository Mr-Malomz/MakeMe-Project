import React from 'react'
import styled from 'styled-components';
import "react-glide/lib/reactGlide.css";
import { Glide } from 'react-glide';
import pic1 from '../../assets/img/pic1.jpg';
import pic2 from '../../assets/img/pic2.png';
import pic3 from '../../assets/img/pic3.png';

const Slide = styled.div `
    img {
        width: 724 px;
        height: 577 px;
    }

    .glide--next-btn, .glide--prev-btn {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        opacity: 0.5
    }
`;

const Glider = () => {
    return (
        <Slide>
            <Glide
                height={500}
                width={720}
                autoPlay={true}
                autoPlaySpeed={4000}
                dots={true}
                infinite={true}
            >
                <img src={pic1} alt="image1" />
                <img src={pic2} alt="image2" />
                <img src={pic3} alt="image3" />
            </Glide>
        </Slide>
    )
}

export default Glider
