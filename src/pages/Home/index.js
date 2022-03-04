import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import customCss from './Home.module.scss'
import _ from "lodash"
import {Helmet} from "react-helmet";
import logo from "../../assets/images/logo .png"
import {DOMAIN} from "../../constants";
const Home = (props) => {
    return (
        <div className={"page-full-height"}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>3PointsConsultant-An Architectural Consulting Firm, Architecture Firm in bangladesh, Tapon Sarker Architects,
                    Consulting agency, Architectural Designer, Engineering Service  </title>
                <meta name="description" content="3 points consultant- an architecture design firm was formed in March 2012 .This promising firm is now involved with various types of projects such as residential, commercial, industrial, garments and interior design and execution.Principle architect himself is the founder of this firm. He is a BUET graduate and also MIAB .He has over five years job experience under some renowned consultancy firms of Dhaka city. Now he and his team are fully involved with 3points and working for a better society and environment." />
                {/*meta keywords for Architecture Firm*/}
                <meta name="keywords" content="3points, 3points consultant, 3points consultant in bangladesh, 3points consultant in dhaka, 3points consultant in dhaka city"/>
                <meta name="author" content="3points consultant"/>
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
                <meta property="og:image" content={`${DOMAIN}${logo}`} />
                <meta property="og:url" content={DOMAIN} />
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
            <div className={"md:inline hidden"}>
                < Slider
                    autoplay={3000}
                    classNames={customCss}
                >

                    {
                        !_.isEmpty(props.slider)?
                            props.slider.map((item, index) => (
                                < div
                                    key={index}
                                    className={customCss.sliderContent}
                                    style={{background: `url( '${item.image}') no-repeat  center  center `}}
                                >
                                    {
                                        item.title &&
                                        < div className={customCss.inner}>
                                            <h1> {item.title} </ h1>
                                            <p> {item.subTitle} </ p>
                                        </ div>
                                    }

                                < / div>
                            ))
                            :<></>
                    }
                </ Slider>
            </div>
            <div className={`${customCss.mobileSlider} md:hidden`}>
                < Slider
                    autoplay={3000}
                    buttons={false}
                        classNames={customCss}
                >

                    {
                        !_.isEmpty(props.mobileSlider)?
                            props.mobileSlider.map((item, index) => (
                                < div
                                    key={index}
                                    className={customCss.sliderContent}
                                    style={{background: `url( '${item.image}') no-repeat  center  center `}}
                                >
                                    {
                                        item.title &&
                                        < div className={customCss.inner}>
                                            <h1> {item.title} </ h1>
                                            <p> {item.subTitle} </ p>
                                        </ div>
                                    }

                                < / div>
                            ))
                            :<></>
                    }
                </ Slider>
            </div>

        </div>
    );
};

export default Home;