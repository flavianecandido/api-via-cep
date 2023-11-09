import { } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import {
    Colors,
    FontFamilies,
    FontSizes,
    FontWeights,
    BorderRadius,
    Spaces,
} from '../shared/DesignTokens';

export const Button = styled.button`
    border: none;
    font-family: ${FontFamilies.PRIMARY};
    font-weight: ${FontWeights.SEMIBOLD};
    width: 138px;
    height: 38px;
    background-color: ${Colors.BLUE};
    border-radius: ${BorderRadius.ONE};
    color: ${Colors.BLACK};
    padding: ${Spaces.ONE} ${Spaces.FIVE} ${Spaces.ONE} ${Spaces.FIVE};
    font-size: ${FontSizes.ONE};
    cursor: pointer;
    text-decoration: none;
`;