import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

import API from '../services/API'

import CountryDetails from '../pages/CountryDetails'

export default function CountryList() {
  const [data, setData] = useState({ countries: [] })

  useEffect(() => {
    const fetchData = async () => {
      await API.get('/all',)
      .then(result => {
        setData({ countries: result.data })
      })
      .catch(err => {
        console.log(err)
      })
    }
    fetchData()
  }, [])

  let listStyle = {
    listStyle: 'none',
    display: 'flex',
    flexWrap: 'wrap'
  }

  let listItem = {
    padding: '10px',
    border: '1px solid red'
  }

  return (
    <Router>
      <Switch>
      <Route exact path="/">
        <div>
        <h1>Country List</h1>
        <ul style={listStyle}>
        { data.countries.map(country => (
          <Link to={`/${country.name}`} key={ country.alpha3Code }>
            <li style={listItem}>
              <p>{ country.name }</p>
              <img src={ country.flag } width="50" alt={ country.name }/>
            </li>
          </Link>
        )) }
      </ul>
      </div>
      </Route>
        <Route path="/:name" exact strict component={ CountryDetails } />
      </Switch>
    </Router>
  );
}
