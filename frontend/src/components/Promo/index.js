import portodegalinhas from '../../assets/imgs/places/porto-de-galinhas.jpg';
import orlando from '../../assets/imgs/places/orlando.jpg';
import foz from '../../assets/imgs/places/foz.jpg';
import vancouver from '../../assets/imgs/places/vancouver.jpg';
import salvador from '../../assets/imgs/places/salvador.jpg';
import recife from '../../assets/imgs/places/recife.jpg';
import lisboa from '../../assets/imgs/places/lisboa.jpg';
import morrodesp from '../../assets/imgs/places/morro-de-sp.png';
import praiadapipa from '../../assets/imgs/places/praia-da-pipa.png';
import jericoacoara from '../../assets/imgs/places/jericoacoara.png';
import bsas from '../../assets/imgs/places/buenos-aires.jpg';
import trancoso from '../../assets/imgs/places/trancoso.png';
import cupom from '../../assets/imgs/cupom.png';
import './style.css';

function Promo() {
    return (
        <>
            <div class="painel1">

                <div class="cards">
                    <img src={portodegalinhas} alt="Porto de Galinhas"/>
                    <hr />
                    <h4>Porto de Galinhas</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 1165</span></p>
                    <h3>R$ 699</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <button className="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={orlando} alt="Orlando" />
                    <hr />
                    <h4>Orlando</h4>
                    <p>11 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 12555</span></p>
                    <h3>R$ 9999</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <button class="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={foz} alt="Foz do Iguaçu" />
                    <hr />
                    <h4>Foz do Iguaçu</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 940</span></p>
                    <h3>R$ 599</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <button class="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={vancouver} alt="Vancouver" />
                    <hr />
                    <h4>Vancouver</h4>
                    <p>7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 12995</span></p>
                    <h3>R$ 10999</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <button class="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={salvador} alt="Salvador" />
                    <hr />
                    <h4>Salvador</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 2555</span></p>
                    <h3>R$ 1999</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <button class="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={recife} alt="Recife" />
                    <hr />
                    <h4>Recife</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 1555</span></p>
                    <h3>R$ 999</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <button class="btnComprar">Comprar</button>
                </div>
            </div>

            <div class="painel4">
                <img src={cupom} id="cupom" alt="Cupom de desconto" />
            </div>



            <div class="painel1">
                <div class="cards">
                    <img src={lisboa} alt="Lisboa" />
                    <hr />
                    <h4>Lisboa</h4>
                    <p>15 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 22555</span></p>
                    <h3>R$ 18999</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <button class="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={morrodesp} alt="Morro de São Paulo" />
                    <hr />
                    <h4>Morro de São Paulo</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 2899</span></p>
                    <h3>R$ 2399</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <button class="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={praiadapipa} alt="Praia da Pipa" />
                    <hr/>
                        <h4>Praia da Pipa</h4>
                        <p>4 ou 7 diárias</p>
                        <h6>&#x2714; Passagem Aérea</h6>
                        <h6>&#x2714; Quarto</h6>
                        <br />
                        <p>a partir de <span>R$ 2499</span></p>
                        <h3>R$ 1999</h3>
                        <p>+ taxas | até 12x no cartão</p>
                        <h6>Cancelamento Grátis!</h6>
                        <button class="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={bsas} alt="Buenos Aires" />
                    <hr />
                    <h4>Buenos Aires</h4>
                    <p>7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 3599</span></p>
                    <h3>R$ 2799</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <button class="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={jericoacoara} alt="Jericoacoara" />
                    <hr />
                    <h4>Jericoacoara</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 2759</span></p>
                    <h3>R$ 2199</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <button class="btnComprar">Comprar</button>
                </div>
                <div class="cards">
                    <img src={trancoso} alt="Trancoso" />
                    <hr />
                    <h4>Trancoso</h4>
                    <p>4 ou 7 diárias</p>
                    <h6>&#x2714; Passagem Aérea</h6>
                    <h6>&#x2714; Quarto</h6>
                    <br />
                    <p>a partir de <span>R$ 1789</span></p>
                    <h3>R$ 1299</h3>
                    <p>+ taxas | até 12x no cartão</p>
                    <h6>Cancelamento Grátis!</h6>
                    <button class="btnComprar">Comprar</button>
                </div>
            </div>
        </>
    );
}

export default Promo;