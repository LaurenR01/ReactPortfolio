import React, {useState} from 'react';
import NavBar from './components/NavBar';
import Section from './components/Section';
import Links from './components/Links';
import './App.css';
import Portfolio from './components/Portfolio';

function App() {
  const [selectedPage, setSelectedPage] = useState('Portfolio');
  const handlePageChange = (selectedPage) => setSelectedPage;
  
  return (
    <>
    <NavBar />
    <Section selectedPage = {selectedPage}/>
    <Links />
    </>
  )
    
}

export default App;
