import './App.css';

const App = () => {
  const mensaje = 'Hola'
  return (
    <div className="App">
      {mensaje + ' evaluación en JSX'}
    </div>
  )
} //No se pueden renderizar objetos

export default App;
