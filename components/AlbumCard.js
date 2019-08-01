import PropTypes from 'prop-types';

const AlbumCard = ({ albumArtUrl, title, artist }) => (
  <div className="card" style={{ margin: '0px 10px' }}>
    <div className="card-image">
      <figure className="image is-4by3">
        <img src={albumArtUrl} alt={title} />
      </figure>
    </div>
    <div className="card-content">
      <div className="media">
        <div className="media-content has-text-centered">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{artist}</p>
        </div>
      </div>

      <div className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
        <br />
        <a>@bulmaio</a>
        <br />
        <a href="#">#css</a>
        <a href="#">#responsive</a>
        <br />
        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
      </div>
    </div>
  </div>
);

AlbumCard.propTypes = {
  albumArtUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

export default AlbumCard;
