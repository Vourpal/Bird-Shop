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
        <Outlet />
      </main>
    </div>
  );
};
export default RootLayout;