import React from 'react';
// import Counter from './Counter';
import Exam1 from './components/Exam1';
import Exam2 from './components/Exam2';
import Exam3 from './components/Exam3';
import './App.css'


function App() {
  // const user={
  //   name:'Alice',
  //   age:21
  // }
  return (
    <main>
      <Exam3 />
      <Exam2 />
      <Exam1 name='Alice'
    age={21} />
    {/* <Exam1 {...user} /> */}
    </main>
  );
}

export default App;
