import ItemLateral from './ItemLateral';
import style from './SideBar.module.scss'

export default function MenuLateral({lista}:{lista: {
    texto: string;
    icone: string;
}[]}){
    

    return(
    <aside className={style.menu__container}>
        
        <ul className="menu__lista" id='inscricoes'>
            {lista.map(item => <ItemLateral texto={item.texto} icone={item.icone} />)}
        </ul>

        <ul className="menu__lista" id='inscricoes'>
            {lista.map(item => <ItemLateral texto={item.texto} icone={item.icone} />)}
        </ul>

        <ul className="menu__lista" id='inscricoes'>
            {lista.map(item => <ItemLateral texto={item.texto} icone={item.icone} />)}
        </ul>
        
    </aside>
    )
}