import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const RootLayout = () => {
  return (
    <div>
      <header>
        <NavBar/>
      </header>
      <main>
        <p>Hello I am what your pages will render</p>
        <img src="https://media.istockphoto.com/id/1061070090/photo/success-concept-open-birds-cell-isolation-on-a-white-background-3d-illustration.jpg?s=612x612&w=0&k=20&c=XLtA-Ms-dOjiORRkLU_IxJYYs8Kz6vozaEj9MAWhdfM=" alt="cage"/>
        <Outlet />
      </main>
    </div>
  );
};
export default RootLayout;