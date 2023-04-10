import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import MainContent from "../components/MainContent";
import AddProduct from "../components/admin/AddProduct";
import { useContext } from 'react';
import { Context } from '../context/Context';

const LoadedIndex = () => {
  const {indexStates} = useContext(Context);
  indexStates();
  return (
    <div id="loaded-index" className="hidden w-full h-full min-h-screen	">
        <Navbar />
        <Filters />
        {/* <AddProduct/> */}
        <MainContent />
    </div>
  );
}

export default LoadedIndex;
