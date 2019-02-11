import React, { Component } from "react";

import Card from '../components/List/Card';

class List extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true
    }
  }

  async componentDidMount() {
    const movies = await fetch('../../assets/data.json').then((res) => res.json());

    if (movies) {
      this.setState({
        data: movies,
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
      <div class="row">
        { data.map((movie) =>
          <div class="col-sm-2">
            <Card key={ movie.ranking } movie={ movie } />
          </div>
        )}
      </div>
    )
  }
}

export default List;
