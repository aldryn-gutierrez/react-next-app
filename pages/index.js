/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import Page from "../components/Page";

const App = () => {
  return (
    <Page>
      <section
        className="hero is-info is-medium"
        style={{
          background:
            "url(https://img4.goodfon.com/wallpaper/nbig/d/b1/abstract-dark-blue-polygonal-background-abstraktsiia-geometr.jpg)"
        }}
      >
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Instrument. Measure. Improve.</h1>
            <h2 className="subtitle">
              Your customers expect perfection. We can help you deliver it.
            </h2>
            <a className="button is-medium is-primary">Request Demo</a>
          </div>
        </div>
      </section>

      <nav className="level" style={{ margin: "50px 0px" }}>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Tweets</p>
            <p className="title">3,456</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Following</p>
            <p className="title">123</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <p className="heading">Followers</p>
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

      <div className="container is-widescreen">
        <div className="notification">
          This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
          viewport homepage.
        </div>
      </div>

      <footer className="footer" style={{ marginTop: "20px" }}>
        <div className="content has-text-centered">
          <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source
            code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content is
            licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>
            .
          </p>
        </div>
      </footer>
    </Page>
  );
};

export default App;
