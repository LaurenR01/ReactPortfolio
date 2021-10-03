import React, {useState} from 'react';
import NavBar from './components/NavBar';
import Section from './components/Section';
import Links from './components/Links';
import './App.css';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    switch (currentPage) {
      case 'AboutMe' :
        return <AboutMe />;
        break;
      case 'Portfolio' :
        return <Portfolio />;
        break;
      case 'Contact' :
        return <Contact />;
        break;
      case 'Resume' :
        return <Resume />;
        break;
      default:
        return <AboutMe />;
        break;

    }
  }
  const handlePageChange = (page) => setCurrentPage;
  
  return (
    <>
    <NavBar />
    <Section currentPage={currentPage} handlePageChange={handlePageChange}/>
    {renderPage()}
    <Links />
    </>
  )
    
}

export default App;
