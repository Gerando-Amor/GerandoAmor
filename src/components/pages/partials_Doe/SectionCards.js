//Import Img
import Instagram from "../../img/instagram.svg"
import Seta from "../../img/seta.svg"
import Comunidade from "../../img/Comunidade.png"
import handvetor from"../../img/handvetor.svg"
import iconeA from "../../img/icone@.svg"
import handshake from "../../img/handshake.svg"

// Import Style
import style from "./SectionCards.module.css"

function SectionCards (){

    return(

        <section className={style.sectionLayout}>

            <div className={style.cardsLayout}>
    
                <div className={style.projectInfo}>
                    <img src={handvetor} alt="Icon handvetor" />
                    <h4>Seja um Voluntário</h4>

                    <p>
                         Toda ajuda é bem-vinda! Clique no botão abaixo e nos envie mensagem para entrarmos em contato!
                    </p>

                    <div className={style.btnsCards}>

                        <a className={style.knowMore} href="" target="_blank">
                            Voluntariado
                        </a>

                    </div>
                </div>
            </div>

            <div className={style.cardsLayout}>

                <div className={style.projectInfo}>
                    <img className={style.img2} src={handshake} alt="Icon handshake" />
                    <h4>Seja um Associado</h4>
                    <p>
                        Toda ajuda é bem-vinda! Clique no botão abaixo e nos envie mensagem para entrarmos em contato!
                    </p>
                    <div className={style.btnsCards}>

                        <a className={style.knowMore} href="" target="_blank">
                            Saiba Mais
                        </a>

                    </div>

                </div>
            </div>

            <div className={style.cardDif}>    
                <div className={style.infosCard}>
                    <div className={style.cardStyle}>
                        <img className={style.layout} src={iconeA} alt="Icon@" />
                        <h4>Nos Apoie!</h4>
                        <p className={style.conteudo}>
                            Você pode nos ajudar de outra forma, compartilhe o nosso trabalho com outras pessoas, agradecemos!.
                        </p>
                        <p className={style.conteudo}>
                            Clique no Icone
                            <img className={style.layout} src={Seta} alt="seta"/>
                            <img className={style.layout} src={Instagram} alt="Instagram"/>
                        </p>

                    </div>                    
                </div>
                <div>
                    <img className={style.cardImage} src={Comunidade} alt="Comunidade"/>
                </div>
            </div>
        </section>
    );
};

export default SectionCards