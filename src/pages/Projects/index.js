import React from 'react';
import {Link, Outlet} from "react-router-dom";

const projectCategory = ["All Project", "Residential", "Commercial", "Industrial", "Institutional", "Religious"];

const Project = () => {

    const [selectedProject, setSelectedProject] = React.useState('All Project');
    const [selectedProjectIndex, setSelectedProjectIndex] = React.useState(0);

    function handleSelectProject(category, index) {
        setSelectedProject(category);
        setSelectedProjectIndex(index);
        console.log(category)

    }

    return (
        <div className={"page-full-height"}>
            {/*projects menu*/}
            <div className={'md:flex justify-center hidden'}>
                <ul className="md:flex pl-0 list-style-none ">
                    {projectCategory.map((category, index) => (
                            <li onClick={() => handleSelectProject(category, index)}
                                className={`px-2 whitespace-nowrap cursor-pointer ${index === 0 ? "" : "border-l-2"} `}
                                key={index}>
                                <span
                                    className={`${category === selectedProject ? "project-cat-active" : ""}`}>{category}</span>

                            </li>
                        )
                    )}
                </ul>
            </div>
            <select
                onChange={(e) => handleSelectProject(e.target.value, 0)}
                className="md:hidden form-select form-select-sm appearance-none block w-full px-2 py-1 text-sm font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-label=".form-select-sm example">
                {projectCategory.map((category, index) => {
                    return (
                        <option selected={category === selectedProject} key={index}>{category}</option>
                    )
                })}
                {/*<option selected>All Project</option>
                <option value="1">Residential</option>
                <option value="2">Commercial</option>
                <option value="3">Industrial</option>
                <option value="3">Institutional</option>
                <option value="3">Religious</option>*/}
            </select>
            <Outlet/>
            {/*projects*/}
            <div className={"grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-10"}>
                <Link to={`/project/1`}>
                    <div className={'relative project-card'}>
                        <img className={"w-full"}
                             src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                             alt=""/>
                        {/*title*/}
                        <div className={'project-card-title w-full  text-white px-2 py-2 absolute bottom-0 left-0'}>
                            <h3 className={' w-full text-base text-center font-bold'}>Project title</h3>
                        </div>
                    </div>
                </Link>
                <div className={'relative project-card'}>
                    <img className={"w-full"}
                         src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                         alt=""/>
                    {/*title*/}
                    <div className={'project-card-title w-full  text-white px-2 py-2 absolute bottom-0 left-0'}>
                        <h3 className={' w-full text-base text-center font-bold'}>Project title</h3>
                    </div>
                </div>
                <div className={'relative project-card'}>
                    <img className={"w-full"}
                         src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                         alt=""/>
                    {/*title*/}
                    <div className={'project-card-title w-full  text-white px-2 py-2 absolute bottom-0 left-0'}>
                        <h3 className={' w-full text-base text-center font-bold'}>Project title</h3>
                    </div>
                </div>
                <div className={'relative project-card'}>
                    <img className={"w-full"}
                         src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                         alt=""/>
                    {/*title*/}
                    <div className={'project-card-title w-full  text-white px-2 py-2 absolute bottom-0 left-0'}>
                        <h3 className={' w-full text-base text-center font-bold'}>Project title</h3>
                    </div>
                </div>
                <div className={'relative project-card'}>
                    <img className={"w-full"}
                         src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                         alt=""/>
                    {/*title*/}
                    <div className={'project-card-title w-full  text-white px-2 py-2 absolute bottom-0 left-0'}>
                        <h3 className={' w-full text-base text-center font-bold'}>Project title</h3>
                    </div>
                </div>
                <div className={'relative project-card'}>
                    <img className={"w-full"}
                         src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                         alt=""/>
                    {/*title*/}
                    <div className={'project-card-title w-full  text-white px-2 py-2 absolute bottom-0 left-0'}>
                        <h3 className={' w-full text-base text-center font-bold'}>Project title</h3>
                    </div>
                </div>
                <div className={'relative project-card'}>
                    <img className={"w-full"}
                         src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                         alt=""/>
                    {/*title*/}
                    <div className={'project-card-title w-full  text-white px-2 py-2 absolute bottom-0 left-0'}>
                        <h3 className={' w-full text-base text-center font-bold'}>Project title</h3>
                    </div>
                </div>
                <div className={'relative project-card'}>
                    <img className={"w-full"}
                         src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                         alt=""/>
                    {/*title*/}
                    <div className={'project-card-title w-full  text-white px-2 py-2 absolute bottom-0 left-0'}>
                        <h3 className={' w-full text-base text-center font-bold'}>Project title</h3>
                    </div>
                </div>

                <div className={'relative project-card'}>
                    <img className={"w-full"}
                         src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                         alt=""/>
                    {/*title*/}
                    <div className={'project-card-title w-full  text-white px-2 py-2 absolute bottom-0 left-0'}>
                        <h3 className={' w-full text-base text-center font-bold'}>Project title</h3>
                    </div>
                </div>

                <div className={'relative project-card'}>
                    <img className={"w-full"}
                         src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                         alt=""/>
                    {/*title*/}
                    <div className={'project-card-title w-full  text-white px-2 py-2 absolute bottom-0 left-0'}>
                        <h3 className={' w-full text-base text-center font-bold'}>Project title</h3>
                    </div>
                </div>

                <div className={'relative project-card'}>
                    <img className={"w-full"}
                         src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                         alt=""/>
                    {/*title*/}
                    <div className={'project-card-title w-full  text-white px-2 py-2 absolute bottom-0 left-0'}>
                        <h3 className={' w-full text-base text-center font-bold'}>Project title</h3>
                    </div>
                </div>

                <div className={'relative project-card'}>
                    <img className={"w-full"}
                         src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                         alt=""/>
                    {/*title*/}
                    <div className={'project-card-title w-full  text-white px-2 py-2 absolute bottom-0 left-0'}>
                        <h3 className={' w-full text-base text-center font-bold'}>Project title</h3>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Project;