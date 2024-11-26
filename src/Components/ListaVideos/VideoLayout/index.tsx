

export default function VideoLayout({enderecoVideo,imagem,titulo,descricao}:{enderecoVideo:string,imagem:string,titulo:string,descricao:string}) {
    return (
        <li>
            <iframe src={enderecoVideo} title="Conhecendo a linguagem Go | Hipsters.Talks" allowFullScreen />
            
            <div>
                <img src={imagem} alt=" Logo do Canal" />

                <div>
                    <h3>{titulo}</h3>

                    <p>{descricao}</p>
                </div>

            </div>
        </li>
    )
}

