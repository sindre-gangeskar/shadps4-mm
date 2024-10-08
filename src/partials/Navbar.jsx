import React from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css';
import useGlobalStateStore from "../js/globalStateStore";
function Navbar() {
    const [ processActtive ] = useGlobalStateStore(state => [ state.processActive ]);
    const routes = [ { path: '/settings', name: 'settings' }, { path: '/', name: 'library' }, { path: '/create', name: 'create' } ];
    return (
        <>
            <div className={`navbar-wrapper ${processActtive ? 'collapsed' : ''}`}>
                <ul className="navbar-views">
                    {routes.map(route => {
                        return (
                            <Link key={route.name} to={route.path} className="navbar-item navbar-link btn">{route.name}</Link>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
export default Navbar;