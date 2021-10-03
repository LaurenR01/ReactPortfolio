import React, {useState} from 'react';
import NavBar from './components/NavBar';
import Links from './components/Links';
import Section from './components/Section';
import './App.css';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
   if (currentPage === 'AboutMe') {
     return <AboutMe />
   }
   if (currentPage === 'Portfolio') {
    return <Portfolio />
  }
  if (currentPage === 'Contact') {
    return <Contact />
  }
  if (currentPage === 'Resume') {
    return <Resume />
  }

  }
  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <>
    <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
    {renderPage()}
    <Links />
    </>
  )
    
}

export default App;
