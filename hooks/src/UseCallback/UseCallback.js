import './App.css';
import { useState, useEffect } from 'react';

const eventFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);

  //ComponentDidUpdate - EXecuta toda vez que o componente atualiza
  // useEffect(() => {
  //   console.log('ComponentDidUpdate');
  // });

  //ComponentDidMount - Executa 1x
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);
    // ComponentWillUmount - Limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  //Com dependecias - Executa toda vez que a dependecia mudar
  useEffect(() => {
    console.log('C1', counter, 'C2:', counter1);
  }, [counter, counter1]);

  return (
    <div className="App">
      <p>teste1</p>
      <h1>
        C1: {counter} C2: {counter1}
        {''}
      </h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter1(counter1 + 1)}>+(2)</button>
    </div>
  );
}

export default App;
