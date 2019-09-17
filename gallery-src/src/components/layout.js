import React from 'react';
import { Link } from 'gatsby';

import Bio from './bio';
import ButtonLink from './button-link';

import { rhythm, scale } from '../utils/typography';

class Layout extends React.Component {
  render() {
    const { location, title, description, children } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;
    let header;

    if (location.pathname === rootPath) {
      header = (
        <>
          <div
            style={{
              display: `flex`,
              flexDirection: `row-reverse`,
              padding: `.5em`
            }}>
            <ButtonLink
              text="Submit new element"
              to="https://github.com/Kentico/kontent-custom-element-samples#feedback--contributing"
            />
          </div>
          <h1
            style={{
              ...scale(1.5),
              marginBottom: rhythm(1.5),
              marginTop: 0,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
        </>
      );
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      );
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>
          {header}
          <p>{description}</p>
        </header>

        <main>{children}</main>
        <footer>
          <Bio />
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
          {` `}
          using
          {` `}
          <a href="https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/">
            Gatsby Starter Blog
          </a>
          {` `}
          by
          {` `}
          <a href="https://www.twitter.com/kylemathews">Kyle Mathews</a>
        </footer>
      </div>
    );
  }
}

export default Layout;
