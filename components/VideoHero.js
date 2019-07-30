import PropTypes from 'prop-types';

const VideoHero = ({ videoUrl }) => (
  <section className="hero is-fullheight video">
    <div className="hero-video">
      <video poster="" id="bgvid" playsInline autoPlay muted loop>
        <source src={videoUrl} type="video/webm" />
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
    <div className="hero-body">
      <div
        className="container"
        style={{
          color: '#fff',
          fontSize: '55px',
          lineHeight: '1.18',
          marginBottom: '90px',
          marginTop: '30px',
          fontWeight: '500',
          textShadow: '1px 2px rgba(6,6,6,.2)',
        }}
      >
        <p>Move work</p>
        <p>forward</p>
        <p style={{ fontSize: '23px' }}>Atlassian helps teams work smarter and faster, together.</p>
      </div>
    </div>
    <div className="hero-foot">
      <div className="has-text-centered">
        <p>Scroll down arrow here?</p>
      </div>
    </div>
  </section>
);

VideoHero.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

export default VideoHero;
