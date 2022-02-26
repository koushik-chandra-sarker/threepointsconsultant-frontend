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
                                                <li className={"text-gray-600 px-2 cursor-pointer"}>
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
                                                <li className={"text-gray-600 px-2 cursor-pointer"}>
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
                                            <li className={"text-gray-600 border-l-2 pl-2 cursor-pointer"}>
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
                                                <li className={"text-gray-600 px-2 cursor-pointer"}>
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
                                                <li className={"text-gray-600 px-2 cursor-pointer"}>
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
                                            <li className={"text-gray-600 border-l-2 pl-2 cursor-pointer"}>
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
                                    <div className={"w-full absolute h-full blur-sm bg-cover"}
                                         style={{backgroundImage: "url(" + `${selectedImage}` + ")"}}/>
                                    <div className={`w-full h-full flex justify-between relative p-4`}>
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