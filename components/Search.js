import React from 'react';
import Downshift from 'downshift';
import { debounce } from 'lodash';
import axios from 'axios';
import Router from 'next/router';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

class Search extends React.Component {
  state = {
    artists: [],
  };

  onInputChange = debounce(async event => {
    const artist = event.target.value;
    const accessToken = localStorage.getItem('token');

    console.log(accessToken);

    const spotifyInstance = axios.create({
      baseURL: 'https://api.spotify.com',
      timeout: 1000,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const artistsResponse = await spotifyInstance
      .get(`/v1/search?q=${artist}&type=artist&limit=8`)
      .catch(async error => {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      });

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
                    const artistImageUrl = artist.images.length > 2 ? artist.images[2].url : '';

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
    );
  }
}

export default Search;
