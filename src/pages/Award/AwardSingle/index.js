import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {getAward} from "../../../services/award/Action";

const AwardSingle = () => {
    const {id} = useParams();
    const award = useSelector(state => state.award);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAward(id));
    }, [id]);
    return (
        <div className={' lg:w-2/4 w-full  h-1.5 mx-auto page-full-height'}>
            {
                award.loading ?
                    <div className={"w-full h-96 flex justify-center items-center"}>
                        <span className="loader"/>
                    </div> :
                    !_.isEmpty(award.data) ?
                        <div>
                            <h2>{award.data.title}</h2>
                            <h4>{award.data.subTitle}</h4>
                            {award.data.awarded_date &&
                                <h5>Date: {new Date(award.data.awarded_date).toDateString()}</h5>}
                            {award.data.link && <a href={award.data.link} className={"text-blue-500 text-sm"}
                                                   target={"_blank"}
                                                   rel={"noreferrer"}>Visit the actual site</a>}
                            <div className={'flex gap-8 flex-col my-4'}>
                                {
                                    award.data.images &&
                                    award.data.images.map((v, i) => {
                                        return (
                                            <img key={`news-image-${i}`} className="object-cover"
                                                 alt={`news-i-${i}`}
                                                 src={v.image}/>
                                        )
                                    })
                                }
                            </div>
                            <div dangerouslySetInnerHTML={{__html: award.data.content}}/>

                        </div>

                        :
                        <div className={"flex justify-center items-center h-40"}>
                            <h3 className={'w-full text-center'}>No Accolades Found</h3>
                        </div>


            }

        </div>
    );
};

export default AwardSingle;