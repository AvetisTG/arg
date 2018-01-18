import axios from 'axios'
import {FETCHING_USERS, FETCHING_USERS_FULFILLED, FETCHING_USERS_REJECTED} from "../consts";

export function fetchUsers() {
    return function (dispatch) {
        dispatch({type: FETCHING_USERS});
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                dispatch({type: FETCHING_USERS_FULFILLED, payload: response.data})
            })
            .catch((error) => {
                dispatch({type: FETCHING_USERS_REJECTED, payload: error})
            });

    }
}
