import React from 'react';
import Modal from "../../components/Modal";
import _ from "lodash";
import gmail_icon from "../../assets/icon/gmail_icon.png"
const About = (props) => {
    return (
        <div className={"page-full-height mt-5 leading-8 text-gray-600"}>
            {
                !_.isEmpty(props.about) ?
                    <>
                        <div dangerouslySetInnerHTML={{__html: props.about[0].content}}/>
                        {
                            props.about[0].teams &&
                            <>
                                <h2 className={'text-2xl mt-5 font-bold'}>Studio</h2>
                                <section
                                    className="text-gray-600 body-font mt-4 grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 sm:grid-col-3 grid-cols-2 gap-8">
                                    {/*{
                    [1, 2, 3, 4, 5, 6, 7, 8, 10].map((v, i) => (
                        <>
                            <div className="flex flex-col w-36">
                                <img alt="team"
                                     className="flex-shrink-0  w-32 h-32 object-cover object-center "
                                     src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                                no image div
                                <div className={'w-36 h-36 text-xs flex justify-center items-center bg-gray-300'}>
                                    <span>No Picture</span>
                                </div>
                                <div className="w-full mt-2">
                                    <h2 className="title-font font-medium text-xs text-gray-900">Tapon Kanti
                                        Sarker </h2>
                                    <h3 className="text-gray-500 text-xs">Principal Architect</h3>
                                    <p className="text-xs"> B.ARCH (BUET), MIAB </p>
                                </div>
                            </div>
                            <div className="flex flex-col w-36">
                                <img alt="team"
                                     className="flex-shrink-0  w-36 h-36 object-cover object-center "
                                     src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/>
                                <div className="w-full mt-2">
                                    <h2 className="title-font font-medium text-xs text-gray-900">Mohammad Kowsur
                                        Hasan </h2>
                                    <h3 className="text-gray-500 text-xs">Principal Architect</h3>
                                    <h3 className="text-gray-500 text-xs">Assistant Architect & lighting design
                                        expert</h3>
                                    <p className="text-xs"> B.ARCH (BUET), MIAB </p>
                                    <p className="text-xs"> B.S.C in Civil (DUET), M.S.C in Civil (BUET)</p>
                                </div>
                            </div>
                        </>
                    ))
                }*/}
                                    {
                                        props.about[0].teams.map((team, i) => (
                                            <Modal
                                                content={
                                                    <div
                                                        className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
                                                        <div
                                                            className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-56 w-56">
                                                            {
                                                                !_.isEmpty(team.profilePicSmall) ?
                                                                    <img
                                                                        src={team.profilePicSmall}
                                                                        alt="image"
                                                                        className="h-full w-full"/>
                                                                    :
                                                                    <div className={'h-full w-fulltext-xs flex justify-center items-center bg-gray-300'}>
                                                                        <span>No Picture</span>
                                                                    </div>
                                                            }


                                                        </div>

                                                        <h2 className="mt-4 mb-0 font-bold text-xl">{team.name}</h2>
                                                        <h6 className="mt-2 mb-0 text-sm font-medium">
                                                            {team.designation}
                                                        </h6>
                                                        <h6 className={'mt-2 text-sm font-extrabold mb-0'}>
                                                            {team.degree}
                                                        </h6>

                                                            <div className="text-center text-xs pt-0 mt-0" dangerouslySetInnerHTML={{__html:team.description}}/>


                                                        <ul className="flex flex-row mt-4 space-x-2 list-none">
                                                            {
                                                                team.facebookLink &&
                                                                <li>
                                                                    <a href=""
                                                                       className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                                                                        <i className="fab fa-facebook text-blue-700"/>
                                                                    </a>
                                                                </li>
                                                            }
                                                            {
                                                                team.linkedinLink &&
                                                                <li>
                                                                    <a href=""
                                                                       className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                                                                        <i className="fab fa-linkedin text-blue-600"/>
                                                                    </a>
                                                                </li>
                                                            }

                                                            {
                                                                team.emailAddress &&
                                                                <li>
                                                                    <a href=""
                                                                       className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                                                                        {/*<i className="fas fa-envelope text-red-500"/>*/}
                                                                        <div className={"w-4"}>
                                                                            <img  src={gmail_icon} alt=""/>
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            }

                                                        </ul>
                                                    </div>
                                                }

                                            >
                                                <div className="flex flex-col cursor-pointer ">
                                                    {
                                                        !_.isEmpty(team.profilePicSmall) ?
                                                            <img alt="team"
                                                                 className="flex-shrink-0 object-cover object-center md:h-48 h-40"
                                                                 src={team.profilePicSmall}
                                                                 />
                                                            :
                                                            <div className={'md:h-48 h-40 w-full text-xs flex justify-center items-center bg-gray-100'}>
                                                                <span>No Picture</span>
                                                            </div>
                                                    }

                                                    <div className="w-full mt-2">
                                                        <h2 className="title-font font-medium text-xs text-gray-900">
                                                            {team.name}
                                                        </h2>
                                                        {/*<h3 className="text-gray-500 text-xs">Principal Architect</h3>*/}
                                                        <h3 className="text-gray-500 text-xs">
                                                            {team.designation}
                                                        </h3>
                                                        {/*<p className="text-xs"> B.ARCH (BUET), MIAB </p>*/}
                                                        <p className="text-xs">
                                                            {team.degree}
                                                        </p>
                                                    </div>
                                                </div>

                                            </Modal>
                                        ))
                                    }


                                </section>
                            </>
                        }


                    </>
                    : <></>
            }

        </div>
    );
};

export default About;