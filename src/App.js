import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import ShowItems from './components/ShowItems';
import Navbar from './components/Navbar';

function App() {
  const [selected, onSelectFilter] = useState('All')
  const filters= ["All", "Websites", "Flayers", "Business Cards"]

  return (
    <div className="App">
        <Navbar  filters={filters} selected={selected} onSelectFilter={onSelectFilter}/>
        <ShowItems selected={selected}/>
    </div>
  );
}

export default App;
