import React from 'react';
import './App.css'
import Focusinput from './components/Focusinput';
import Counter from './components/Counter';
import ClickLogger from './components/ClickLogger';




function App() {

  return (
    <main>
      <ClickLogger />
      <Counter />
      <Focusinput />
    </main>
  );
}

export default App;
