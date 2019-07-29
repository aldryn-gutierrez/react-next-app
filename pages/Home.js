import React from 'react';
import Page from '../components/Page';

class Home extends React.Component {
  render() {
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
  }
}

export default Home;
