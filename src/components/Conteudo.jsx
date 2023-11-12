import { } from 'react';
import { StyleContent } from '../css/Conteudo';
import FotoPerfil from '../components/Image';
import { Button } from './Button';

function Conteudo() {


    return (
        <>
            <StyleContent>
                <div className="conteudo">
                    <div className="foto">
                        <FotoPerfil />
                    </div>
                    <div>
                        <h2>Sobre mim</h2>
                        <p>
                            Olá! Sou Flaviane Cândido, desenvolvedora Front-end com experiência<br/>
                            em React, HTML5, CSS3 e JS. Estou situada em São Paulo.<br/>
                            Clique abaixo para saber informações sobre minha localização:
                        </p>
                        <div>
                            <p className="consultar"><span>CEP:</span> 05653-070 <Button className="botao">Consultar</Button></p>
                        </div>
                    </div>
                </div>
            </StyleContent>
        </>
    )
}

export default Conteudo
