import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from "../actions/users-actions";

@connect((store) => {
    return {
        users: store.users.users
    }
})
class Users extends Component {
    componentWillMount() {
        this.props.dispatch(fetchUsers())
    }

    render() {
        const users = this.props.users
        const mappedUsers = users.map(user => <li key={user.id}>
            <h3>{user.name}</h3>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>{user.phone}</div>
        </li>)
        return (
            <div>
                <h1>Users</h1>
                <ul>
                    {mappedUsers}
                </ul>
            </div>
        );
    }
}

export default Users;