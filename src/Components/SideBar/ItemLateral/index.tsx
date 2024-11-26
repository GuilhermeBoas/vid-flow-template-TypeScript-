export default function ItemLateral({texto,icone}:{
    texto: string;
    icone: string;
})

{

    return (
        <li>
            <a className="menu__itens" href="#">
                <img src={require('../Icons/'+ icone)}></img>
                <span>{texto}</span>
            </a>
        </li>
    )
}