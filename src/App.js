import "../src/assets/style/global.scss"
import '@splidejs/splide/dist/css/splide.min.css';
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Projects";
import News from "./pages/News";
import PublicationCategory from "./pages/Publications";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";
import SingleProject from "./pages/Projects/SingleProject";
import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getSiteDetails} from "./services/site/Action";
import NewsSingle from "./pages/News/NewsSingle";
import PublicationSingle from "./pages/Publications/PublicationSingle";
import Award from "./pages/Award";
import AwardSingle from "./pages/Award/AwardSingle";
import PublicationsList from "./pages/Publications/ListView";
function App() {
    const dispatch = useDispatch();
    const site = useSelector(state => state.site);
    useEffect(() => {
            dispatch(getSiteDetails())

    }, [dispatch])
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home slider={site.data.homeSlider} mobileSlider={site.data.homeMobileSlider}/>}/>
                <Route path="about" element={<About about={site.data.about}/>}/>
                <Route path="project" element={<Project category={site.data.projectCategory}/>}/>
                <Route path="project/:category/:id" element={<SingleProject/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="news/:id" element={<NewsSingle/>}/>
                <Route path="publication" element={<PublicationCategory categories={site.data.publicationCategory} loading={site?site.loading:true}/>}/>
                <Route path="publication/:categoryId" element={<PublicationsList categories={site.data.publicationCategory}/>}/>
                <Route path="magazine/:id" element={<PublicationSingle/>}/>
                <Route path="accolades" element={<Award/>}/>
                <Route path="accolades/:id" element={<AwardSingle/>}/>
                <Route path="contact" element={<Contact contact={site.data.contact}/>}/>
            </Routes>
        </Layout>

    );
}

export default App;
