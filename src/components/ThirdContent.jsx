import { } from 'react';
import { StyleContent } from '../css/Conteudo';
import FotoPerfil from './Image';

function ThirdContent() {


    return (
        <>
            <StyleContent>
                <div className="conteudo">
                    <div className="foto">
                        <FotoPerfil />
                    </div>
                    <div>
                        <h2>Experiência</h2>
                        <p><span>Empresa:</span> Google</p>
                        <p><span>Cargo:</span> Desenvolvedora Front-End</p>
                        <p><span>Descrição das atividades:</span>
                            <li>Desenvolver soluções</li>
                            <li>Participação em planejamento e criação das tasks junto ao time</li>
                            <li>Desenvolvimento de novas features</li>
                        </p>
                        <p><span>Ferramentas utilizadas:</span>
                            <li>JavaScript</li>
                            <li>Jest</li>
                            <li>Next.js</li>
                            <li>ReactJS</li>
                            <li>Styled Components</li>
                            <li>TypeScript</li>
                            <li>sassCSS</li>
                            <li>Design Systems</li>
                            <li>Redux</li>
                        </p>
                    </div>
                </div>
            </StyleContent>
        </>
    )
}

export default ThirdContent
