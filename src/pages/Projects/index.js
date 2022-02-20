import React from 'react';
import {NavLink} from "react-router-dom";

const Project = () => {
    return (
        <div className={"page-full-height"}>
            {/*projects menu*/}
           <div className={'flex justify-center'}>
               <ul className="md:flex pl-0 list-style-none ">
                   <li className="px-2 whitespace-nowrap "><NavLink to={"/project"}>All Project</NavLink></li>
                   <li className="px-2 whitespace-nowrap border-l-2"><NavLink to={"/project"}>Residential</NavLink></li>
                   <li className="px-2 whitespace-nowrap border-l-2"><NavLink to={"/project"}>Commercial</NavLink></li>
                   <li className="px-2 whitespace-nowrap border-l-2"><NavLink to={"/project"}>Industrial</NavLink></li>
                   <li className="px-2 whitespace-nowrap border-l-2"><NavLink to={"/project"}>Institutional</NavLink></li>
                   <li className="pl-2 whitespace-nowrap border-l-2"><NavLink to={"/project"}>Religious</NavLink></li>
               </ul>
           </div>

            {/*projects*/}
            <div className={"grid grid-cols-4 gap-4 mt-10"}>
                <div className={''}>
                    <img className={"w-full"} src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                </div>
                <div className={''}>
                    <img className={"w-full"} src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                </div><div className={''}>
                    <img className={"w-full"} src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                </div><div className={''}>
                    <img className={"w-full"} src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                </div><div className={''}>
                    <img className={"w-full"} src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                </div><div className={''}>
                    <img className={"w-full"} src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                </div><div className={''}>
                    <img className={"w-full"} src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                </div>



            </div>
        </div>
    );
};

export default Project;