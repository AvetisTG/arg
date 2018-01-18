import { combineReducers } from 'redux'
import albums from './albums-reducer'
import users from './users-reducer'
import posts from './post-reducer'

export default combineReducers({
    albums,
    users,
    posts
})