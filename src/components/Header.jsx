import { useLocation, Link, useNavigate } from "react-router-dom";
import React from "react";

function Header() {
    const location = useLocation();
    const Navigate = useNavigate();
    function pathMatchRoute(route) {
        return route === location.pathname;
    }

    return (
        <div className="shadow-md sticky top-0 z-50 bg-white">
            <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
                <Link to="/">
                <img
                    src="https://cms.nar.realtor//sites/default/files/images/logos/NAR/web_R_blk.jpg"
                    alt="logo-realtor"
                    className="h-20 cursor-pointer"
                   
                /></Link>

                <ul className="flex space-x-10">
                    <li>
                        <Link
                            to="/"
                            className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                                pathMatchRoute("/") && "text-black border-b-red-500"
                            }`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/profile"
                            className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                                pathMatchRoute("/profile") && "text-black border-b-red-500"
                            }`}
                        >
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/offers"
                            className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                                pathMatchRoute("/offers") && "text-black border-b-red-500"
                            }`}
                        >
                            Offers
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/signin"
                            className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                                pathMatchRoute("/signin") && "text-black border-b-red-500"
                            }`}
                        >
                            Signin
                        </Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}

export default Header;
