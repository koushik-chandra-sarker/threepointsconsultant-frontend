import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getNewsList} from "../../services/news/Action";
import _ from "lodash";

const News = () => {
    const newsList = useSelector(state => state.newsList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNewsList());
    }, []);

    return (
        <div className={"page-full-height"}>
            {
                newsList.loading?
                    <div className={"w-full h-96 flex justify-center items-center"}>
                        <span className="loader"/>
                    </div> :
                    !_.isEmpty(newsList.data)?
                        <div className={"grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 gap-4 py-4 "}>
                            {
                                newsList.data.map((v, i) => (
                                    <Link to={`/news/${v.id}`} key={`news-${i}`}>
                                        <div className={"h-full rounded flex flex-col border divide-slate-200 overflow-hidden shadow-lg"}>
                                            <img className={"h-52 object-cover"}
                                                src={v.thumbnail}
                                                alt="thumbnail"/>
                                            <div className="px-6 py-4">
                                                <div className="font-bold md:text-base text:sm mb-2">
                                                    {v.title}
                                                </div>
                                                <span className={'text-gray-700 md:text-sm text-xs'}>
                                                    {v.subtitle}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }

                        </div>
                        :
                        <div className={"flex justify-center items-center h-40"}>
                            <h3 className={'w-full text-center'}>No News Found</h3>
                        </div>
            }

        </div>
    );
};

export default News;