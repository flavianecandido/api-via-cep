import { useState } from 'react';
import { StyleContent } from '../css/Conteudo';
import FotoPerfil from '../components/Image';
import { Button } from './Button';
import axios from 'axios';

function Conteudo() {
    const [cep, setCep] = useState("")
    const [informacoes, setInformacoes] = useState({
        cep: '',
        logradouro: '',
        bairro: '',
        localidade: '',
        uf: ''
    })
    const getInformacoes = () => {
        axios.get('https://viacep.com.br/ws/05653070/json/')
            .then(res => {
                setInformacoes(res.data);
            });
    }
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
                            Olá! Sou Flaviane Cândido, desenvolvedora Front-end com experiência em React, HTML5, CSS3 e JS. Estou situada em São Paulo.Clique abaixo para saber informações sobre minha localização:
                        </p>
                        <div>
                            <p className="consultar"><span>CEP:</span> 05653-070 <Button className="botao" onClick={getInformacoes}>Consultar</Button></p>
                        </div>
                        <div>
                            <p><span>Rua:</span> {informacoes['logradouro']}</p>
                            <p><span>Bairro:</span> {informacoes['bairro']}</p>
                            <p><span>Cidade:</span> {informacoes['localidade']}</p>
                            <p><span>UF:</span> {informacoes['uf']}</p>
                        </div>
                    </div>
                </div>
            </StyleContent>
        </>
    )
}

export default Conteudo
