import React,  {Component} from 'react';
// Navbar
import Navbar from './Navbar';
// Navbar
// Introdução
import Introducao from './Introducao';
// Introdução
// Modelo 1
import ModeloUm from './Modelo-1';
// Modelo 1
// Modelo 2
import ModeloDois from './Modelos-2';
// Modelo 2
// Imagens dos Cafes 
import CafeEspresso from '../img/CafeEspresso.png';
import FlatWhite from '../img/FlatWhite.png'
import Affogato from '../img/Affogato.png';
import Alexander from '../img/Alexander.png';
import CoconutCoffee from '../img/CoconutCooffe.png';
import ColdBrew from '../img/ColdBrew.png';
import Capucino from '../img/Capucino.png';
import EspressoMartini from '../img/EspressoMartini.png';
import FrapeDeCafe from '../img/FrapeDeCafe.png';
import LatteMacchiato from '../img/LatteMacchiato.png';
import Mocha from '../img/Mocha.png';
import Negroni from '../img/Negroni.png';
import WhiteRussian from '../img/White Russian.png';
import CafeComLeite from '../img/Capucino.png';
// Imagens dos Cafes
// Imagensd de Fundo 
import FundoCafeEspresso from '../img/FundoCafeEspresso.png';
import FundoFlatWhite from '../img/FundoFlaWhite.png'
import FundoCappucino from '../img/FundoCapucino.png'
import FundoAffogato from '../img/FundoAffogato.png'
import FundoAlexander from '../img/FundoAlexander.png'
import FundoCoconutCoffe from '../img/FundoCoconutCoffe.png'
import FundoColdBrew from '../img/FundoColdBrew.png'
import FundoEspressoMartini from '../img/FundoEspressoMartini.png'
import FundoLatteMacchiato from '../img/FundoLatteMacchiato.png'
import FundoMochaccino from '../img/FundoMochaccino.png'
import FundoWhiteRussian from '../img/FundoWhiteRussian.png'
import FundoNegroni from '../img/FundoNegroni.png'
import FundoFrapeDeCafe from '../img/FundoFrapeDeCafe.png'
// Imagens de Fundo
// Footer
import Footer from './Footer';
// Footer

class ComponetePai extends Component {
    render(){
        return(
            <div>
                <Navbar/>
                <Introducao/>
                 <ModeloUm tituloDrinks = "|Café Espresso" imagem = {CafeEspresso} textoDrinks = "O café espresso é uma bebida forte e concentrada feita com uma pequena quantidade de café moído finamente e água quente sob pressão. Essa técnica extrai rapidamente os sabores do café, resultando em uma bebida encorpada e saborosa, conhecida por sua intensidade e crema. O café espresso é apreciado por sua intensidade e sabor concentrado." imagemFundo = {FundoCafeEspresso}/>
                
                <ModeloDois tituloDrinks = "|Flat White" imagem = {FlatWhite} textoDrinks = 'O Flat White é uma bebida única que combina a intensidade do espresso com a suavidade do leite vaporizado, resultando em uma experiência de sabor excepcionalmente equilibrada. No Coffee All Day,   preparamos o Flat White com maestria, usando café espresso de alta qualidade e leite fresco vaporizado para criar uma textura aveludada e um sabor suave e encorpado.' imagemFundo = {FundoFlatWhite}/>

                <ModeloUm tituloDrinks = "|Cappucino" imagem = {Capucino} textoDrinks = "No Coffee All Day, o cappuccino é uma experiência irresistível! Preparamos cada xícara com um espresso rico e cremoso, combinado com leite vaporizado e uma camada de espuma de leite macia e densa. A mistura equilibrada desses ingredientes resulta em um sabor suave e encorpado, com a cremosidade perfeita para satisfazer sua vontade de café. Servido em uma xícara aquecida, nosso cappuccino é a escolha ideal para desfrutar a qualquer hora do dia." imagemFundo = {FundoCappucino}/>
                
                <ModeloDois tituloDrinks = "|Affogato" imagem = {Affogato} textoDrinks = "Feito com uma bola de sorvete de baunilha coberta com um shot duplo de espresso quente, a mistura do café quente com o sorvete gelado cria uma combinação incrível de sabores e texturas. É uma sobremesa simples, mas deliciosa, perfeita para os amantes de café e sorvete. Experimente o Affogato no Coffee AllDay e surpreenda seu paladar!" imagemFundo = {FundoAffogato}/>
                
                <ModeloUm tituloDrinks = "|Alexander" imagem = {Alexander} textoDrinks = "Também temos o clássico coquetel Alexander. Feito com conhaque, licor de cacau e creme de leite, é uma bebida sofisticada e deliciosa. A combinação do conhaque com o cor de cacau resulta em um sabor rico e encorpado, enquanto o creme de leite adiciona uma textura suave e cremosa. É uma ótima opção para quem busca uma bebida elegante e saborosa." imagemFundo = {FundoAlexander}/>

                <ModeloDois tituloDrinks = "|Coconut Coffe" imagem = {CoconutCoffee} textoDrinks = " Oferecemos uma opção deliciosa e exótica: O Coconut Coffee. Esta bebida combina a intensidade do nosso café espresso com o sabor suave e tropical do coco. O café espresso é cuidadosamente preparado e misturado com leite de coco, criando uma combinação harmoniosa de sabores. O Coconut Coffee é uma escolha refrescante e revigorante, perfeita para quem busca uma experiência de café única e cheia de sabor." imagemFundo = {FundoCoconutCoffe}/>
                
                <ModeloUm tituloDrinks = "|Cold Brew" imagem = {ColdBrew} textoDrinks = "Feito com grãos de café moídos grossos e água fria, o Cold Brew é preparado lentamente durante várias horas   para extrair um sabor suave e menos ácido. O resultado é uma bebida gelada, perfeita para os dias quentes. O Cold Brew do Coffee All Day é encorpado e cheio de sabor, com notas sutis de chocolate e nozes." imagemFundo = {FundoColdBrew}/>
                
                <ModeloDois tituloDrinks = "|Expresso Martini" imagem = {EspressoMartini} textoDrinks = "Temos uma opção sofisticada para os amantes de café e coquetéis: O Espresso Martini. Feito com uma combinação de afé espresso, vodka, licor de café e açúcar, é uma bebida complexa e deliciosa. O café espresso adiciona uma profundidade de sabor única, enquanto a vodka e o licor de café trazem um toque de sofisticação e doçura. Agitado com gelo e servido em uma taça de martini, o Espresso Martini é uma escolha elegante e estimulante para qualquer ocasião." imagemFundo = {FundoEspressoMartini}/>
                
                <ModeloUm tituloDrinks = "|Latte Macchiato" imagem = {LatteMacchiato} textoDrinks = "Oferecemos uma bebida clássica e reconfortante: O Latte Macchiato. Esta bebida é feita com uma base de leite vaporizado e uma pequena quantidade de café espresso macchiato ou manchado por cima, criando camadas distintas. O Latte Macchiato é conhecido por sua apresentação visualmente impressionante, com as camadas de leite e café criando um efeito visualmente atraente." imagemFundo = {FundoLatteMacchiato}/>
                
                <ModeloDois tituloDrinks = "|Mochaccino" imagem = {Mocha} textoDrinks = " Esta bebida combina a intensidade do café espresso com a suavidade do leite vaporizado e o sabor do chocolate. O Mochaccino é uma escolha indulgente e satisfatória, perfeita para quem gosta de um toque de doçura em seu café." imagemFundo = {FundoMochaccino}/>
                
                <ModeloUm tituloDrinks = "|White Russian" imagem = {WhiteRussian} textoDrinks = "Oferecemos uma opção clássica e sofisticada: O White Russian. Este coquetel é feito com vodka, licor de café e creme de leite, resultando em uma bebida suave e indulgente. O White Russian é conhecido por sua combinação equilibrada de sabores, com a vodka dando um toque de robustez, o licor de café adicionando um sabor rico e o creme de leite conferindo uma textura cremosa." imagemFundo = {FundoWhiteRussian}/>
                
                <ModeloDois tituloDrinks = "|Negroni" imagem = {Negroni} textoDrinks = "Temos um coquetel clássico e cheio de sabor: O Negroni. Feito com gin, vermute tinto e Campari, o Negroni é uma bebida complexa e equilibrada, conhecida por sua cor vermelha vibrante e sabor amargo característico. É uma escolha sofisticada para quem aprecia coquetéis com personalidade." imagemFundo = {FundoNegroni}/>
                
                <ModeloUm tituloDrinks = "|Frapê de Café" imagem = {FrapeDeCafe} textoDrinks = "Temos uma opção refrescante e deliciosa: O Frappé de Café. Esta bebida gelada é feita com café espresso, gelo, leite e açúcar, resultando em uma mistura cremosa e refrescante. O Frappé de Café é uma escolha popular para os dias quentes, pois combina a energia do café com a sensação refrescante do gelo." imagemFundo = {FundoFrapeDeCafe}/>
                
                {/* <Footer/>  */}
            </div>
        );
    }
}

export default ComponetePai;