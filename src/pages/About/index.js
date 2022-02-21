import React from 'react';
import Modal from "../../components/Modal";

const About = () => {
    return (
        <div className={"page-full-height mt-5 leading-8 text-gray-600"}>
            <h2 className={'text-2xl mb-2 font-bold'}>Background & Philosophy</h2>
            <p className={"text-sm md:text-base text-justify"}>
                3 Points Consultant, an architecture design firm was formed in March 2012. Principal architect himself
                is the founder of this firm. He graduated from Bangladesh University of Engineering and Technology
                (BUET) and is a member of Institute of Architects Bangladesh (IAB). Architects and engineers work here
                with close collaboration for the development of any project. This promising firm is now involved with
                various types of projects such as residential, commercial, industrial, religious, urban Planning and
                interior design. The main design ideology of this firm is "simple planning with greater impact". Our
                major design considerations deal with simplicity, respecting context, blending regionalism and
                modernity. Interdisciplinary approach and teamwork is our strength. We encourage proper coordination
                with the construction team for the betterment of projects. Respecting different context and program we
                try to give different approaches yet maintain a signature mark that represents our identity. A better
                society and healthy environment is always our concern.
            </p>
            <h2 className={'text-2xl mt-5 font-bold'}>Services</h2>
            <ul className={'list-disc list-inside text-sm md:text-base'}>
                <li>Architectural design</li>
                <li>Structural design</li>
                <li>Landscape design</li>
                <li>MEP design</li>
                <li>Urban Planning & design</li>
                <li>Construction management</li>
                <li>Interior design</li>

            </ul>
            <h2 className={'text-2xl mt-5 font-bold'}>Studio</h2>
            <section className="text-gray-600 body-font mt-4 flex gap-8 flex-wrap">
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
                    [1, 2, 3, 4, 5, 6, 7, 8, 10,1,1,1,1].map((v, i) => (
                        <Modal
                            content={
                                <div
                                    className="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
                                    <div
                                        className="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-56 w-56">
                                        <img
                                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                            alt=""
                                            className="h-full w-full"/>
                                    </div>

                                    <h2 className="mt-4 font-bold text-xl">Mohammad Kowsur Hasan </h2>
                                    <h6 className="mt-2 text-sm font-medium">Assistant Architect & lighting design
                                        expert</h6>
                                    <h6 className={'mt-2 text-sm font-extrabold'}>B.S.C in Civil (DUET), M.S.C in Civil
                                        (BUET)</h6>

                                    <p className="text-xs text-gray-500 text-center mt-3">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae
                                        nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
                                        molestiae
                                        nulla.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim
                                        molestiae
                                        nulla.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae
                                        nulla.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab enim molestiae
                                        nulla.
                                    </p>

                                    <ul className="flex flex-row mt-4 space-x-2">
                                        <li>
                                            <a href=""
                                               className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                                                <i className="fab fa-facebook text-blue-700"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href=""
                                               className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                                                <i className="fab fa-twitter text-blue-400"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href=""
                                               className="flex items-center justify-center h-8 w-8 border rounded-full text-gray-800 border-gray-800">
                                                <i className="fab fa-instagram text-red-500"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            }

                        >
                            <div className="flex flex-col w-36">
                                <img alt="team"
                                     className="flex-shrink-0  w-36 h-36 object-cover object-center "
                                     src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"/>
                                <div className="w-full mt-2">
                                    <h2 className="title-font font-medium text-xs text-gray-900">Mohammad Kowsur
                                        Hasan </h2>
                                    {/*<h3 className="text-gray-500 text-xs">Principal Architect</h3>*/}
                                    <h3 className="text-gray-500 text-xs">Assistant Architect & lighting design
                                        expert</h3>
                                    {/*<p className="text-xs"> B.ARCH (BUET), MIAB </p>*/}
                                    <p className="text-xs"> B.S.C in Civil (DUET), M.S.C in Civil (BUET)</p>
                                </div>
                            </div>

                        </Modal>
                    ))
                }


            </section>
        </div>
    );
};

export default About;