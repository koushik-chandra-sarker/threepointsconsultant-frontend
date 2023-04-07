import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import _ from "lodash";
import {LinkPreview} from "@dhaiwat10/react-link-preview";


const PublicationsList = (props) => {
    const params = useParams();
    const [selectedCategory, setSelectedCategory] = useState(params.categoryId);
    const publicationCategories = props.categories
    const [publicationList, setPublicationList] = useState([])
    const [loading, setLoading] = useState(true)

    function handleSelectProject(categoryId) {
        setSelectedCategory(categoryId);
        makePublicationList(categoryId);
    }

    useEffect(() => {
        setSelectedCategory(selectedCategory);
        makePublicationList(selectedCategory);
    }, [props.categories]);

    function makePublicationList(categoryId) {
        setLoading(true)
        if (!_.isEmpty(publicationCategories)) {
            let selectedCategory = publicationCategories.find(({id}) => id == categoryId)
            setPublicationList(selectedCategory.publications)
        }
        setLoading(false)
    }

    return (
        <div className={"page-full-height flex gap-10"}>

            {/*menu*/}
            {
                <div className={'w-2/12 md:flex justify-start hidden sticky top-0 pt-5 pb-2 z-10 bg-white '}>
                    <ul className="md:flex flex-col gap-2 ml-0  list-none ">
                        {
                            publicationCategories && publicationCategories.map((category, index) => (
                                    <li onClick={() => handleSelectProject(category.id)}
                                        className={` capitalize pr-2 whitespace-nowrap cursor-pointer `}
                                        key={`project-category-${index}`}>
                                <span
                                    className={`${category.id == selectedCategory ? "project-cat-active" : ""}`}>{category.name}</span>
                                    </li>
                                )
                            )
                        }
                    </ul>
                </div>
            }

            {/*content*/}
            {
                loading ?
                    <div className={"w-full h-96 flex justify-center items-center"}>
                        <i className="fas fa-spinner fa-spin text-4xl "></i>
                        <span className="loader"></span>
                    </div> :
                    !_.isEmpty(publicationList) ?
                        <div className={"w-full md:w-10/12"}>
                            <div className={"grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-5"}>
                                {publicationList.map((publication, i) => (
                                    publication.type === "Magazine" && publication.manualContent ?
                                        <Link key={i} to={`/magazine/${publication.id}`}>
                                            <div className={"h-full rounded flex flex-col border divide-slate-200 overflow-hidden shadow-lg"}>
                                                <img className={"h-52 object-cover"}
                                                     src={publication.image}
                                                     alt="thumbnail"/>
                                                <div className="px-6 py-4">
                                                    <h4 className="mb-2 mt-0">
                                                        {publication.title}
                                                    </h4>
                                                    <div className={'overflow-hidden whitespace-nowrap text-ellipsis '}>
                                                         <span
                                                             className={'text-gray-500 md:text-base text-xs '}>
                                                            {publication.subTitle}
                                                         </span>
                                                    </div>
                                                    <div className={"mt-1"}>
                                                    <span
                                                        className={'text-gray-500 md:text-base text-xs capitalize '}>
                                                        {publication.category.name}
                                                    </span>
                                                    </div>
                                                </div>
                                            </div>

                                        </Link>
                                        :
                                        publication.manualContent ?
                                            <a key={i} href={publication.link} target={"_blank"}
                                               className={"cursor-pointer"}>
                                                <div className={"h-full rounded flex flex-col border divide-slate-200 overflow-hidden shadow-lg"}>
                                                    <img className={"h-52 object-cover"}
                                                         src={publication.image}
                                                         alt="thumbnail"/>
                                                    <div className="px-6 py-4">
                                                        <h4 className="mb-2 mt-0">
                                                            {publication.title}
                                                        </h4>
                                                        <div className={'overflow-hidden whitespace-nowrap text-ellipsis '}>
                                                         <span
                                                             className={'text-gray-500 md:text-base text-xs '}>
                                                            {publication.subTitle}
                                                         </span>
                                                        </div>
                                                        <div className={"mt-1"}>
                                                        <span
                                                            className={'text-gray-500 md:text-base text-xs capitalize '}>
                                                            {publication.category.name}
                                                        </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                            :
                                            <LinkPreview key={i} className={"link-preview h-full-i"}
                                                         url={publication.link}
                                                         fallbackImageSrc={publication.image}
                                            />

                                ))
                                }
                            </div>
                        </div>

                        :
                        <div className={"flex justify-center items-center h-40"}>
                            <h3 className={'w-full text-center'}>Publication not found in this category</h3>
                        </div>


            }

        </div>
    );
};

export default PublicationsList;