import {combineReducers} from "redux";
import SiteReducer from "./site/Reducer";
import {ProjectReducer, ProjectsReducer, SearchedProjectsReducer} from "./projects/Reducer";
import {NewsListReducer, NewsReducer} from "./news/Reducer";
const RootReducer = combineReducers({
    site: SiteReducer,
    projectList: ProjectsReducer,
    project: ProjectReducer,
    searchedProjects: SearchedProjectsReducer,
    newsList: NewsListReducer,
    news: NewsReducer
})

export default RootReducer;
