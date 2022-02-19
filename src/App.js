import "../src/assets/style/global.scss"
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Project from "./pages/Projects";
import News from "./pages/News";
import Publication from "./pages/Publications";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="project" element={<Project/>}/>
                <Route path="news" element={<News/>}/>
                <Route path="publication" element={<Publication/>}/>
                <Route path="contact" element={<Contact/>}/>
            </Routes>
        </Layout>

    );
}

export default App;
