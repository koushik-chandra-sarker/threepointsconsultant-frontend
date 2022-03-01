import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import Modal from "../../../components/Modal";
import {CustomDialog, useDialog} from 'react-st-modal';
import VideoDialog from "./VideoDialog";
import {FACEBOOK} from "../../../constants";
import InformationDialog from "./InformationDialog";
import {useDispatch, useSelector} from "react-redux";
import {getProject} from "../../../services/projects/Action";
import _ from "lodash";
import logo from "../../../assets/images/logo .png";
import {Helmet} from "react-helmet";

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];
const SingleProject = () => {
    const {category,id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState("");
    const project = useSelector(store=> store.project)
    const getSelectedImage = (index) => {
        return images[index].original;
    };
    const handleNext = () => {
        if (selectedImage < images.length - 1) {
            setSelectedImage(selectedImage + 1);
        }
    };
    const handlePrev = () => {
        if (selectedImage > 0) {
            setSelectedImage(selectedImage - 1);
        }
    };
    useEffect(() => {
        if (id) {
            dispatch(getProject(id))
        }
    }, [id]);
    return (
        <div className={"page-full-height"}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Projects | 3pointsconsultant-An Architectural Consulting Firm, Architecture Firm in bangladesh, Tapon Sarker Architects,
                    Consulting agency, Architectural Designer, Engineering Service  </title>
                {/*meta for publication page*/}
                <meta name="description" content="3PointsConsultant is a professional architectural firm, Architectural firm in Bangladesh,
                    Tapon Sarker Architects, Consulting agency, Architectural Designer, Engineering Service" />
                {/*meta keywords for project page*/}
                <meta name="keywords" content="project, projects of 3points consultant, contact number, contact number of 3point consultant, publication of 3PointsConsultant, publication in 3PointsConsultant, Architectural publication in dhaka,Architectural publication in bangladesh, Architectural firm in Bangladesh, Tapon Sarker Architects,
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
                project.loading ?
                    // true?
                    <div className={"w-full h-96 flex justify-center items-center"}>
                        <span className="loader"></span>
                    </div> :
                    !_.isEmpty(project.data)?
                        <>
                            {/*mobile view project title*/}
                            <div className={" md:hidden  w-full"}>
                                <button className={"mb-2"} onClick={() => navigate(-1)}>Back</button>
                                <ul className=" flex text-sm list-none m-0">
                                    <li className={"text-gray-600 pr-2 cursor-default"}>{category}</li>
                                    <li className={"text-gray-600 border-l-2 px-2 cursor-default"}>{project.data.name}</li>
                                </ul>
                            </div>
                            <div
                                className={"flex md:flex-row flex-col-reverse justify-end relative md:gap-8 gap-4 project-single-gallery-height overflow-hidden md:pt-8"}>
                                {/*desktop view project title and info*/}
                                <div className={"md:flex hidden absolute top-1 justify-between w-full"}>
                                    <ul className="flex  text-sm list-none m-0">
                                        <li onClick={() => navigate(-1)} className={"text-gray-600  mr-24 cursor-pointer"}>Back</li>
                                        <li className={"text-gray-600 px-2 ml-2 cursor-default"}>{category}</li>
                                        <li className={"text-gray-600 border-l-2 px-2 cursor-default"}>{project.data.name}</li>
                                    </ul>
                                    <ul className="flex ml-36 text-sm list-none m-0">
                                        {
                                            project.data.videoType==="Link"?
                                                project.data.videoLink &&
                                                <li className={"text-gray-600 border-r-2 px-2 cursor-pointer"}>
                                                    <button
                                                        onClick={async () => {
                                                            const result = await CustomDialog(<VideoDialog link={project.data.videoLink}/>, {
                                                                // title: 'Project Video',
                                                                className: 'project-video-dialog',
                                                                showCloseIcon: true,
                                                            });
                                                        }}
                                                    >
                                                        Video
                                                    </button>
                                                </li>
                                                :
                                                project.data.video &&
                                                <li className={"text-gray-600 border-r-2 px-2 cursor-pointer"}>
                                                    <button
                                                        onClick={async () => {
                                                            const result = await CustomDialog(<VideoDialog link={project.data.video}/>, {
                                                                // title: 'Project Video',
                                                                className: 'project-video-dialog',
                                                                showCloseIcon: true,
                                                            });
                                                        }}
                                                    >
                                                        Video
                                                    </button>
                                                </li>
                                        }
                                        {
                                            project.data.information &&
                                            <li className={"text-gray-600 pl-2 cursor-pointer"}>
                                                <button
                                                    onClick={async () => {
                                                        const result = await CustomDialog(<InformationDialog info={project.data.information}/>, {
                                                            // title: 'Project Video',
                                                            className: 'project-info-dialog',
                                                            showCloseIcon: true,
                                                        });
                                                    }}
                                                >
                                                    Project Information
                                                </button>
                                            </li>
                                        }

                                    </ul>
                                </div>
                                {/*mobile view project info*/}
                                <div className={"md:hidden  w-full"}>
                                    <ul className="flex text-sm list-none m-0">
                                        {
                                            project.data.videoType==="Link"?
                                                project.data.videoLink &&
                                                <li className={"text-gray-600 px-2 border-l-2 cursor-pointer"}>
                                                    <button
                                                        onClick={async () => {
                                                            const result = await CustomDialog(<VideoDialog link={project.data.videoLink}/>, {
                                                                // title: 'Project Video',
                                                                className: 'project-video-dialog',
                                                                showCloseIcon: true,
                                                            });
                                                        }}
                                                    >
                                                        Video
                                                    </button>
                                                </li>
                                                :
                                                project.data.video &&
                                                <li className={"text-gray-600 border-r-2 px-2 cursor-pointer"}>
                                                    <button
                                                        onClick={async () => {
                                                            const result = await CustomDialog(<VideoDialog link={project.data.video}/>, {
                                                                // title: 'Project Video',
                                                                className: 'project-video-dialog',
                                                                showCloseIcon: true,
                                                            });
                                                        }}
                                                    >
                                                        Video
                                                    </button>
                                                </li>
                                        }

                                        {
                                            project.data.information &&
                                                <li className={`text-gray-600 pl-2 cursor-pointer`}>
                                                <button
                                                    onClick={async () => {
                                                        const result = await CustomDialog(<InformationDialog info={ project.data.information}/>, {
                                                            // title: 'Project Video',
                                                            className: 'project-info-dialog',
                                                            showCloseIcon: true,
                                                        });
                                                    }}
                                                >
                                                    Project Information
                                                </button>
                                            </li>
                                        }

                                    </ul>
                                </div>
                                {/*thumbnail slider:start*/}
                                <div className={'md:w-32 md:h-auto h-16 md:overflow-y-auto overflow-x-auto custom-scrollbar'}>
                                    <ul className={'whitespace-nowrap h-full w-full md:flex md:flex-col  flex-row md:gap-4 list-none m-0'}>
                                        {
                                            !_.isEmpty(project.data.images)?
                                                project.data.images.map((img, index) => (
                                                    <li onClick={() => setSelectedImage(img.image)} key={index}
                                                        className={`${index === selectedImage ? "active-thumb" : "single-project-thumb"} cursor-pointer  md:initial md:w-full w-20 h-20 object-cover object-center`}>
                                                        <img className={"w-full h-full object-cover"} src={img.small_image} alt=""/>
                                                    </li>
                                                )
                                            )
                                                :
                                                <></>
                                        }

                                    </ul>
                                </div>
                                {/*thumbnail slider:end*/}
                                {/*image slider:start*/}
                                <div className={'w-full flex relative border'}>
                                    <div className={"w-full absolute h-full blur-sm bg-cover"}/>
                                    <div className={`w-full h-full flex justify-between relative`}>
                                        {/*prev button*/}
                                        <div onClick={handlePrev}
                                             className={'flex items-center p-2 absolute left-0 top-2/4 -translate-y-2/4 cursor-pointer'}>
                                            <i className="fas fa-chevron-left p-2 bg-gray-600 text-white text-sm md:text-5xl"/>
                                        </div>
                                        {/*project image*/}
                                        <img className={'w-full object-contain'} src={selectedImage} alt=""/>
                                        {/*next button*/}
                                        <div onClick={handleNext}
                                             className={'flex items-center p-2 absolute right-0 top-2/4 -translate-y-2/4 cursor-pointer'}>
                                            <i className="fas fa-chevron-right p-2 bg-gray-600 text-white  text-sm md:text-5xl"/>
                                        </div>
                                    </div>
                                </div>

                                {/*image slider:end*/}
                            </div>
                            <div className="flex justify-center py-2 ">
                                <a className={"rounded-full border-2 w-10 h-10 flex justify-center items-center"} href={FACEBOOK}
                                   target={"_blank"} rel={"noopener noreferrer"}>
                                    <i className="fab fa-facebook-f text-gray-400"></i>
                                </a>
                            </div>
                        </>
                        :
                        <div className={"flex justify-center items-center h-40"}>
                            <h3 className={'w-full text-center'}>No Project Found</h3>
                        </div>


            }

        </div>
    );
};

export default SingleProject;