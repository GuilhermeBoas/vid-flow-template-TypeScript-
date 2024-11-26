// import logo from './logo.svg';
import Cabecalho from '../Components/Cabecalho';
import MenuLateral from '../Components/SideBar';
import SecaoSuperior from '../Components/SecaoSuperior';
import ListaVideos from '../Components/ListaVideos';
import '../Components/SideBar/Icons/Avatar_Deschamps.png'

const canais = [
  {
    texto: 'Mostrar mais 2',
    icone: 'keyboard_arrow_down.png'
  }, {
    texto: 'Felipe Deschamps',
    icone: 'Avatar_Deschamps.png'
  }, {
    texto: 'Jovem Nerd',
    icone: 'Avatar_Jovem_Nerd.png'
  }, {
    texto: 'Mario Souto',
    icone: 'Avatar_Souto.png'
  }, {
    texto: 'Atila Iamarino',
    icone: 'Avatar_Atila.png'
  }, {
    texto: 'Rafaella Ballerini',
    icone: 'Avatar_Rafa.png'
  }, {
    texto: 'Gaveta',
    icone: 'Avatar_Gaveta.png'
  }, {
    texto: 'Alura',
    icone: 'Avatar_Alura.png'
  }
]

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <MenuLateral lista={canais} />
      <SecaoSuperior />
      <ListaVideos/>
    </div>
  );
}
// O que falta fazer: 1-terminar outros icones;2-sistema de Filtros por tags;3-filtro pela barra de pesquisa(Onchange);4-Requisição de novos Videos(Colocar demais icones);4-Api de pesquisa pela voz  
export default App;
