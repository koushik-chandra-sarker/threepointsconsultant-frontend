import React, {useEffect} from 'react';
import {Link, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProjectList} from "../../services/projects/Action";
import _ from "lodash";

const projectCategory = ["All Project", "Residential", "Commercial", "Industrial", "Institutional", "Religious"];

const Project = (props) => {

    const [selectedProject, setSelectedProject] = React.useState(0);
    const dispatch = useDispatch();
    const projectList = useSelector(state => state.projectList);

    function handleSelectProject(categoryId) {
        setSelectedProject(categoryId);
        getProjects(categoryId);
    }

    useEffect(() => {
        if (props.category) {
            setSelectedProject(props.category[0].id);
            getProjects(props.category[0].id);
        }
    }, [props.category]);

    function getProjects(categoryId) {
        dispatch(getProjectList(categoryId));
    }

    return (
        <div className={"page-full-height"}>
            {/*projects menu*/}
            <div className={'md:flex justify-center hidden'}>
                <ul className="md:flex pl-0 list-none">
                    {
                        props.category && props.category.map((category, index) => (
                                <li onClick={() => handleSelectProject(category.id)}
                                    className={`px-2 whitespace-nowrap cursor-pointer ${index === 0 ? "" : "border-l-2"} `}
                                    key={`project-category-${index}`}>
                                <span
                                    className={`${category.id === selectedProject ? "project-cat-active" : ""}`}>{category.name}</span>

                                </li>
                            )
                        )}
                </ul>
            </div>
            <select
                onChange={(e) => handleSelectProject(e.target.value, 0)}
                className="md:hidden form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label=".form-select-sm example"

            >
                {
                    props.category &&
                    props.category.map((category, index) => {
                        return (
                            <option value={category.id} selected={category.id === selectedProject}
                                    key={`project-category-mobile-${index}`}>{category.name}</option>
                        )
                    })}
                {/*<option selected>All Project</option>
                <option value="1">Residential</option>
                <option value="2">Commercial</option>
                <option value="3">Industrial</option>
                <option value="3">Institutional</option>
                <option value="3">Religious</option>*/}
            </select>
            {/*projects*/}
            {
                projectList.loading ?
                    // true?
                    <div className={"w-full h-96 flex justify-center items-center"}>
                        {/*<i className="fas fa-spinner fa-spin text-4xl "></i>*/}
                        <span className="loader"></span>
                    </div> :
                    !_.isEmpty(projectList.data) ?
                        <div className={"grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10"}>
                            {
                                projectList.data.map((project, i) => (
                                    <Link to={`/project/${project.type}/${project.id}`} key={`project-${i}`}
                                          className={`animate__animated ${selectedProject % 2 === 0 ? "animate__fadeInLeft" : "animate__fadeInRight"}`}>
                                        <div className={'relative project-card'}>
                                            <img className={"w-full"}
                                                 src={project.thumbnail}
                                                 alt=""/>
                                            {/*title*/}
                                            <div
                                                className={'project-card-title w-full  text-white px-2 py-2 absolute bottom-0 left-0'}>
                                                <h3 className={' w-full text-base text-center font-bold'}>{project.name}</h3>
                                            </div>
                                        </div>
                                    </Link>
                                ))

                            }

                        </div>
                        :
                        <div className={"flex justify-center items-center h-40"}>
                            <h3 className={'w-full text-center'}>No Project Found</h3>
                        </div>


            }

        </div>
    );
};

export default Project;