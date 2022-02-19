import React from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({children}) => {
    return (
        <section className={"flex flex-col h-screen container mx-auto"}>
            <Header/>
            {children}
            <div className={'mt-auto py-4 border-t'}>
                <Footer/>
            </div>

        </section>
    );
};

export default Layout;