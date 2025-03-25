import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import '../styles/Layout.scss'

const LayoutOne = () => {

    const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <nav className="navbar">
        <Link to="/">Головна</Link>
        {user ? (
          <>
            <Link to="/profile">Профіль</Link>
            <Link to="/news">Новини</Link>
            <Link to="/chat">Чати</Link>
            <Link to="/friends">Друзі</Link>
          </>
        ) : (
          <>
            <Link to="/login">Увійти</Link>
            <Link to="/register">Реєстрація</Link>
          </>
        )}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
  

export default LayoutOne