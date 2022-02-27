import React from 'react';
import {EMAIL, PHONES1, PHONES2} from "../../constants";
import {Helmet} from "react-helmet";
import logo from "../../assets/images/logo .png";

const Contact = ({contact}) => {
    return (
        <div className={"page-full-height "}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact | 3pointsconsultant-An Architectural Consulting Firm, Architecture Firm in bangladesh, Tapon Sarker Architects,
                    Consulting agency, Architectural Designer, Engineering Service  </title>
                {/*meta for publication page*/}
                <meta name="description" content="3PointsConsultant is a professional architectural firm, Architectural firm in Bangladesh,
                    Tapon Sarker Architects, Consulting agency, Architectural Designer, Engineering Service" />
                <meta name="keywords" content="contact, contact number, contact number of 3point consultant, publication of 3PointsConsultant, publication in 3PointsConsultant, Architectural publication in dhaka,Architectural publication in bangladesh, Architectural firm in Bangladesh, Tapon Sarker Architects,
                    Consulting agency, Architectural Designer, Engineering Service" />
                <meta name="author" content="3PointsConsultant" />
                <meta name="copyright" content="3points consultant"/>
                <meta name="robots" content="index, follow"/>
                <meta name="revisit-after" content="1 days"/>
                <meta name="distribution" content="global"/>
                <meta name="rating" content="general"/>
                <meta name="language" content="english"/>
                <meta name="doc-type" content="Web Page"/>
                <meta name="doc-class" content="Completed"/>
                <meta name="doc-rights" content="Public"/>
                <meta name="doc-rating" content="Safe For Kids"/>

                {/*meta for web page share*/}
                <meta property="og:title" content="3points consultant- an architecture design firm was formed in March 2012 .This promising firm is now involved with various types of projects such as residential, commercial, industrial, garments and interior design and execution.Principle architect himself is the founder of this firm. He is a BUET graduate and also MIAB .He has over five years job experience under some renowned consultancy firms of Dhaka city. Now he and his team are fully involved with 3points and working for a better society and environment." />
                <meta property="og:description" content="3 points consultant- an architecture design firm was formed in March 2012 .This promising firm is now involved with various types of projects such as residential, commercial, industrial, garments and interior design and execution.Principle architect himself is the founder of this firm. He is a BUET graduate and also MIAB .He has over five years job experience under some renowned consultancy firms of Dhaka city. Now he and his team are fully involved with 3points and working for a better society and environment." />
                <meta property="og:image" content={logo} />
                <meta property="og:url" content="https://3pointsconsultant.com" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="3pointsconsultant" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="bn_BD" />

                {/*meta for twitter*/}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@3points_consultant" />
                <meta name="twitter:creator" content="@3points_consultant" />
                <meta name="twitter:title" content="3points consultant- an architecture design firm was formed in March 2012 .This promising firm is now involved with various types of projects such as residential, commercial, industrial, garments and interior design and execution.Principle architect himself is the founder of this firm. He is a BUET graduate and also MIAB .He has over five years job experience under some renowned consultancy firms of Dhaka city. Now he and his team are fully involved with 3points and working for a better society and environment." />
                <meta name="twitter:description" content="3 points consultant- an architecture design firm was formed in March 2012 .This promising firm is now involved with various types of projects such as residential, commercial, industrial, garments and interior design and execution.Principle architect himself is the founder of this firm. He is a BUET graduate and also MIAB .He has over five years job experience under some renowned consultancy firms of Dhaka city. Now he and his team are fully involved with 3points and working for a better society and environment." />
                <meta name="twitter:image" content={logo} />
                <meta name="twitter:image:alt" content="3points consultant" />
                <meta name="twitter:image:width" content="1200" />
                <meta name="twitter:image:height" content="630" />
                <meta name="twitter:image:type" content="image/png" />
                <meta name="twitter:image:alt" content="3points consultant" />

            </Helmet>
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