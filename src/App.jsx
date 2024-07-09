import Perfil from "./componets/Perfil/perfil";

function App() {
  const nome = "Maxwell"

  function RetornaNome(){
    return nome
  }

  const pessoa = {
    nome: "Maria"
  }

  let estaDeDia = false;

return(
  <>
  <Perfil />
  </>
)

}

export default App
