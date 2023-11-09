import React from "react";
import foto from '../../assets/images/foto.png';
import styled from 'styled-components';
import { BorderRadius } from "../shared/DesignTokens";

export const Imagem = styled.img`
    border-radius: ${BorderRadius.TWO};
`;


const Image = () => {
    return (
        <div>
            <img src={foto} alt="foto pertfil" />
        </div>
    );
}

export default Image 



