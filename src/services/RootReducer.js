import {combineReducers} from "redux";
import SiteReducer from "./site/Reducer";
import {ProjectReducer, ProjectsReducer} from "./projects/Reducer";
const RootReducer = combineReducers({
    site: SiteReducer,
    projectList: ProjectsReducer,
    project: ProjectReducer
})

export default RootReducer;
