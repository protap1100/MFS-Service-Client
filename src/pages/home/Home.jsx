import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";

const Home = () => {
    return (
        <div className="container mx-auto h-16">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;