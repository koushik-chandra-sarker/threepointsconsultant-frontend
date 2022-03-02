import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getNews, getNewsList} from "../../../services/news/Action";
import _ from "lodash";

const NewsSingle = () => {
    const {id} = useParams();
    const news = useSelector(state => state.news);
    console.log(news);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getNews(id));
    }, [id]);
    return (
        <div className={' lg:w-2/4 w-full  h-1.5 mx-auto page-full-height'}>
            {
                news.loading ?
                    <div className={"w-full h-96 flex justify-center items-center"}>
                        <span className="loader"/>
                    </div> :
                    !_.isEmpty(news.data) ?
                        <div>
                          <div dangerouslySetInnerHTML={{__html:news.data.content}}/>
                            <div>
                                {
                                    news.data.videoType === 'Link'?
                                        news.data.videoLink &&
                                        <iframe className={"w-full py-8 lg:h-128 md:h-96"} src={news.data.videoLink}
                                                title="video player" frameBorder="0" noDownload
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen>

                                        </iframe>
                                        :
                                        news.data.video &&
                                        <iframe className={"w-full py-8 py-8 lg:h-128 md:h-96 "} src={news.data.video}
                                                title="video player" frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen>

                                        </iframe>
                                }

                            </div>
                            <div className={'flex gap-4 flex-col my-4'}>
                                {
                                    news.data.images &&
                                    news.data.images.map((v, i) => {
                                        return (
                                            <img key={`news-image-${i}`} className="object-cover"
                                                 alt={`news-image-${i}`}
                                                 src={v.image}/>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        :
                        <div className={"flex justify-center items-center h-40"}>
                            <h3 className={'w-full text-center'}>No News Found</h3>
                        </div>


            }

           </div>
    );
};

export default NewsSingle;