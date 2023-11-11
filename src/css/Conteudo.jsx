import styled from 'styled-components';
import {
    Colors,
    Spaces,
} from '../shared/DesignTokens';

export const StyleContent = styled.header`
    .conteudo {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 100px;
        padding-left: 280px;
        width: 75%;
    }
    .foto {
        margin-right: 62px;
    }
    .consultar {
        margin-top: ${Spaces.FOUR};
    }
    .botao {
        margin-left: 10px;
    }
    span {
        color: ${Colors.BLUE};
        font-weight: 700;
    }
`