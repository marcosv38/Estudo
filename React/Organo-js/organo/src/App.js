import Banner from './componentes/Banner/Banner.js';
import CampoTexto from './componentes/CampoTexto/index.js';

function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome" placeholder="Insira seu Nome"/>
      <CampoTexto label="Cargo" placeholder="Insira seu Cargo"/>
      <CampoTexto label="Imagem" placeholder="Insira o endereço da imagem"/>
      
    </div>
  );
}

export default App;
