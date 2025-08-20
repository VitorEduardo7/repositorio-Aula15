import './App.css';
import Header from './components/Header';
import Cartao from './components/Cartao';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>
            Perfil de Usuário
          </h1>
          <Cartao
          imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg/250px-20180610_FIFA_Friendly_Match_Austria_vs._Brazil_Neymar_850_1705.jpg"
          nome="João Silva"
          profissao="Desenvolvedor Web"
          descricao="Apaixonado por tecnologia e inovação."/>
            
        </div>
      </header>
    </div>
  );
}

export default App;
