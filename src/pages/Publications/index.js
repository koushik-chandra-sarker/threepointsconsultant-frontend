import React from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {LinkPreview} from "@dhaiwat10/react-link-preview";
const Publication = () => {
    return (
        <div className={"page-full-height"}>
            <div className={'mt-10 flex flex-col gap-8'}>
                <div>
                    <h1 className={'text-2xl text-gray-500 mb-4'}>Archdaily</h1>
                    <div>
                        <Splide
                            options={ {
                                rewind: true,
                                // width : 800,
                                gap   : '1rem',
                                perPage: 4,
                                height: '22rem',
                                weight: '20rem',
                                cover: true,
                                pagination: false,
                                breakpoints: {
                                    1024: {
                                        perPage: 3,
                                    },
                                    767: {
                                        perPage: 2,
                                        // height: '12rem',

                                    },
                                    640: {
                                        perPage: 1,
                                        // height: '15rem',

                                    },
                                },
                            } }


                        >
                            <SplideSlide>
                                <LinkPreview className={"link-preview h-full-i"} url='https://boty.archdaily.com/us/2022/candidates/146671/shaer-mohammad-para-jame-mosque-slash-3-points-consultant'  />
                            </SplideSlide>
                            <SplideSlide>
                                <LinkPreview className={"link-preview h-full-i"} url='https://www.architravel.com/project/jinat-batika/?fbclid=IwAR2p1IPwJyWwqWR0b4U_roSUuf1zBTF7meHD0ys9aV5xsLO7Wa04Qtd8-x4'  />
                            </SplideSlide>
                            <SplideSlide>
                                <LinkPreview className={"link-preview h-full-i"} url='https://boty.archdaily.com/us/2022/candidates/146671/shaer-mohammad-para-jame-mosque-slash-3-points-consultant'  />
                            </SplideSlide>
                            <SplideSlide>
                                <LinkPreview className={"link-preview h-full-i"} url='https://www.architravel.com/project/jinat-batika/?fbclid=IwAR2p1IPwJyWwqWR0b4U_roSUuf1zBTF7meHD0ys9aV5xsLO7Wa04Qtd8-x4'  />
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>
                <div>
                    <h1 className={'text-2xl text-gray-500 mb-4'}>Archi Travel</h1>
                    <div>
                        <Splide
                            options={ {
                                rewind: true,
                                // width : 800,
                                gap   : '1rem',
                                perPage: 4,
                                height: '22rem',
                                weight: '20rem',
                                cover: true,
                                pagination: false,
                                breakpoints: {
                                    1024: {
                                        perPage: 3,
                                    },
                                    767: {
                                        perPage: 2,
                                        // height: '12rem',

                                    },
                                    640: {
                                        perPage: 1,
                                        // height: '15rem',

                                    },
                                },
                            } }


                        >
                            <SplideSlide>
                                <LinkPreview className={"link-preview h-full-i"} url='https://boty.archdaily.com/us/2022/candidates/146671/shaer-mohammad-para-jame-mosque-slash-3-points-consultant'  />
                            </SplideSlide>
                            <SplideSlide>
                                <LinkPreview className={"link-preview h-full-i"} url='https://www.architravel.com/project/jinat-batika/?fbclid=IwAR2p1IPwJyWwqWR0b4U_roSUuf1zBTF7meHD0ys9aV5xsLO7Wa04Qtd8-x4'  />
                            </SplideSlide>
                            <SplideSlide>
                                <LinkPreview className={"link-preview h-full-i"} url='https://boty.archdaily.com/us/2022/candidates/146671/shaer-mohammad-para-jame-mosque-slash-3-points-consultant'  />
                            </SplideSlide>
                            <SplideSlide>
                                <LinkPreview className={"link-preview h-full-i"} url='https://www.architravel.com/project/jinat-batika/?fbclid=IwAR2p1IPwJyWwqWR0b4U_roSUuf1zBTF7meHD0ys9aV5xsLO7Wa04Qtd8-x4'  />
                            </SplideSlide>
                        </Splide>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Publication;