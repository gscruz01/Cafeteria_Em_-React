import React,  {Component} from 'react';
import '../../src/App.css';
import FotoCapa from "../img/Foto-Capa.png"

class Introducao extends Component {
    render(){
        return(
            <div className='Introducao'>
                <img src={FotoCapa} alt='Foto de Capa' title='Foto de Capa' id='imgfundo'/>
                <h1>Coffee all day</h1>
                <p>Bem-vindo ao Coffee All Day, o seu refúgio acolhedor para os amantes de café! Aqui, cada xícara é uma
                    experiência única, onde o aroma rico e os sabores intensos se combinam para criar momentos
                    inesquecíveis. Nossa paixão pelo café vai além de apenas servir uma bebida. Nós nos dedicamos a
                    oferecer uma experiência completa, desde a cuidadosa seleção dos grãos até a preparação artesanal de
                    cada xícara. Cada detalhe é pensado para proporcionar um momento de prazer e relaxamento em meio à
                    agitação do dia a dia.</p>
            </div>
        );
    }
}
export default Introducao;