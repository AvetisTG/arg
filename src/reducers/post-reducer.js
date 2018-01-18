import {FETCHING_POSTS, FETCHING_POSTS_FULFILLED, FETCHING_POSTS_REJECTED} from "../consts";

const initialState = {
    posts: [],
    fetching: false,
    fetched: false,
    error: null
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_POSTS: {
            return {...state, fetching: true}
        }
        case FETCHING_POSTS_REJECTED: {
            return {...state, fetching: false, error: action.payload}
        }
        case FETCHING_POSTS_FULFILLED: {
            return {...state, fetching: false, fetched: true, posts: action.payload}
        }
        default: {
            return {...state}
        }
    }
}