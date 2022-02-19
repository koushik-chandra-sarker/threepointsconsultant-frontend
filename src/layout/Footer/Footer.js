import React from 'react';
import {EMAIL, FACEBOOK, INSTAGRAM, LINKEDIN, PHONES1, PHONES2, TWITTER} from "../../constants";

const Footer = () => {
    return (
        <footer className={'flex justify-between'}>
            {/*copyright */}
           <div className={"text-gray-400 flex items-center"}><div><i className="far fa-copyright"/> Copyright {new Date().getFullYear()} 3 Point Consultant. All rights reserved</div></div>
           <div className={'flex gap-4'}>
               {/*social icons*/}
               <div className={"flex justify-center items-end border-r-2"}>
                   <a href={FACEBOOK} target={"_blank"} rel={"noopener noreferrer"}>
                       <i className={"text-gray-400 hover:text-gray-500 mx-2 fab fa-facebook-square"}/>
                   </a>
                   <a href={LINKEDIN} target={"_blank"} rel={"noopener noreferrer"}>
                       <i className={"text-gray-400 hover:text-gray-500 mx-2 fab fa-linkedin"}/>
                   </a>
                   <a href={INSTAGRAM} target={"_blank"} rel={"noopener noreferrer"}>
                       <i className={"text-gray-400 hover:text-gray-500 mx-2 fab fa-instagram"}/>
                   </a>
                   <a href={TWITTER} target={"_blank"} rel={"noopener noreferrer"}>
                       <i className={"text-gray-400 hover:text-gray-500 mx-2 fab fa-twitter"}/>
                   </a>
               </div>
               {/*contact details*/}
               <div className={"flex justify-center flex-col"}>
                   <div className={"text-gray-400"}>
                       <i className={"fas fa-phone-square-alt mr-2"}/>
                       <a href={`tel:${PHONES1}`}>{PHONES1}</a>;
                       <a href={`tel:${PHONES2}`}>{PHONES2}</a>
                   </div>
                   <div className={"text-gray-400"}>
                       <i className={"fas fa-envelope mr-2"}/>
                       <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                   </div>
               </div>
           </div>
        </footer>
    );
};

export default Footer;