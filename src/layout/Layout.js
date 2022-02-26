import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {useSelector} from "react-redux";

const Layout = ({children}) => {
    const site = useSelector(state => state.site);
    return (
        <section className={"flex flex-col h-screen container mx-auto"}>
            <Header/>
            {children}
            <div className={'mt-auto py-4 border-t'}>
                <Footer contact={site.data.contact}/>
            </div>

        </section>
    );
};

export default Layout;