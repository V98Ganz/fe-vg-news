import React, { Component } from 'react';
import * as api from '../utils/api';

class User extends Component {
    state = {
        user: {},
        isLoading: true
    }

    getUser = () => {
        const { userName } = this.props
        api.fetchUser(userName).then((user) => {
            this.setState({ user, isLoading: false})
        })
    }

    componentDidMount() {
        const { user } = this.props;
        this.getUser(user)
    }

    render() {
        return (
            <div className="user-page-grid" >
                <div className="user-page-info" >
                <img
                className="user-page-img"
                src={this.state.user.avatar_url}
                alt={`${this.state.user.username} avatar`} 
                />
                    <h2>{this.state.user.name}</h2>
                    <p>User Name: {this.state.user.username}</p>
                    </div>

                    <div className="user-page-comments" >
                        <h3>Your Comments</h3>
                    </div>

                    <div className="user-page-articles" >
                        <h3>Your Articles</h3>
                    </div>
            </div>
        );
    }
}

export default User;