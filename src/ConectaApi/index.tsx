async function MostrarApi() {
    const api = await fetch('https://guilhermeboas.github.io/api-teste/videos.json')
    const videos = await api.json()
    return videos.videos
}

export default MostrarApi