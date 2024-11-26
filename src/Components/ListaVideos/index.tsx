import style from "./ListaVideos.module.scss"
import VideoLayout from "./VideoLayout"
import MostrarApi from '../../ConectaApi'
import { useState } from "react"

const promessaApi = MostrarApi()

// useState depois para atualizar a lista ? ou ela vai atualizar sozinha depois de fazer a requisição de post que encaminha para outra pagina e depois volta para a pagina normal 
//checar o chatGPT- useEffect??
export default function ListaVideos() {

    const [videos,setVideos]=useState<any[]>([])
    promessaApi.then(resposta => setVideos(resposta))
    //falta otimizar, algo esta errado pq no console.log(videos) primeiro imprime uma [] vazia e depois re-renderizar a array da Api umas 4 vezez quando, eu acho, que deveria ser somente Duas, porém, esta funcionando por agora 
    return (
        <ul className={style.listaMain}>
            {videos.map(video => 
            <VideoLayout 
            enderecoVideo={video.url} 
            imagem={video.imagem} 
            titulo={video.titulo} 
            descricao={video.descricao} />
            )}            
        </ul>
    )
}