import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa';

function App() {
  const nome = "Priscilla Salles";

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Felipe Salles" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Felipe Salles"
        idade="32"
        profissao="Engenheiro de Software"
        foto="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default App;