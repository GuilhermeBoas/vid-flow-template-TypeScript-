import style from './cabecalho.module.scss'

export default function Cabecalho() {
    return (
        <header>
            <nav className={style.cabecalho__container}>
                <div className={style.logo__item}>
                    <img src={require('./img/VidFlow-Logo.png')} alt="logo VidFlow" />
                </div>

                <div className={style.cabecalho__pesquisar__item}>
                    <form>

                        <input type="search" placeholder="pesquisar"/>

                        <button>
                            <img src={require("./img/search.png")} alt="" />
                        </button>

                        {/* <button>
                            <img src={require("./img/Mic.png")} alt="" />
                        </button> // colocar api de */}
                    </form>
                </div>

                <div className="cabecalho__icones__item">
                    <a href="#" className="cabecalho__videos"></a>
                    <a href="#" className="cabecalho__apps"></a>
                    <a href="#" className="cabecalho__notificacoes"></a>
                    <a href="#" className="cabecalho__avatar"></a>
                    <label className="cabecalho__switch">
                        <input type="checkbox" className="cabecalho__switch-input" />
                        <span className="cabecalho__switch-slider"></span>
                    </label>
                </div>
            </nav>
        </header>
    )
}