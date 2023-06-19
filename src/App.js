//import logo from './logo.svg';
import './App.css';

const aa = 'Preencher';
const bb = ['qw','we'];

function Clicou () {
  if ( document.getElementById('ww').value === '1' ) {
    document.getElementById('Exibe').innerHTML = 'rt';
  } else {
    alert('clicou outro');
  }
}

function BotaoTeste () {
  return (
    <>
    <button type='button' onClick={Clicou}>Clique aqui</button>
    <input type='text' id='ww' defaultValue={aa}/>
    <div id='Exibe'></div>
    </>
  )
}

function TabelaTeste () {
  return (
    <table>
      <thead>
        <tr>
          <th>A</th>
          <th>B</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{bb[0]}</td>
          <td>2</td>
        </tr>
      </tbody>
    </table>
  )
}
function App() {
  return (
    <div className="App">
      <p>Teste 2</p>
      <BotaoTeste />
      <TabelaTeste />
    </div>
  );
}

export default App;
