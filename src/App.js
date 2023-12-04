import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/time';

function App() {

  const times = [
    {
      nome: 'Programação',
      firstColor: '#57C278',
      secondColor: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      firstColor: '#82CFFA',
      secondColor: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      firstColor: '#A6D157',
      secondColor: '#F0F8E2'
    },
    {
      nome: 'Devops',
      firstColor: '#E06B69',
      secondColor: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      firstColor: '#DB6EBF',
      secondColor: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      firstColor: '#FFBA05',
      secondColor: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      firstColor: '#FF8A29',
      secondColor: '#FFEEDF'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner></Banner>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}></Formulario>
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      firstColor={time.firstColor} 
      secondColor={time.secondColor}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} //faz um filtro para dedsignar onde o colaborador deve aparecer;
      />)}
    </div>
  );
}

export default App;