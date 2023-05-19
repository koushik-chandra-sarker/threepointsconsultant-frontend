import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import _ from "lodash";
import dummyImg from "../../assets/images/dummyImage.jpg"
const PublicationCategory = (props) => {
    useEffect(()=>{
        console.log(props)
    })
    return (
        <div className={"page-full-height"}>
            {
                props.loading?
                    <div className={"w-full h-96 flex justify-center items-center"}>
                        <span className="loader"/>
                    </div> :
                !_.isEmpty(props.categories) ?
                    <div className={"grid xl:grid-cols-8 lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4 py-4 "}>
                        {
                            props.categories.map((v, i) => (
                                <Link to={`/publication/${v.id}`} key={`publication-${i}`}>
                                    <div
                                        className={"relative h-full rounded flex flex-col border divide-slate-200 overflow-hidden shadow-lg"}>
                                        <img className={"h-32 p-1 object-contain"}
                                             src={v.thumbnail? v.thumbnail: dummyImg}
                                             alt="thumbnail"/>
                                        <div className="h-12 flex justify-center items-center px-2 py-2 bg-gray-200 text-center">
                                            <div className="font-bold md:text-xs text-xs capitalize ">
                                                {v.name}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }

                    </div>
                    :
                    <div className={"flex justify-center items-center h-40"}>
                        <h3 className={'w-full text-center'}>Data Not Found</h3>
                    </div>
            }

        </div>
    );
};

export default PublicationCategory;