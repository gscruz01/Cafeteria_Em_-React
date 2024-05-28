import React,  {Component} from 'react';
import '../App.css';
const ImagensModelo1 = (props) => {
    return(
        <div>
                <img src={props.imagemFundo} className='Imagem-Fundo'/>
            <img src={props.imagem} className='Imagens-ilustrativas-1'/>
        </div>
    )
}

class ModeloUm extends Component {
    render(){
        return(
            <div className='Modelo-1'>
                <ImagensModelo1 imagem = {this.props.imagem} imagemFundo = {this.props.imagemFundo}/>
                <h1>{this.props.tituloDrinks}</h1>
                <p >{this.props.textoDrinks}</p>
            </div>
        );
    }
}
export default ModeloUm;