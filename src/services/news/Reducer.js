import {
   NEWS_LOADING, NEWS_ERROR, NEWS_SUCCESS, NEWS_LIST_SUCCESS, NEWS_LIST_ERROR, NEWS_LIST_LOADING,
} from "../Types";

const newsListState = {
    loading: false,
    data: [],
    error: ""
}

const NewsListReducer = (state = newsListState, action) => {
    switch (action.type) {
        case NEWS_LIST_LOADING:
            return {
                ...state,
                loading: true
            }
        case NEWS_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case NEWS_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get News list."
            }
        default:
            return state;
    }
}


const newsState = {
    loading: false,
    data: {},
    error: ""
}

const NewsReducer = (state = newsState, action) => {
    switch (action.type) {
        case NEWS_LOADING:
            return {
                ...state,
                loading: true
            }
        case NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case NEWS_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get News"
            }
        default:
            return state;
    }
}


export {NewsListReducer, NewsReducer};