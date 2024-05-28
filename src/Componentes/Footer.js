import React,  {Component} from 'react';
import '../App.css';
class Footer extends Component {
    render(){
        return(
            
                <footer>
                    
                    <ul>
                        <li> <button href="https://www.instagram.com/gscruzdev" className='Botao-Instagram' rell="external" target="_blank"> </button> <p>Instagram</p> </li>

                        <li> <button href="https://www.facebook.com/guilherme.gang.9?locale=pt_BR" className='Botao-Facebook' rell="external" target="_blank"> </button> <p>Facebook</p> </li>

                        <li> <button href="https://wa.me/5511984483408" className='Botao-WhatsApp' rell="external" target="_blank"> </button> <p>WhatsApp</p> </li>
                        <li> <button href="https://www.linkedin.com/in/guilherme-cruz-a493a3295/" className='Botao-Linkedin' rell="external" target="_blank"> </button> <p>Linkedin</p> </li>
                        </ul>
                </footer>
        );
    }
}
export default Footer;