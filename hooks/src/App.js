import './App.css';
import P from 'prop-types';
import React, { useCallback, useState } from 'react';

const Button = React.memo(function Button({ incremmentButton }) {
  console.log('filho renderizou');
  return <button onClick={() => incremmentButton(10)}>+</button>;
});

Button.propTypes = {
  incremmentButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const IncremmentCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  return (
    <div className="App">
      <p>teste1</p>
      <h1>C1: {counter} </h1>
      <Button incremmentButton={IncremmentCounter}>+</Button>
    </div>
  );
}

export default App;
