import React from 'react';
import {Link} from "react-router-dom";

const News = () => {
    return (
        <div className={"page-full-height"}>
            <div className={"grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2  gap-4 py-4"}>
                {
                    [1, 1, 1, 1, 1, 1, 1].map((v, i) => (
                        <Link to={"/news/1"}>
                            <div className={"rounded flex flex-col border divide-slate-200 overflow-hidden shadow-lg"}>
                                <img
                                    src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                    alt=""/>
                                <div className="px-6 py-4">
                                    <div className="font-bold md:text-base text:sm mb-2">Lorem ipsum dolor sit amet
                                    </div>
                                    <span className={'text-gray-700 md:text-sm text-xs'}> Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</span>
                                </div>
                            </div>
                        </Link>
                    ))
                }

            </div>
        </div>
    );
};

export default News;