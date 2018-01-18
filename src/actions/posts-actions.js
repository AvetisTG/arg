import axios from 'axios'
import {FETCHING_POSTS, FETCHING_POSTS_FULFILLED, FETCHING_POSTS_REJECTED} from "../consts";

export function fetchPosts() {
    return function (dispatch) {
        dispatch({type: FETCHING_POSTS});
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                let random30 = getRandom30(response.data)
                dispatch({type: FETCHING_POSTS_FULFILLED, payload: random30})
            })
            .catch((error) => {
                dispatch({type: FETCHING_POSTS_REJECTED, payload: error})
            });

    }
}


export default function getRandom30 (array, count=30, arr=[]) {
    let index = Math.floor(Math.random() * array.length)
    if (count === 0) return arr
    arr.push(array[index])
    return getRandom30(array, count-1, arr)
}
