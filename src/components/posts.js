import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from "../actions/posts-actions";

@connect((store) => {
    return {
        posts: store.posts.posts,
        albums: store.albums.albums,
        users: store.users.users
    }
})
class Posts extends Component {
    componentWillMount() {
        this.props.dispatch(fetchPosts())
    }

    render() {
        const posts = this.props.posts
        const mappedPosts = posts.map(post => <li key={post.id}>
            <h3>{post.title}</h3>
            <div>{post.body}</div>
        </li>)
        return (

            <div>
                <h1>Posts</h1>
                <ul>
                    {mappedPosts}
                </ul>
            </div>
        );
    }
}

export default Posts;