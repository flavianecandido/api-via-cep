import { } from 'react';
import { StyleContent } from '../css/Conteudo';
import FotoPerfil from './Image';

function SecondContent() {


    return (
        <>
            <StyleContent>
                <div className="conteudo">
                    <div className="foto">
                        <FotoPerfil />
                    </div>
                    <div>
                        <h2>Formação</h2>
                        <p><span>Intituição:</span> FIAP</p>
                        <p><span>Curso:</span> Sistemas para Internet</p>
                        <p><span>Duração:</span> 4 semestres</p>
                        <p><span>Início:</span> janeiro de 2024</p>
                    </div>
                </div>
            </StyleContent>
        </>
    )
}

export default SecondContent
