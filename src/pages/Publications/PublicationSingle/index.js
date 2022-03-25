import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {getPublication} from "../../../services/publication/Action";

const PublicationSingle = () => {
    const {id} = useParams();
    const publication = useSelector(state => state.publication);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPublication(id));
    }, [id]);
    return (
        <div className={' lg:w-2/4 w-full  h-1.5 mx-auto page-full-height'}>
            {
                publication.loading ?
                    <div className={"w-full h-96 flex justify-center items-center"}>
                        <span className="loader"/>
                    </div> :
                    !_.isEmpty(publication.data) ?
                        <div>
                            <div dangerouslySetInnerHTML={{__html:publication.data.content}}/>
                            <div className={'flex gap-8 flex-col my-4'}>
                                {
                                    publication.data.megazines &&
                                    publication.data.megazines.map((v, i) => {
                                        return (
                                            <img key={`publication-image-${i}`} className="object-cover"
                                                 alt={`publication-image-${i}`}
                                                 src={v.magazine}/>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        :
                        <div className={"flex justify-center items-center h-40"}>
                            <h3 className={'w-full text-center'}>Publication Not Found</h3>
                        </div>


            }

        </div>
    );
};

export default PublicationSingle;