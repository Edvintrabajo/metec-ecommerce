import { LoadCircle } from "../../animations/animations";
import Navbar from "../Navbar";
import AdminCards from "./AdminCards";

const Index = () => {
  
  return (
    <>
      <LoadCircle />
      <Navbar />
      <div className="absolute bg-custom-gradient w-full min-h-screen h-auto p-4 min-w-20 text-white flex justify-evenly items-center flex-wrap pt-10 content-start">
        <h1 className="w-full text-center text-3xl pb-10">
          Productos
        </h1>
        <AdminCards />
      </div>
    </>
  );
};

export default Index;
