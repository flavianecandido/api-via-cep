import styled from 'styled-components';
import {
    Colors,
    FontFamilies,
    FontSizes,
    FontWeights,
    BorderRadius,
    Spaces,
} from '../shared/DesignTokens';

export const StyleNav = styled.header`
    * {
        font-family:${FontFamilies.PRIMARY} ;
    }
    a {
        text-decoration: none;
        color: ${Colors.BLUE};
        font-size: ${FontSizes.TWO};
        font-weight: ${FontWeights.BOLD};
        padding: ${Spaces.TWO};
    }
    a:hover {
        text-decoration: underline;
        transition: 0.5s;
    }
    ul {
        padding-left: 320px;
    }
    .menu {
        width: 100%;
        height: 80px;
        color: ${Colors.BLUE};
        background-color: ${Colors.BLACK};
        display: flex;
        align-items: center;
    }
    .logo-menu {
        font-size: ${FontSizes.FOUR};
        font-weight: ${FontWeights.BOLD};
        padding-left: ${Spaces.SIX};
    }
`