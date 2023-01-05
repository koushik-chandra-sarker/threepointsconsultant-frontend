import React, {useState} from 'react';
import logo from "../../assets/images/logo .png"
import {NavLink} from "react-router-dom";
import {DOMAIN} from "../../constants";
import homeCss from "./Header.module.scss"
import SearchDialog from "../../pages/Home/SearchDialog";

const Header = () => {
    const [activeHamburger, setActiveHamburger] = useState(false);
    const [openSearchDialog, setOpenSearchDialog] = useState(null);

    function handleOpenSearchDialog() {
        setOpenSearchDialog(!openSearchDialog);
    };

    return (
        <div>

                <SearchDialog state={{openSearchDialog, setOpenSearchDialog}}/>

            <nav
                className="relative w-full flex items-center justify-between py-4 text-gray-500">
                <div className=" w-full items-center justify-between">
                    <a className="w-32 flex items-center text-gray-900 hover:text-gray-900 focus:text-gray-900 mt-2 lg:mt-0 mr-1"
                       href="/">
                        <img src={logo} alt="logo" loading="lazy"/>
                    </a>
                </div>
                <div>
                    {/*share and search*/}
                    <div className={"flex gap-4 justify-end mb-1"}>
                        <a rel={"noreferrer"} target={"_blank"}
                           href={`https://www.facebook.com/sharer.php?u=${DOMAIN}`}>
                            <i className="fas fa-share-alt text-gray-400"/>
                        </a>
                        <button
                            onClick={handleOpenSearchDialog}
                        >
                            <i className="fas fa-search text-gray-400 mt-1"/>
                        </button>

                    </div>
                    <div className={"flex justify-end w-full"}>
                        <div id={"Hamburger"}
                             onClick={() => setActiveHamburger(!activeHamburger)}
                             className={`${homeCss.hamburger} ${activeHamburger ? homeCss.hamburgerActive : ""} md:hidden block`}>
                            <span className={homeCss.line1}/>
                            <span className={homeCss.line2}/>
                            <span className={homeCss.line3}/>
                        </div>
                    </div>
                    {/* Nav desktop view */}
                    <ul className="desktop-menu w-full hidden md:flex pl-0 list-none m-0 ">
                        <li className="px-2 whitespace-nowrap "><NavLink to={"/"}>Home</NavLink></li>
                        <li className="px-2 whitespace-nowrap border-l-2"><NavLink to={"/about"}>About Us</NavLink></li>
                        <li className="px-2 whitespace-nowrap border-l-2"><NavLink to={"/project"}>Projects</NavLink>
                        </li>
                        <li className="px-2 whitespace-nowrap border-l-2"><NavLink to={"/news"}>News</NavLink></li>
                        <li className="px-2 whitespace-nowrap border-l-2"><NavLink
                            to={"/publication"}>Publications</NavLink>
                        </li>
                        <li className="px-2 whitespace-nowrap border-l-2"><NavLink
                            to={"/accolades"}>Accolades</NavLink>
                        </li>
                        <li className="pl-2 whitespace-nowrap border-l-2"><NavLink to={"/contact"}>Contact</NavLink>
                        </li>
                    </ul>


                </div>
            </nav>
            {/* Nav mobile view */}
            <div className={!activeHamburger ? homeCss.hamburgerActive : ""}>
                <ul className={`${homeCss.mobileMenu} "mobile-menu w-full md:hidden flex flex-col gap-2 border mb-5 p-5 list-none ml-0"`}>
                    <li   onClick={() => setActiveHamburger(!activeHamburger)} className="px-2 whitespace-nowrap "><NavLink to={"/"} className={"w-full block"}>Home</NavLink>
                    </li>
                    <li   onClick={() => setActiveHamburger(!activeHamburger)} className="px-2 whitespace-nowrap"><NavLink to={"/about"}>About Us</NavLink></li>
                    <li   onClick={() => setActiveHamburger(!activeHamburger)} className="px-2 whitespace-nowrap"><NavLink to={"/project"}>Projects</NavLink></li>
                    <li   onClick={() => setActiveHamburger(!activeHamburger)} className="px-2 whitespace-nowrap"><NavLink to={"/news"}>News</NavLink></li>
                    <li   onClick={() => setActiveHamburger(!activeHamburger)} className="px-2 whitespace-nowrap"><NavLink to={"/publication"}>Publications</NavLink></li>
                    <li   onClick={() => setActiveHamburger(!activeHamburger)} className="px-2 whitespace-nowrap"><NavLink to={"/accolades"}>Accolades</NavLink></li>
                    <li   onClick={() => setActiveHamburger(!activeHamburger)} className="pl-2 whitespace-nowrap"><NavLink to={"/contact"}>Contact</NavLink></li>
                </ul>
            </div>

        </div>


    );
};

export default Header;