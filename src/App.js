import { useState } from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Info from './components/Info';

function App() {
  const [filter, setFilter] = useState('all');
  const [list, setList] = useState([
    {
      name: 'learn react',
      category: 'active',
    },
    {
      name: 'finish the course',
      category: 'active',
    },
    {
      name: 'complete to do project',
      category: 'completed',
    },
  ]);

  return (
    <>
      <div className="todoapp">
        <Header setList={setList} />
        <Main list={list} setList={setList} filter={filter} />
        <Footer
          filter={filter}
          setFilter={setFilter}
          list={list}
          setList={setList}
        />
      </div>

      <Info />
    </>
  );
}

export default App;
