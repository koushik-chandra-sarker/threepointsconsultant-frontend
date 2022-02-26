import React from 'react';
import {EMAIL, PHONES1, PHONES2} from "../../constants";

const Contact = ({contact}) => {
    return (
        <div className={"page-full-height "}>
            {
                contact &&
                <div
                    className="w-full h-full bg-gray-300 rounded-lg overflow-hidden md:mr-10 md:p-10 p-5 flex items-end justify-start relative">
                    <iframe width="100%" height="100%" className="absolute w inset-0" frameBorder="0" title="map"
                            marginHeight="0" marginWidth="0" scrolling="no"
                            src={contact[0].mapLink}
                    />
                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-xl">
                        <div className="lg:w-1/2  px-6">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest md:text-base text-xs">ADDRESS</h2>
                            <p className="mt-1 text-xs md:text-sm">{contact[0].address}</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest md:text-base text-xs">EMAIL</h2>
                            {/*emailto*/}

                            <a className="text-indigo-500 leading-relaxed text-xs md:text-sm" href={`mailto:${contact[0].emailAddress}`}>{contact[0].emailAddress}</a>
                            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs md:text-sm mt-4">PHONE</h2>
                            <a className={'text-xs md:text-sm'} >{contact[0].phone}</a>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Contact;