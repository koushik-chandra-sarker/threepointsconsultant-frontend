import React from 'react';
import {EMAIL, PHONES1, PHONES2} from "../../constants";

const Contact = () => {
    return (
        <div className={"page-full-height "}>
            <div
                className="w-full h-full bg-gray-300 rounded-lg overflow-hidden md:mr-10 md:p-10 p-5 flex items-end justify-start relative">
                <iframe width="100%" height="100%" className="absolute w inset-0" frameBorder="0" title="map"
                        marginHeight="0" marginWidth="0" scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.890256939945!2d90.37878187652667!3d23.751292556809585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8ae1142ebc9%3A0x6b4d8f94de94b5bd!2s3Points%20Consultants!5e0!3m2!1sen!2sbd!4v1645287040953!5m2!1sen!2sbd"
                />
                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-xl">
                    <div className="lg:w-1/2  px-6">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest md:text-base text-xs">ADDRESS</h2>
                        <p className="mt-1 text-xs md:text-sm">56 (2nd floor) West Panthapath, Lake Circus, Kalabagan, Dhaka-1205
                            Bangladeshr</p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest md:text-base text-xs">EMAIL</h2>
                        {/*emailto*/}

                        <a className="text-indigo-500 leading-relaxed text-xs md:text-sm" href={`mailto:${EMAIL}`}>{EMAIL}</a>
                        <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs md:text-sm mt-4">PHONE</h2>
                        <a className={'text-xs md:text-sm'} href={`tel:${PHONES1}`}>{PHONES1}</a>;
                        <a className={'text-xs md:text-sm'} href={`tel:${PHONES2}`}>{PHONES2}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;