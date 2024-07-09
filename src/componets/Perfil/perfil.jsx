const Perfil  = () => {
    const usuario = {
        nome: 'Maxwell Silva',
        avatar: 'https://github.com/mxwlladriano.png'
    }


    return(
        <div>
        <img src={usuario.avatar}/>
        <h3>{usuario.nome}</h3>
        </div>
    )
}

export default perfil;