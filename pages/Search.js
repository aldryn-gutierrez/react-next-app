/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import Page from '../components/Page';

const Search = () => {
  return (
    <Page>
      <div className="container is-fluid">
        <div className="notification">
          This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
          viewport homepage.
        </div>
      </div>
    </Page>
  );
};

export default Search;
