import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";

const Home = () => {
  return (
    <div className="container mx-auto">
      <div className="container mx-auto h-16">
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
