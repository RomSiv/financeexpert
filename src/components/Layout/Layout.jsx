import { Link, Outlet } from "react-router-dom";
import logo from '../../images/logo.svg'
import glob_logo from '../../images/globus.svg'
import './Layout.css'

const Layout = () => {
  return (
    <>
      <header className="header">
        <img src={logo} alt="financeexpert" />
        <div className="links">
        <Link><p>O nas</p></Link>
        <Link><p>Oferta</p></Link>
        <Link><p>Cennik</p></Link>
        <Link><p>Korzyści</p></Link>
        <Link to='blog'><p>Blog</p></Link>
        <Link><p>Kontakt</p></Link>
        </div>
        <div className="contact">
          <div>
          <img src={glob_logo} alt="logo" />
            <p>RU</p>
          <div className="lenguage_menu">
            <p>PL</p>
            <p>EN</p>
            <p>UA</p>
          </div>
          </div>
          <p>+48 502 708 529</p>
        </div>
      </header>
      <Outlet />
      <footer>2023</footer>
    </>
  );
}

export {Layout}