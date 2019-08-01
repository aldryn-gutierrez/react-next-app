/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import axios from 'axios';
import Downshift from 'downshift';
import { debounce } from 'lodash';
import Router from 'next/router';
import styled from 'styled-components';
import Page from '../components/Page';
import { DropDown, DropDownItem, SearchStyles } from '../components/styles/DropDown';

const NewsHeader = styled.p`
  font-weight: 900;
  text-shadow: 4px 4px black;
`;

class Home extends React.Component {
  state = {
    artists: [],
  };

  onInputChange = debounce(async event => {
    const artist = event.target.value;

    const spotifyInstance = axios.create({
      baseURL: 'https://api.spotify.com',
      timeout: 1000,
      headers: {
        Authorization:
          'Bearer BQCKkwrA0ZFIfLNjh2SA5FxpLKVi6k5-uEtD5pKtW0JdRws0cSJBxW2dIftuQxCFwLo_d1LNogtbTEak1dE',
      },
    });

    const artistsResponse = await spotifyInstance.get(`/v1/search?q=${artist}&type=artist&limit=8`);
    this.setState({ artists: artistsResponse.data.artists.items });
  }, 800);

  onSearchSelection = selection => {
    Router.push({
      pathname: '/search',
      query: {
        id: selection.id,
      },
    });
  };

  render() {
    const { artists } = this.state;
    return (
      <Page>
        <section
          className="hero is-info is-medium"
          style={{
            // backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundImage:
              // eslint-disable-next-line max-len
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
            <SearchStyles>
              <Downshift
                id="spotify-artist"
                onChange={selection => this.onSearchSelection(selection)}
                itemToString={item => (item ? item.name : '')}
              >
                {({
                  getInputProps,
                  getItemProps,
                  getLabelProps,
                  getMenuProps,
                  isOpen,
                  inputValue,
                  highlightedIndex,
                  selectedItem,
                }) => (
                  <div className="column is-three-fifths is-offset-one-fifth">
                    <div className="field has-addons">
                      <div className="control is-expanded">
                        <input
                          {...getInputProps({
                            className: 'input',
                            type: 'text',
                            placeholder: 'Find an artist',
                            onChange: event => {
                              event.persist();
                              this.onInputChange(event);
                            },
                          })}
                        />
                      </div>
                      <div className="control">
                        <button className="button is-info" type="submit">
                          Search
                        </button>
                      </div>
                    </div>

                    {isOpen && (
                      <DropDown>
                        {artists.map((artist, index) => {
                          const artistImageUrl =
                            artist.images.length > 2 ? artist.images[2].url : '';

                          return (
                            <DropDownItem
                              {...getItemProps({ item: artist })}
                              key={artist.id}
                              highlighted={highlightedIndex === index}
                            >
                              <img width="50" src={artistImageUrl} alt={artist.name} />
                              {artist.name}
                            </DropDownItem>
                          );
                        })}
                      </DropDown>
                    )}
                  </div>
                )}
              </Downshift>
            </SearchStyles>
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
                  <article className="tile is-child notification ">
                    <p className="title">Top Album Sales</p>
                    <p className="subtitle">Aligned with the right tile</p>
                    <div className="content columns">
                      {/*  */}

                      <div className="card" style={{ margin: '0px 10px' }}>
                        <div className="card-image">
                          <figure className="image is-4by3">
                            <img
                              src="https://i.scdn.co/image/715d1b62f6a0a66a2262372029f3789ec2a4e6f1"
                              alt="Placeholder image1"
                            />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="media">
                            <div className="media-content has-text-centered">
                              <p className="title is-4">Lion King (2019)</p>
                              <p className="subtitle is-6">Soundtrack</p>
                            </div>
                          </div>

                          <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                            iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{' '}
                            <a href="#">#responsive</a>
                            <br />
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                          </div>
                        </div>
                      </div>

                      {/*  */}

                      {/*  */}

                      <div className="card" style={{ margin: '0px 10px' }}>
                        <div className="card-image">
                          <figure className="image is-4by3">
                            <img
                              src="https://charts-static.billboard.com/img/2019/08/sum-41-35q-order-in-decline-14o-174x174.jpg"
                              alt="Placeholder image1"
                            />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="media">
                            <div className="media-content has-text-centered">
                              <p className="title is-4">Order In Decline</p>
                              <p className="subtitle is-6">Sum 41</p>
                            </div>
                          </div>

                          <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                            iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{' '}
                            <a href="#">#responsive</a>
                            <br />
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                          </div>
                        </div>
                      </div>

                      {/*  */}

                      {/*  */}

                      <div className="card" style={{ margin: '0px 10px' }}>
                        <div className="card-image">
                          <figure className="image is-4by3">
                            <img
                              src="https://media.pitchfork.com/photos/5d30e22e1852280008e54091/1:1/w_320/IggyAzalea_InMyDefense.jpg"
                              alt="Placeholder image1"
                            />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="media">
                            <div className="media-content has-text-centered">
                              <p className="title is-4">In My Defense</p>
                              <p className="subtitle is-6">Iggy Azalea</p>
                            </div>
                          </div>

                          <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                            iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{' '}
                            <a href="#">#responsive</a>
                            <br />
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                          </div>
                        </div>
                      </div>

                      {/*  */}

                      {/*  */}

                      <div className="card" style={{ margin: '0px 10px' }}>
                        <div className="card-image">
                          <figure className="image is-4by3">
                            <img
                              src="https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/ab/57/66/ab576613-c7a5-e414-64f2-de9b50ae4c4f/ITZY_ICY_ONLINE_COVER_1.jpg/600x600bf.png"
                              alt="Placeholder image1"
                            />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="media">
                            <div className="media-content">
                              <p className="title is-4">IT'z ICY -EP</p>
                              <p className="subtitle is-6">ITZY</p>
                            </div>
                          </div>

                          <div className="content">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
                            iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{' '}
                            <a href="#">#responsive</a>
                            <br />
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                          </div>
                        </div>
                      </div>

                      {/*  */}
                    </div>
                  </article>
                </div>
              </div>
              <div className="tile is-parent">
                <article
                  className="tile is-child notification is-success"
                  style={{
                    // backgroundPosition: 'center',
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

export default Home;
