import { Outlet } from "react-router-dom";
import '../styles/Layout.scss'
import Logo from '../assets/img/log.png'
import Navbar from "./Navbar";
import { useSelector } from "react-redux";

const Layout = () => {
    const user = useSelector( (state) => state.auth.user );

    return (
        <div className="layout">
            <header className="layout-header-container">
                <div className="logo">
                    <img className="img-logo" src={Logo} alt="logo" />
                </div>
                <p>My social App</p>
            </header>
            <main>
                {user && <Navbar />}
                <Outlet />
            </main>
            <footer>c 2025</footer>
        </div>
    );
};

export default Layout;