import { Link, usePage } from "@inertiajs/react";
import React from "react";

const Navbar = () => {
    const { auth }: any = usePage().props;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" href="/">To-Do App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {auth?.user ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/dashboard">Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href={route('logout')} method="post" as="button">Logout</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link" href={route('login')}>Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href={route('register')}>Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
