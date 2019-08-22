/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { withRouter } from 'next/router';
import ArtistDetails from '../components/ArtistDetails';

const Profile = ({ router }) => {
  const params = new URLSearchParams(router.asPath.substr(8));
  return (
    <ArtistDetails id={params.get('id')} />
  );
}

export default withRouter(Profile);
