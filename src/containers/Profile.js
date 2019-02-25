import React, { Component } from 'react';

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
      <div>
        <ul>
          <li>avatar_url: <img src={ data.avatar_url } width={100} /></li>
          <li>html_url: { data.html_url }</li>
          <li>repos_url: { data.repos_url }</li>
          <li>name: { data.name }</li>
          <li>company: { data.company }</li>
          <li>location: { data.location }</li>
          <li>email: { data.email }</li>
          <li>bio: { data.bio }</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
