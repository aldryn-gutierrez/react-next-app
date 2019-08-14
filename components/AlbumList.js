/* eslint-disable max-len */
import React from 'react';
import AlbumCard from './AlbumCard';

class AlbumList extends React.Component {
  state = {
    albums: [],
  };

  componentDidMount() {
    this.loadAlbums();
  }

  loadAlbums() {
    const albums = [
      {
        albumArtUrl: 'https://i.scdn.co/image/715d1b62f6a0a66a2262372029f3789ec2a4e6f1',
        artist: 'Soundtrack',
        title: 'Lion King (2019)',
      },
      {
        albumArtUrl:
          'https://charts-static.billboard.com/img/2019/08/sum-41-35q-order-in-decline-14o-174x174.jpg',
        artist: 'Sum 41',
        title: 'Order In Decline',
      },
      {
        albumArtUrl:
          'https://media.pitchfork.com/photos/5d30e22e1852280008e54091/1:1/w_320/IggyAzalea_InMyDefense.jpg',
        artist: 'Iggy Azalea',
        title: 'In My Defense',
      },
      {
        albumArtUrl:
          'https://is2-ssl.mzstatic.com/image/thumb/Music123/v4/ab/57/66/ab576613-c7a5-e414-64f2-de9b50ae4c4f/ITZY_ICY_ONLINE_COVER_1.jpg/600x600bf.png',
        artist: 'ITZY',
        title: "IT'z ICY -EP",
      },
    ];

    this.setState({ albums });
  }

  render() {
    const { albums } = this.state;
    return (
      <div className="content columns">
        {albums.map(({ albumArtUrl, artist, title }) => (
          <AlbumCard key={title} albumArtUrl={albumArtUrl} artist={artist} title={title} />
        ))}
      </div>
    );
  }
}

export default AlbumList;
