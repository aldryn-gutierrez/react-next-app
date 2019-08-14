/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import Page from '../components/Page';
import axios from 'axios';

class Search extends React.Component {
  state = {
    loading: true,
    artist: {
      name: '',
      followers: 0,
      popularity: 0,
      type: '',
      images: [],
      genres: [],
    },
  };

  componentDidMount() {
    console.log(this.props);
    console.log(this.props.router.asPath.substr(1));
    const params = new URLSearchParams(this.props.router.asPath.substr(8));

    this.getArtistData(params.get('id'));
  }

  async getArtistData(artistId) {
    const accessToken = localStorage.getItem('token');
    const spotifyInstance = axios.create({
      baseURL: 'https://api.spotify.com',
      timeout: 1000,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const artistsResponse = await spotifyInstance
      .get(`/v1/artists/${artistId}`)
      .catch(async error => {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      });

    console.log(artistsResponse.data);

    this.setState({
      loading: false,
      artist: {
        name: artistsResponse.data.name,
        followers: artistsResponse.data.followers.total,
        popularity: artistsResponse.data.popularity,
        type: artistsResponse.data.type,
        images: artistsResponse.data.images,
        genres: artistsResponse.data.genres,
      },
    });
  }

  render() {
    const { artist, loading } = this.state;

    if (loading) {
      return <></>;
    }

    return (
      <Page>
        <div className="container is-fluid">
          <div className="notification">
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-5">
                <div className="tile">
                  <div className="tile is-parent ">
                    <article className="tile is-child notification ">
                      <p className="title">{artist.name}</p>
                      <p className="subtitle">With an image</p>
                      <figure className="image ">
                        <img className="is-rounded" src={artist.images[0].url} />
                      </figure>
                    </article>
                  </div>
                </div>
                <div className="tile is-parent" style={{ margin: '-20px 0px' }}>
                  <article className="tile is-child notification">
                    <div className="container">
                      <div className="columns is-desktop has-text-centered">
                        {artist.genres.slice(0, 3).map(genre => (
                          <div className="column is-capitalized" key={genre}>
                            <a className="button is-primary is-large">{genre}</a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-info">
                    <nav className="level" style={{ margin: '50px 0px' }}>
                      <div className="level-item has-text-centered">
                        <div>
                          <span className="icon">
                            <i className="fas fa-burn" />
                          </span>
                          <p className="heading">Popularity</p>
                          <p className="title">{artist.popularity}</p>
                        </div>
                      </div>
                      <div className="level-item has-text-centered">
                        <div>
                          <span className="icon">
                            <i className="fab fa-instagram" />
                          </span>
                          <p className="heading">Followers</p>
                          <p className="title">{artist.followers.toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="level-item has-text-centered">
                        <div>
                          <span className="icon">
                            <i className="far fa-save" />
                          </span>
                          <p className="heading">Downloads</p>
                          <p className="title">456</p>
                        </div>
                      </div>
                    </nav>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                  <div className="content">
                    <p className="title">Top Tracks</p>
                    <p className="subtitle">Curated daily based on playback</p>
                    <div className="content">
                      <div className="container">
                        <div className="notification is-info">
                          <div className="columns is-mobile">
                            <div className="column is-one-fifth">
                              <img src="https://i.scdn.co/image/6441b3a54e720b0fab3646c89ef35869d559414d" />
                            </div>
                            <div className="column">
                              <p>Lorem Ipsum</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default withRouter(Search);
