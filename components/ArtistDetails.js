import React from 'react';

import { withRouter } from 'next/router';
import Link from 'next/link';
import Page from '../components/Page';
import axios from 'axios';


class ArtistDetails extends React.Component {
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
    tracks: [],
  };

  componentDidMount() {
    this.getArtistDetails(this.props.id);
    this.getArtistTracks(this.props.id);
  }

  async getArtistTracks(artistId) {
    const accessToken = localStorage.getItem('token');
    console.log('Token2', accessToken)
    const spotifyInstance = axios.create({
      baseURL: 'https://api.spotify.com',
      timeout: 1000,
      headers: { Authorization: `Bearer ${accessToken}`},
    });

    const artistTracksResponse = await spotifyInstance
      .get(`/v1/artists/${artistId}/top-tracks?country=SG`)
      .catch(async error => {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      });
  
    const tracks = artistTracksResponse.data.tracks.map(track => {
      return {
        'id': track.id,
        'title': track.name,
        'spotifyUrl': track.uri,
        'albumArt': track.album.images[0].url,
        'durationInMilliseconds': track.duration_ms,
        'artists': track.artists.map(artist => artist.name)
      };
    });

    console.log(tracks)

    this.setState({...this.state, tracks})
  }

  async getArtistDetails(artistId) {
    const accessToken = localStorage.getItem('token');
    console.log('Token', accessToken)
    const spotifyInstance = axios.create({
      baseURL: 'https://api.spotify.com',
      timeout: 1000,
      headers: { Authorization: `Bearer ${accessToken}`},
    });

    const artistsResponse = await spotifyInstance
      .get(`/v1/artists/${artistId}`)
      .catch(async error => {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      });

    console.log(artistsResponse);

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

  renderBasicInformation(artist) {
    return (
      <div className="container">
        <div className="container">
          <p className="title">{artist.name}</p>
          <p className="subtitle">With an image</p>
          <figure className="image ">
            <img className="is-rounded" src={artist.images[0].url} />
          </figure>
        </div>
        <div className="container" style={{ margin: '30px 0px 10px 0px' }}>
          <div className="columns is-mobile has-text-centered" >
            {artist.genres.slice(0, 3).map(genre => (
              <div className="column is-capitalized" key={genre}>
                <a className="button is-primary is-large">{genre}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  renderSocialMediaStatistics(artist) {
    return (
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
    );
  }

  renderTracks() {
    return (
      <div className="content">
        <p className="title">Top Tracks</p>
        <p className="subtitle">Curated daily based on playback</p>
        <div className="content">
          <div className="container">
              {
                this.state.tracks.map(track => (
                  <div className="box" key={track.id}>
                    <div className="columns is-mobile">
                      <div className="column is-one-fifth">
                        <a target="_blank" href={track.spotifyUrl}>
                          <img src={track.albumArt} alt={track.spotifyUrl}/>
                        </a>
                      </div>
                      <div className="column">
                        <span className="has-text-weight-bold">{track.title}</span>{' - '}
                        <span>{Math.floor((track.durationInMilliseconds/1000)/60)}:{Math.floor(track.durationInMilliseconds/1000 % 60)}</span><br/>
                        <span>{track.artists.join()}</span>
                      </div>
                    </div>
                  </div>
                ))
              }      
          </div>
        </div>
      </div>
    );
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
              <div className="tile is-vertical">
                <div className="tile is-parent">
                  <article className="tile is-child box ">
                    {this.renderBasicInformation(artist)}
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box is-info">
                    {this.renderSocialMediaStatistics(artist)}
                  </article>
                </div>
                <div className="tile is-parent" style={{visibility: 'hidden'}}>
                  {/* ADD CONTENT */}
                </div>
                <div className="tile is-parent" style={{visibility: 'hidden'}}>
                  {/* ADD CONTENT */}
                </div>
                <div className="tile is-parent" style={{visibility: 'hidden'}}>
                  {/* ADD CONTENT */}
                </div>
              </div>

              <div className="tile is-parent">
                <article className="tile is-child box is-success">
                  {this.renderTracks()}
                </article>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}

export default ArtistDetails;