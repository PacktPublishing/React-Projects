import React, { Component } from 'react';
import styled from 'styled-components';
import Link from '../components/Shared/Link';
import List from '../components/Profile/List';

const ProfileWrapper = styled.div`
  width: 50%;
  margin: 10px auto;
`;

const Avatar = styled.img`
  width: 150px;
`;

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

    const items = [
      { label: 'html_url', value: <Link url={ data.html_url } title="Github URL" /> },
      { label: 'repos_url', value: data.repos_url },
      { label: 'name', value: data.name },
      { label: 'company', value: data.company },
      { label: 'location', value: data.location },
      { label: 'email', value: data.email },
      { label: 'bio', value: data.bio }
    ]

    return (
      <ProfileWrapper>
        <Avatar src={ data.avatar_url } alt="avatar" />
        <List items={items} />
      </ProfileWrapper>
    );
  }
}

export default Profile;
