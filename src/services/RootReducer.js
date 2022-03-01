import {combineReducers} from "redux";
import SiteReducer from "./site/Reducer";
import {ProjectReducer, ProjectsReducer, SearchedProjectsReducer} from "./projects/Reducer";
const RootReducer = combineReducers({
    site: SiteReducer,
    projectList: ProjectsReducer,
    project: ProjectReducer,
    searchedProjects: SearchedProjectsReducer
})

export default RootReducer;
