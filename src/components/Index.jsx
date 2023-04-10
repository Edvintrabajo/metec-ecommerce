import { LoadCircle } from "../animations/animations";
import LoadedIndex from "../components/Loadedindex";
import AddProduct from "./admin/AddProduct"; // PARA LA RUTA DE ADMINS

const Index = () => {
  
  return (
    <>
      <LoadCircle />
      <LoadedIndex />
    </>
  );
};

export default Index;
