import style from './SecaoSuperior.module.scss'

export default function SecaoSuperior() {
    return (
        <section className={style.superior__secao__container}>
            <div>
                <a href="#" >Tudo</a>
                <a href="#" >Debates</a>
                <a href="#" >Ao Vivo</a>
                <a href="#" >Podcasts</a>
                <a href="#" >Front-end</a>
                <a href="#" >Mobile</a>
                <a href="#" >Data Science</a>
                <a href="#" >Apps</a>
                <a href="#" >Programação</a>
                <a href="#" >Inteligência Artificial</a>
                <a href="#" >Inovação</a>

            </div>
            <label className={style.superior__slider}>
                <span>
                    <img src={require("./img/arrow_forward_ios.png")} alt="flecha direcionada para a direita" />
                </span>
            </label>
        </section>

    )
}