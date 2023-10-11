import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <h2 className="text-primary">CRUD Application</h2>
                </a>
                <Link className="btn btn-danger" to="/adduser">Add User</Link>
            </div>
        </nav>
    )
}