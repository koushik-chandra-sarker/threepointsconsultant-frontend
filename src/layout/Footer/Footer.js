import React from 'react';
import _ from "lodash";

const Footer = ({contact}) => {
    return (
        <footer className={'flex justify-between md:flex-nowrap flex-wrap'}>
            {/*copyright */}
            <div
                className={"text-gray-400 flex items-center md:text-base text-xs text-center md:text-left"}>
                <div><i className="far fa-copyright"/> Copyright {new Date().getFullYear()}. <> </>
                    3 Points Consultant. All rights reserved
                </div>
            </div>
            {
                !_.isEmpty(contact) &&
                <div className={'flex flex-col md:flex-row w-full md:w-auto text-center md:text-left gap-4 md:mt-0 mt-5  md:text-base text-xs '}>
                    {/*social icons*/}
                    <div className={"flex justify-center items-end border-r-2 "}>
                        {
                            contact[0].facebook &&
                            <a href={contact[0].facebook} target={"_blank"} rel={"noopener noreferrer"}>
                                <i className={"text-gray-400 hover:text-gray-500 mx-2 fab fa-facebook-square"}/>
                            </a>
                        }
                        {
                            contact[0].linkedin &&
                            <a href={contact[0].linkedin} target={"_blank"} rel={"noopener noreferrer"}>
                                <i className={"text-gray-400 hover:text-gray-500 mx-2 fab fa-linkedin"}/>
                            </a>
                        }

                        {
                            contact[0].instagram &&
                            <a href={contact[0].instagram} target={"_blank"} rel={"noopener noreferrer"}>
                                <i className={"text-gray-400 hover:text-gray-500 mx-2 fab fa-instagram"}/>
                            </a>
                        }
                        {
                            contact[0].twitter &&
                            <a href={contact[0].twitter} target={"_blank"} rel={"noopener noreferrer"}>
                                <i className={"text-gray-400 hover:text-gray-500 mx-2 fab fa-twitter"}/>
                            </a>
                        }
                    </div>
                    {/*contact details*/}
                    <div className={"flex justify-center flex-col"}>
                        {
                            contact[0].phone &&
                            <div className={"text-gray-400"}>
                                <i className={"fas fa-phone-square-alt mr-2"}/>
                                <span>{contact[0].phone}</span>
                            </div>
                        }
                        {
                            contact[0].emailAddress &&
                            <div className={"text-gray-400"}>
                                <i className={"fas fa-envelope mr-2"}/>
                                <a href={`mailto:${contact[0].emailAddress}`}>{contact[0].emailAddress}</a>
                            </div>
                        }


                    </div>
                </div>
            }

        </footer>
    );
};

export default Footer;