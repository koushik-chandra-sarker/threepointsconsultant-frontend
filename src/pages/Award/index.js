import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {getAwardList} from "../../services/award/Action";

const Award = () => {
    const awardList = useSelector(state => state.awardList);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAwardList());
    }, []);

    return (
        <div className={"page-full-height"}>
            {
                awardList.loading?
                    <div className={"w-full h-96 flex justify-center items-center"}>
                        <span className="loader"/>
                    </div> :
                    !_.isEmpty(awardList.data)?
                        <div className={"grid xl:grid-cols-3 lg:grid-cols-2  gap-4 py-4 "}>
                            {
                                awardList.data.map((v, i) => (
                                    <Link to={`/accolades/${v.id}`} key={`award-${i}`}>
                                        <div className={"h-full rounded flex flex-col border divide-slate-200 overflow-hidden shadow-lg"}>
                                            <img className={"h-52 object-cover"}
                                                src={v.thumbnail}
                                                alt="thumbnail"/>
                                            <div className="px-6 py-4">
                                                <div className="font-bold md:text-base text:sm mb-2">
                                                    {v.title}
                                                </div>
                                                <span className={'text-gray-700 md:text-sm text-xs'}>
                                                    {v.subTitle}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            }

                        </div>
                        :
                        <div className={"flex justify-center items-center h-40"}>
                            <h3 className={'w-full text-center'}>No Accolades  Found</h3>
                        </div>
            }

        </div>
    );
};

export default Award;