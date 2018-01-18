import {FETCHING_USERS, FETCHING_USERS_FULFILLED, FETCHING_USERS_REJECTED} from "../consts";

const initialState = {
    users: [],
    fetching: false,
    fetched: false,
    error: null
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_USERS: {
            return {...state, fetching: true}
        }
        case FETCHING_USERS_REJECTED: {
            return {...state, fetching: false, error: action.payload}
        }
        case FETCHING_USERS_FULFILLED: {
            return {...state, fetching: false, fetched: true, users: action.payload}
        }
        default: {
            return {...state}
        }
    }
}