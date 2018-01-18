import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAlbums} from "../actions/albums-actions";

@connect((store) => {
    return {
        albums: store.albums.albums
    }
})
class Albums extends Component {
    componentWillMount(){
        this.props.dispatch(fetchAlbums())
    }
    render() {
        const albums = this.props.albums
        const mappedAlbums = albums.map(album => <li key={album.id}>
            <h3>{album.title}</h3>
        </li>)
        return (
            <div>
                <h1>Albums</h1>
                <ul>
                    {mappedAlbums}
                </ul>
            </div>
        );
    }
}

export default Albums;