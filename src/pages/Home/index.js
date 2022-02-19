import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import customCss from './Home.module.scss'
const slider = [{
    title: 'Title 1',
    description: 'Description. Vivamus ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    subTitle: 'Subtitle 1',
    image: 'https://images.unsplash.com/photo-1502117859338-fd9daa518a9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
}, {
    title: 'Title 2',
    description: 'Description. Vivamus ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    subTitle: 'Subtitle 1',
    image: 'https://images.unsplash.com/photo-1554321586-92083ba0a115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
}, {
    title: 'Title 3',
    description: 'Description. Vivamus ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    subTitle: 'Subtitle 1',
    image: 'https://images.unsplash.com/photo-1536679545597-c2e5e1946495?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
}];
const Home = () => {
    return (
        <div className={"page-full-height bg-blue-500"}>
            < Slider
                autoplay={3000}
                classNames={customCss}
            >

                {slider.map((item, index) => (
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
                ))}
            </ Slider>
        </div>
    );
};

export default Home;