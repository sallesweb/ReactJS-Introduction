import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'

function App() {
  const nome = "Priscilla Salles";

  return (
    <div className="App">
      <HelloWorld />
      <SayMyName nome="Felipe Salles" />
      <SayMyName nome={nome} />
    </div>
  );
}

export default App;