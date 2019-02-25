import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
      loading: true
    }
  }

  async componentDidMount() {
    const profile = await fetch("https://api.github.com/users/octocat").then((res) => res.json());

    if (profile) {
      this.setState({
        data: profile,
        loading: false
      })
    }
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
        return <div>Loading...</div>
    }

    return (
      <div className="Profile-container">
        <img className="Profile-avatar" src={ data.avatar_url } alt="avatar" />
        <ul className="Profile-information">
          <li><strong>html_url:</strong> { data.html_url }</li>
          <li><strong>repos_url:</strong> { data.repos_url }</li>
          <li><strong>name:</strong> { data.name }</li>
          <li><strong>company:</strong> { data.company }</li>
          <li><strong>location:</strong> { data.location }</li>
          <li><strong>email:</strong> { data.email }</li>
          <li><strong>bio:</strong> { data.bio }</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
