import { createGlobalStyle } from "styled-components";
import {
    Colors,
    FontFamilies,
    FontSizes,
    FontWeights,
    Spaces,
} from '../shared/DesignTokens';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${FontFamilies.PRIMARY};
        background-color: ${Colors.BLACK};
    }
    h2 {
        font-size: ${FontSizes.FOUR};
        color: ${Colors.BLUE};
        font-weight: ${FontWeights.BOLD};
        margin-bottom: ${Spaces.TWO};
    }
    p {
        font-size: ${FontSizes.ONE};
        color: ${Colors.WHITE};
        padding-top: 10px;
    }
`
export default GlobalStyle