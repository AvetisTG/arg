import {FETCHING_ALBUMS, FETCHING_ALBUMS_FULFILLED, FETCHING_ALBUMS_REJECTED} from "../consts";

const initialState = {
    albums: [],
    fetching: false,
    fetched: false,
    error: null
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_ALBUMS: {
            return {...state, fetching: true}
        }
        case FETCHING_ALBUMS_REJECTED: {
            return {...state, fetching: false, error: action.payload}
        }
        case FETCHING_ALBUMS_FULFILLED: {
            return {...state, fetching: false, fetched: true, albums: action.payload}
        }
        default: {
            return {...state}
        }
    }
}