import React from 'react';
import logo from "../../assets/images/logo .png"
import {Link} from "react-router-dom";
import {SITE_URL} from "../../constants";

const Header = () => {
    return (

        <nav
            className="container mx-auto relative w-full flex items-center justify-between py-4 text-gray-500">
            <div className=" w-full items-center justify-between">
                <a className="w-32 flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1"
                   href="#">
                    <img src={logo} alt="logo" loading="lazy"/>
                </a>
            </div>
            <div>
                {/*share and search*/}
                <div className={"flex gap-4 justify-end mb-1"}>
                    <a rel={"noreferrer"} target={"_blank"} href={`https://www.facebook.com/sharer.php?u=${SITE_URL}`}>
                        <i className="fas fa-share-alt text-gray-400"/>
                    </a>
                    <i className="fas fa-search text-gray-400"></i>
                </div>
                <ul class="w-full flex pl-0 list-style-none">
                    <li class="px-2 whitespace-nowrap "><Link to={"/"}>Home</Link></li>
                    <li class="px-2 whitespace-nowrap border-l-2"><Link to={"/about"}>About Us</Link></li>
                    <li class="px-2 whitespace-nowrap border-l-2"><Link to={"/project"}>Projects</Link></li>
                    <li class="px-2 whitespace-nowrap border-l-2"><Link to={"/news"}>News</Link></li>
                    <li class="px-2 whitespace-nowrap border-l-2"><Link to={"/publication"}>Publications</Link></li>
                    <li class="pl-2 whitespace-nowrap border-l-2"><Link to={"/contact"}>Contact</Link></li>
                </ul>

            </div>
        </nav>

    );
};

export default Header;