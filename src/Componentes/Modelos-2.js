
import React, { Component } from 'react';
import '../../src/App.css';
const ImagensModelo2 = (props) => {
    return (
        <div>
            <img src={props.imagemFundo} className='Imagem-Fundo' />
            <img src={props.imagem} className='Imagens-ilustrativas-2' />
        </div>
    )
}

class ModeloDois extends Component {
    render() {
        return (
            <div className='Modelo-2'>
                <ImagensModelo2 imagem={this.props.imagem} imagemFundo={this.props.imagemFundo} />
                <h1>{this.props.tituloDrinks}</h1>
                <p>{this.props.textoDrinks}</p>
            </div>
        );
    }
}
export default ModeloDois;