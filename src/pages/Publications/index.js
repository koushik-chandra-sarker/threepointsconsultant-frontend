import React from 'react';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import {LinkPreview} from "@dhaiwat10/react-link-preview";
import _ from "lodash";
import logo from "../../assets/images/logo .png";
import {Helmet} from "react-helmet";
const Publication = (props) => {
    return (
        <div className={"page-full-height"}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Publication | 3pointsconsultant-An Architectural Consulting Firm, Architecture Firm in bangladesh, Tapon Sarker Architects,
                    Consulting agency, Architectural Designer, Engineering Service  </title>
                {/*meta for publication page*/}
                <meta name="description" content="3PointsConsultant is a professional architectural firm, Architectural firm in Bangladesh,
                    Tapon Sarker Architects, Consulting agency, Architectural Designer, Engineering Service" />
                <meta name="keywords" content="publication, publication of 3PointsConsultant, publication in 3PointsConsultant, Architectural publication in dhaka,Architectural publication in bangladesh, Architectural firm in Bangladesh, Tapon Sarker Architects,
                    Consulting agency, Architectural Designer, Engineering Service" />
                <meta name="author" content="3PointsConsultant" />
                <meta name="copyright" content="3points consultant"/>
                <meta name="robots" content="index, follow"/>
                <meta name="revisit-after" content="1 days"/>
                <meta name="distribution" content="global"/>
                <meta name="rating" content="general"/>
                <meta name="language" content="english"/>
                <meta name="doc-type" content="Web Page"/>
                <meta name="doc-class" content="Completed"/>
                <meta name="doc-rights" content="Public"/>
                <meta name="doc-rating" content="Safe For Kids"/>

                {/*meta for web page share*/}
                <meta property="og:title" content="3points consultant- an architecture design firm was formed in March 2012 .This promising firm is now involved with various types of projects such as residential, commercial, industrial, garments and interior design and execution.Principle architect himself is the founder of this firm. He is a BUET graduate and also MIAB .He has over five years job experience under some renowned consultancy firms of Dhaka city. Now he and his team are fully involved with 3points and working for a better society and environment." />
                <meta property="og:description" content="3 points consultant- an architecture design firm was formed in March 2012 .This promising firm is now involved with various types of projects such as residential, commercial, industrial, garments and interior design and execution.Principle architect himself is the founder of this firm. He is a BUET graduate and also MIAB .He has over five years job experience under some renowned consultancy firms of Dhaka city. Now he and his team are fully involved with 3points and working for a better society and environment." />
                <meta property="og:image" content={logo} />
                <meta property="og:url" content="https://3pointsconsultant.com" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="3pointsconsultant" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="bn_BD" />

                {/*meta for twitter*/}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@3points_consultant" />
                <meta name="twitter:creator" content="@3points_consultant" />
                <meta name="twitter:title" content="3points consultant- an architecture design firm was formed in March 2012 .This promising firm is now involved with various types of projects such as residential, commercial, industrial, garments and interior design and execution.Principle architect himself is the founder of this firm. He is a BUET graduate and also MIAB .He has over five years job experience under some renowned consultancy firms of Dhaka city. Now he and his team are fully involved with 3points and working for a better society and environment." />
                <meta name="twitter:description" content="3 points consultant- an architecture design firm was formed in March 2012 .This promising firm is now involved with various types of projects such as residential, commercial, industrial, garments and interior design and execution.Principle architect himself is the founder of this firm. He is a BUET graduate and also MIAB .He has over five years job experience under some renowned consultancy firms of Dhaka city. Now he and his team are fully involved with 3points and working for a better society and environment." />
                <meta name="twitter:image" content={logo} />
                <meta name="twitter:image:alt" content="3points consultant" />
                <meta name="twitter:image:width" content="1200" />
                <meta name="twitter:image:height" content="630" />
                <meta name="twitter:image:type" content="image/png" />
                <meta name="twitter:image:alt" content="3points consultant" />
            </Helmet>
            <div className={'mt-10 flex flex-col gap-8'}>
                {
                    props.categorys && props.categorys.map((category, index)=>(
                        <div key={`publication-${index}`}>
                            <h1 className={'text-2xl text-gray-500 mb-4'}>{category.name}</h1>
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
                                    {
                                        !_.isEmpty(category.publications)?
                                            category.publications.map((publication, i)=>(
                                                <SplideSlide key={`publucation-${category.name}-${i}`}>
                                                    <LinkPreview className={"link-preview h-full-i"} url={publication.link}
                                                                 fallbackImageSrc={publication.image}
                                                    />
                                                </SplideSlide>
                                            ))
                                            :
                                            <>Publication not found in this category</>
                                    }
                                </Splide>
                            </div>
                        </div>
                    ))
                }

                {/*<div>
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
                </div>*/}

            </div>


        </div>
    );
};

export default Publication;