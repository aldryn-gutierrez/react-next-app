/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import Page from '../components/Page';
import Search from '../components/Search';
import AlbumList from '../components/AlbumList';

const NewsHeader = styled.p`
  font-weight: 900;
  text-shadow: 4px 4px black;
`;

class Home extends React.Component {
  componentDidMount() {
    const currentToken = localStorage.getItem('token');

    if (!currentToken || true) {
      const { router } = this.props;
      const params = new URLSearchParams(router.asPath.substr(2));
      const accessToken = params.get('access_token');

      localStorage.setItem('token', accessToken);
    }
  }

  render() {
    return (
      <Page>
        <section
          className="hero is-info is-medium"
          style={{
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundImage:
              'url(https://images.cgmagonline.com/wp-content/uploads/2016/08/spotify-launches-gaming-music-channel-2-1280x720.jpg)',
          }}
        >
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-size-1 has-text-weight-bold">Go Premium. Be happy.</h1>
              <h2 className="subtitle">
                Premium sounds amazing. Enjoy ad-free music on all your devices.
              </h2>
            </div>
          </div>
        </section>
        <nav className="level" style={{ margin: '50px 0px' }}>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Artists</p>
              <p className="title">3,456</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Albums</p>
              <p className="title">123</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Downloads</p>
              <p className="title">456K</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Likes</p>
              <p className="title">789</p>
            </div>
          </div>
        </nav>

        <div className="container is-fluid">
          <div className="column is-three-fifths is-offset-one-fifth">
            <Search />
          </div>

          <div className="notification" style={{ marginTop: '25px' }}>
            <div className="tile is-ancestor">
              <div className="tile is-vertical is-8">
                <div className="tile">
                  <div className="tile is-parent">
                    <article
                      className="tile is-child notification is-info"
                      style={{
                        backgroundSize: 'cover',
                        backgroundImage:
                          'url("https://www.billboard.com/files/media/katy-perry-Citi-Sound-Vault-sept-2018-billboard-1548.jpg")',
                      }}
                    >
                      <NewsHeader className="title">Artist Name</NewsHeader>
                      <p className="subtitle">With an image</p>
                      <figure className="image is-4by3" />
                    </article>
                  </div>
                  <div className="tile is-parent is-vertical">
                    <article
                      className="tile is-child notification is-primary"
                      style={{
                        backgroundSize: 'cover',
                        backgroundImage:
                          "url('https://www.billboard.com/files/media/zendaya-taylor-swift-harry-styles-collage-2019-billboard-1548.jpg')",
                      }}
                    >
                      <NewsHeader className="title">The Hot 100</NewsHeader>
                      <p className="subtitle">Top tile</p>
                    </article>
                    <article
                      className="tile is-child notification is-primary"
                      style={{
                        backgroundSize: 'cover',
                        backgroundImage:
                          "url('https://www.billboard.com/files/media/Diallo-Riddle-Bashir-Salahuddin-billboard-1548.jpg')",
                      }}
                    >
                      <NewsHeader className="title">Songs of the Summer</NewsHeader>
                      <p className="subtitle">Bottom tile</p>
                    </article>
                  </div>
                </div>

                <div className="tile is-parent">
                  <article className="tile is-child notification">
                    <p className="title">Top Album Sales</p>
                    <p className="subtitle">Aligned with the right tile</p>
                    <AlbumList />
                  </article>
                </div>
              </div>

              <div className="tile is-parent">
                <article
                  className="tile is-child notification is-success"
                  style={{
                    backgroundSize: 'cover',
                    backgroundImage:
                      'url("https://www.billboard.com/files/styles/900_wide/public/media/Calboy-bb03-2019-chartbreaker-billboard-mjortctp-1240.jpg")',
                  }}
                >
                  <div className="content">
                    <NewsHeader className="title">Upcoming events</NewsHeader>
                    <p className="subtitle">Coming to a city near you</p>
                    <div className="content">Do something</div>
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

export default withRouter(Home);
