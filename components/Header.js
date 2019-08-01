/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Link from 'next/link';

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
          <a className="navbar-item" href="https://bulma.io">
            <img
              // eslint-disable-next-line max-len
              src="https://wac-cdn.atlassian.com/dam/jcr:616e6748-ad8c-48d9-ae93-e49019ed5259/Atlassian-horizontal-blue-rgb.svg?cdnVersion=483"
              width="202"
              height="28"
              alt="logo"
            />
          </a>
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

            <Link href="/search">
              <a className="navbar-item">Search</a>
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
                <a className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-light">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
