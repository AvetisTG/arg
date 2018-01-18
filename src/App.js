import React, { Component } from 'react';
import {connect} from 'react-redux';
import Posts from './components/posts'
import Albums from './components/albums'
import Users from './components/users'

class App extends Component {
    render() {
        return (
            <div>
                <Posts />
                <hr/>
                <Albums />
                <hr/>
                <Users />
            </div>
        );
    }
}

export default connect()(App);