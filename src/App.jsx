import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import SearchBar from './components/SearchBar/SearchBar';
import FilterBar from './components/FilterBar/FilterBar';
import Recipes from './components/Recipes/Recipes';

async function loadFlyonUI() {
  return import('flyonui/flyonui');
}

function App() {
  useEffect(() => {
    const initFlyonUI = async () => {
      await loadFlyonUI();
    };

    initFlyonUI();
  }, []);

  return (
    <>
      <div id="mainContainer" className="2xl:px-[18%] flex justify-center px-8">
        <div id="contentWrapper" className="max-w-7xl w-full">
          <Header></Header>
          <Navbar></Navbar>
          <SearchBar></SearchBar>
          <FilterBar></FilterBar>
          <Recipes></Recipes>
        </div>
      </div>
    </>
  );
}

export default App;
