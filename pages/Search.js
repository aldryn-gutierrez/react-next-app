/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Page from '../components/Page';

class Search extends React.Component {
  state = {
    searchTerm: '',
  };

  onClick = event => {
    console.log(event.target.value);
  };

  render() {
    return (
      <Page>
        <div className="container is-fluid">
          <div className="column is-three-fifths is-offset-one-fifth">
            <div className="field has-addons">
              <div className="control is-expanded">
                <input className="input" type="text" placeholder="Find a repository" />
              </div>
              <div className="control">
                <a className="button is-info" onClick={event => this.onClick(event)}>
                  Search
                </a>
              </div>
            </div>
          </div>

          <div className="notification">
            This container is
            <strong>fluid</strong>: it will have a 32px gap on either side, on any viewport cart.
          </div>
        </div>
      </Page>
    );
  }
}

export default Search;
