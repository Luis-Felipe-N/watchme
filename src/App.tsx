import './styles/global.scss'
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { GenreSelectedContextProvider } from './context/genreSelectedContext';

function App() {

  return (
      <GenreSelectedContextProvider>
        <div className="main">
            <SideBar  />
            <Content />
        </div>
      </GenreSelectedContextProvider>
  );
}

export default App;
