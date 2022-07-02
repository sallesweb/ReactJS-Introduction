import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Conditional from './components/Conditional';
import OtherList from './components/OtherList';
import YourName from './components/YourName';
import Saudacao from './components/Saudacao';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Navbar from './layouts/Navbar';
import Footer from './layouts/Footer';

function App() {
  const nome = "Priscilla Salles";
  const meusItens = ['React', 'Vue', 'Angular'];
  const [name, setName] = useState();

  return (
    <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/empresa" element={ <Empresa /> } />
          <Route path="/contato" element={ <Contato /> } />
        </Routes>
        <Footer />

        <div className="App">
          <h1>State Lift</h1>
          <YourName setName={setName} />
          <Saudacao name={name} />
          <h1>Renderização de listas</h1>
          <OtherList itens={meusItens} />
          <OtherList itens={[]} />
          <h1>Renderização condicional</h1>
          <Conditional />
          <h1>Testando Eventos</h1>
          <Evento numero="1" />
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
    </Router>
  );
}

export default App;