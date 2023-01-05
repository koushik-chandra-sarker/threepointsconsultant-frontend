import {
    AWARD_ERROR,
    AWARD_LOADING,
    AWARD_SUCCESS,
    AWARDS_ERROR,
    AWARDS_LOADING,
    AWARDS_SUCCESS,
} from "../Types";

const awardsState = {
    loading: false,
    data: [],
    error: ""
}

const AwardsReducer = (state = awardsState, action) => {
    switch (action.type) {
        case AWARDS_LOADING:
            return {
                ...state,
                loading: true
            }
        case AWARDS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case AWARDS_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Award list"
            }
        default:
            return state;
    }
}


const awardState = {
    loading: false,
    data: {},
    error: ""
}

const AwardReducer = (state = awardState, action) => {
    switch (action.type) {
        case AWARD_LOADING:
            return {
                ...state,
                loading: true
            }
        case AWARD_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: ""
            }
        case AWARD_ERROR:
            return {
                ...state,
                loading: false,
                error: "Unable to get Award"
            }
        default:
            return state;
    }
}


export {AwardReducer, AwardsReducer};