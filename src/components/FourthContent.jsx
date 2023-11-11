import { } from 'react';
import { StyleContent } from '../css/Conteudo';
import FotoPerfil from './Image';

function FourthContent() {


    return (
        <>
            <StyleContent>
                <div className="conteudo">
                    <div className="foto">
                        <FotoPerfil />
                    </div>
                    <div>
                        <h2>Hobbies</h2>
                        <p>
                            <li>Gosto de viajar para conhecer novas cuturas e lugares</li>
                            <li>Assistir séries e filmes. Casos criminais ganham minha atenção!</li>
                            <li>Participar de eventos de fotografia</li>
                        </p>
                    </div>
                </div>
            </StyleContent>
        </>
    )
}

export default FourthContent
