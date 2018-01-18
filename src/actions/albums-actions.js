import axios from 'axios'
import {FETCHING_ALBUMS, FETCHING_ALBUMS_FULFILLED, FETCHING_ALBUMS_REJECTED} from "../consts";
import getRandom30 from './posts-actions'

export function fetchAlbums() {
    return function (dispatch) {
        dispatch({type: FETCHING_ALBUMS});
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then((response) => {
                let random30 = getRandom30(response.data)
                dispatch({type: FETCHING_ALBUMS_FULFILLED, payload: random30})
            })
            .catch((error) => {
                dispatch({type: FETCHING_ALBUMS_REJECTED, payload: error})
            });

    }
}
