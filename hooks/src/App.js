import React, { useContext, useState } from 'react';
import './App.css';

const globalState = {
  title: 'O titulo que contexto',
  body: 'BODY DO CONTEXTO',
  counter: 0,
};
const GlobalContext = React.createContext();

// eslint-disable-next-line
const Div = ({ children }) => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

// eslint-disable-next-line
const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <div className="App">
      {title} {counter}
    </div>
  );
};
const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;
  return <p onClick={() => setContextState({ ...contextState, counter: counter + 1 })}>{body}</p>;
};

function App() {
  const [contextState, setContextState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
