import React from 'react';
import PropTypes from 'prop-types';
import Meta from './Meta';
import Header from './Header';

const Page = ({ children }) => {
  return (
    <div>
      <Meta />
      <Header />
      <div>{children}</div>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Page;
