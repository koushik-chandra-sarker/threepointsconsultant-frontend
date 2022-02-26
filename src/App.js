import "../src/assets/style/global.scss"
import '@splidejs/splide/dist/css/splide.min.css';
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Projects";
import News from "./pages/News";
import Publication from "./pages/Publications";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";
import SingleProject from "./pages/Projects/SingleProject";
import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getSiteDetails} from "./services/site/Action";
function App() {
    const dispatch = useDispatch();
    const site = useSelector(state => state.site);
    useEffect(() => {
            dispatch(getSiteDetails())

    }, [dispatch])
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home slider={site.data.homeSlider}/>}/>
                <Route path="about" element={<About about={site.data.about}/>}/>
                <Route path="project" element={<Project category={site.data.projectCategory}/>}/>
                <Route path="project/:category/:id" element={<SingleProject/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="publication" element={<Publication categorys={site.data.publicationCategory}/>}/>
                <Route path="contact" element={<Contact contact={site.data.contact}/>}/>
            </Routes>
        </Layout>

    );
}

export default App;
