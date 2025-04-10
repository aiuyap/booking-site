import { Outlet } from "react-router-dom";
import Footer from "./components/footer.component";
import Navbar from "./components/navbar.component";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
