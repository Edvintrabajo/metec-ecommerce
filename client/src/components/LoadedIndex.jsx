import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import MainContent from "../components/MainContent";
import { useContext } from 'react';
import { Context } from '../context/Context';

const LoadedIndex = () => {
  useContext(Context);
  return (
    <div id="loaded-index" className="hidden w-full h-full min-h-screen	">
        <Navbar />
        <Filters />
        <MainContent />
        {/* <AddProduct/> // Componente ADMIN*/}
    </div>
  );
}

export default LoadedIndex;
