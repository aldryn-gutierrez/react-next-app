/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Link from 'next/link';
import axios from 'axios';

class Header extends React.Component {
  state = { isActive: false };

  render() {
    const { isActive } = this.state;
    return (
      <nav
        className="navbar"
        role="navigation"
        aria-label="main navigation"
        style={{ minHeight: '6.25rem' }}
      >
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item" href="/">
              <img
                // eslint-disable-next-line max-len
                src="https://wac-cdn.atlassian.com/dam/jcr:616e6748-ad8c-48d9-ae93-e49019ed5259/Atlassian-horizontal-blue-rgb.svg?cdnVersion=483"
                width="202"
                height="28"
                alt="logo"
              />
            </a>
          </Link>
          <a
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            onClick={e => this.setState({ isActive: !e.target.classList.contains('is-active') })}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            style={{ height: '6.25rem' }}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link href="/">
              <a className="navbar-item">Home</a>
            </Link>

            <Link href="/blog">
              <a className="navbar-item">Blog</a>
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">More</a>

              <div className="navbar-dropdown">
                <a className="navbar-item">About</a>
                <a className="navbar-item">Jobs</a>
                <a className="navbar-item">Contact</a>
                <hr className="navbar-divider" />
                <a className="navbar-item">Report an issue</a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a
                  className="button is-primary"
                  href="https://accounts.spotify.com/authorize?client_id=34191669a70d4f20a7339815af6bea0c&redirect_uri=http://localhost:3000&response_type=token"
                >
                  <strong>Log In</strong>
                </a>
                <a className="button is-light">Sign up</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
