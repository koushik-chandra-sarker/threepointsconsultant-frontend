import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {searchProjects} from "../../services/projects/Action";
import _ from "lodash";

const SearchDialog = ({state}) => {
    const [projectName, setProjectName] = useState('');
    const dispatch = useDispatch()
    const projects = useSelector(store => store.searchedProjects)
    const [close, setClose] = useState(false);
    function handleSearchProjects() {
        if (projectName){
            dispatch(searchProjects(projectName))
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setClose(!close)
        }, 400)
    }, [])
    function handleClose() {
        setClose(true)
        state.setOpenSearchDialog(false)
    }
    return (
        <div className={`${state.openSearchDialog? "animate__fadeInUp": "animate__fadeOutUpBig"} ${close?"":"h-0 w-0"} animate__animated absolute z-50 md:w-1/2 w-5/6 search-model overflow-hidden top-32 bg-white drop-shadow-2xl left-0 transition-all  duration-500 `}>
            <div className={'absolute right-5 top-3 cursor-pointer'} onClick={handleClose}>
                <i className="fas fa-times text-gray-400"/>
            </div>
            <div className="flex items-center justify-center mt-8 z-50 w-full">
                <div className="flex border-2 rounded w-5/6 md:w-auto justify-center ">
                    <input
                        onKeyPress={(e) => {e.key === 'Enter' && handleSearchProjects()}}
                        onChange={(e) => setProjectName(e.target.value)} type="text" className="px-4 py-2 md:w-80 w-full"
                           placeholder="Search..."/>
                    <button onClick={handleSearchProjects}
                            className="flex items-center justify-center px-4 border-l">
                        {/*<svg className="w-6 h-6 text-gray-600" fill="currentColor"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                            </svg>*/}
                        <i className="fas fa-search text-gray-400"/>
                    </button>
                </div>
            </div>
            <div className={"mt-2 overflow-y-auto content"}>
                {
                    projects.loading ?
                        <div className={"z-50 flex justify-center mt-8"}>
                            <span className="loader"/>
                        </div>
                        :
                        !_.isEmpty(projects.data)?
                            projects.data.map((project, i)=>(
                                <div className={'px-4 py-2'} key={`searched-project-${i}`}>
                                        <div className={'border flex gap-4 p-2'}>
                                            <img className={"w-20 h-20 object-cover"}
                                                 src={project.thumbnail}
                                                 alt=""/>
                                            <p className={""}>{project.name}</p>
                                        </div>
                                </div>
                            ))
                            :
                            <div className={"z-50 flex justify-center my-8"}>
                                <h3>Project Not Found</h3>
                            </div>

                }

            </div>
        </div>
    );
};

export default SearchDialog;