import './styles/global.scss'
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { useState } from 'react';
import { genreSelectedContextProvider } from './context/genreSelectedContext';

function App() {

  return (
      <genreSelectedContextProvider>
        <div className="main">
            <SideBar  />
            <Content />
        </div>
      </genreSelectedContextProvider>
  );
}

export default App;
