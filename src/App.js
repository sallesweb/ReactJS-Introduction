import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';

function App() {
  const nome = "Priscilla Salles";

  return (
    <div className="App">
      <h1>Testando Eventos</h1>
      <Evento numero="1" />
      <Evento numero="2" />
      <Form />
      <Frase />
      <Frase />
      <HelloWorld />
      <SayMyName nome="Felipe Salles" />
      <SayMyName nome={nome} />
      <Pessoa
        nome="Felipe Salles"
        idade="32"
        profissao="Engenheiro de Software"
        foto="https://via.placeholder.com/150"
      />
      <List />
    </div>
  );
}

export default App;