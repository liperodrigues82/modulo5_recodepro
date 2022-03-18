import amsterdam from '../../assets/imgs/destinations/amsterdam.jpg';
import bangkok from '../../assets/imgs/destinations/bangkok.jpg';
import bariloche from '../../assets/imgs/destinations/bariloche.jpg';
import bsas from '../../assets/imgs/destinations/buenos-aires.jpg';
import cancun from '../../assets/imgs/destinations/cancun.png';
import cidadedocabo from '../../assets/imgs/destinations/cidade-do-cabo.jpg';
import jampa from '../../assets/imgs/destinations/joao-pessoa.jpg';
import lisboa from '../../assets/imgs/destinations/lisboa.jpg';
import machupicchu from '../../assets/imgs/destinations/machu-picchu.jpg';
import santorini from '../../assets/imgs/destinations/santorini.jpg';
import sp from '../../assets/imgs/destinations/sp-sp.jpg';
import newyork from '../../assets/imgs/destinations/new-york.jpg';
import milao from '../../assets/imgs/destinations/milao.jpg';
import rio from '../../assets/imgs/destinations/rio-de-janeiro.jpg';
import paris from '../../assets/imgs/destinations/paris.jpg';
import moscou from '../../assets/imgs/destinations/moscow.jpg';
import trancoso from '../../assets/imgs/destinations/trancoso-bahia.jpg';
import vancouver from '../../assets/imgs/destinations/vancouver.jpg';
import './style.css';

const Destinos = () => {
    return (
        <div className="painel4">
            <div className="divTicket">
                <div clasNames="divTicket-content">
                    <div>
                        <input type="radio" id="idaevolta" name="drone" value="idaevolta" />
                        <label for="idaevolta">Ida e volta</label>

                        <input type="radio" id="ida" name="drone" value="ida" />
                        <label for="ida">Só ida</label>
                    </div>

                    <div>
                        <label for="selectClasse"> Classe: </label>
                        <select name="classes" id="selectClasse">
                            <option value="">----- Escolha -----</option>
                            <option value="economica">Econômica</option>
                            <option value="ecoPremium">Econômica Premium</option>
                            <option value="executiva">Executiva</option>
                            <option value="primClasse">Primeira Classe</option>
                        </select>
                    </div>
                    <div>
                        <label for="passageiros" id="passageiros"> Passageiros: </label>
                        <input type="number" name="passageiros" id="passageiros" />
                        <br />
                        <br />
                        <div>
                            <label for="site-search">Origem</label>
                            <br />
                            <input type="search" id="site-search" name="origem" />
                        </div>

                        <div>
                            <label for="site-search">Destino</label>
                            <br />
                            <input type="search" id="site-search" name="destino" />
                        </div>

                        <div>
                            <label for="dataIda">Data de ida</label>
                            <br />
                            <input type="datetime-local" name="dataIda" id="data" />
                        </div>
                        <div>
                            <label for="dataVolta">Data de volta</label>
                            <br />
                            <input type="datetime-local" name="dataVolta" id="data" />
                        </div>
                        <br />
                        <input type="button" id="btn-pesquisar" value="Reservar" />
                    </div>
                </div>
            </div>

            <div className="painel1">
                <div className="painel2">
                    <div className="boxImgs">
                        <div className="imgsDestinos">
                            <img src={sp} alt="São Paulo - Brasil" />
                        </div>
                        <div className="imgsDestinos">
                            <img src={trancoso} alt="Trancoso - Brasil" />
                        </div>
                        <div className="imgsDestinos">
                            <img src={lisboa} alt="Lisboa - Portugal" />
                        </div>
                        <div class="imgsDestinos">
                            <img src={cancun} alt="Cancún - México" />
                        </div>
                        <div className="imgsDestinos">
                            <img src={santorini} alt="Santorini - Grécia" />
                        </div>
                        <div className="imgsDestinos">
                            <img src={cidadedocabo} alt="Cape Town - África do Sul" />
                        </div>
                        <div className="imgsDestinos">
                            <img src={bariloche} alt="Bariloche - Argentina" />
                        </div>
                        <div className="imgsDestinos">
                            <img src={amsterdam} alt="Amsterdam - Holanda" />
                        </div>
                        <div className="imgsDestinos">
                            <img src={bsas} alt="Buenos Aires - Argentina" />
                        </div>
                        <div className="imgsDestinos">
                            <img src={jampa} alt="João Pessoa - Brasil" />
                        </div>
                        <div className="imgsDestinos">
                            <img src={machupicchu} alt="Machu Picchu - Peru" />
                        </div>
                        <div className="imgsDestinos">
                            <img src={newyork} alt="Nova Iorque - Estados Unidos" />
                        </div>
                        <div className="imgsDestinos">
                            <img src={milao} alt="Milão - Itália" />
                        </div>
                        <div className="imgsDestinos">
                            <img src={rio} alt="Rio de Janeiro - Brasil" />
                        </div>
                        <div className="imgsDestinos">
                            <img src={paris} alt="Paris - França" />
                        </div>
                        <div className="imgsDestinos">
                            <img src={moscou} alt="Moscou - Rússia" />
                        </div>
                        <div className="imgsDestinos">
                            <img src={bangkok} alt="Bangkok - Tailândia" />
                        </div>
                        <div className="imgsDestinos">
                            <img src={vancouver} alt="Vancouver - Canadá" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Destinos;