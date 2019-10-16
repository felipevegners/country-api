import React, { Component } from 'react';

import API from '../services/API'

export default class CountryDetails extends Component {
  state = {
    country: [],
  }

componentDidMount() {
  let name = this.props.match.params.name
  this.setState({
    name: name,
  })
  const fetchData = async () => {
  await API.get(`/name/${ name }`,)
  .then(result => {
    this.setState({
      country: result.data
    })
    console.log(this.state.country)
  })
  .catch(err => {
    console.log(err)
  })
}
fetchData()
}
  render() {
    const { country } = this.state
    return (
      <p>{country.name}</p>
    )
  }
}
