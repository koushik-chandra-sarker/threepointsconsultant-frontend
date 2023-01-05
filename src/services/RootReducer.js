import {combineReducers} from "redux";
import SiteReducer from "./site/Reducer";
import {ProjectReducer, ProjectsReducer, SearchedProjectsReducer} from "./projects/Reducer";
import {NewsListReducer, NewsReducer} from "./news/Reducer";
import {PublicationReducer} from "./publication/Reducer";
import {AwardReducer, AwardsReducer} from "./award/Reducer";
const RootReducer = combineReducers({
    site: SiteReducer,
    projectList: ProjectsReducer,
    project: ProjectReducer,
    searchedProjects: SearchedProjectsReducer,
    newsList: NewsListReducer,
    news: NewsReducer,
    publication: PublicationReducer,
    award: AwardReducer,
    awardList: AwardsReducer
})

export default RootReducer;
