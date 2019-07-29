import React from 'react';
import Meta from './Meta';
import Header from './Header';

class Page extends React.Component {
  render() {
    return (
      <div>
        <Meta/>
        <Header/>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Page;