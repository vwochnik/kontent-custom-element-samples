import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';

const createAnchor = (input) => {
  return input.toLowerCase().trim().split(' ').join('-');
}


class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const siteDescription = data.site.siteMetadata.description;
    const elements = data.allElementsJson.edges;

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        description={siteDescription}
      >
        <SEO
          title="Custom element list"
          keywords={[
            `Kentico Kontent`,
            `caas`,
            `javascript`,
            `extensions`,
            `custom elements`,
          ]}
        />
        <h2>Gallery</h2>
        <details className="navigation">
          <summary>Show navigation</summary>
          <ul>
            {elements.map(({ node }) => (
              <li key={node.id}><a href={`#${createAnchor(node.title)}`}>{node.title}</a></li>
            ))}
          </ul>
        </details>
        {elements.map(({ node }) => (
          <div key={node.id} id={createAnchor(node.title)}>
            <a href={node.readmeUrl}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                {node.title}
              </h3>
            </a>
            <p>{node.description}</p>
            <a href={node.readmeUrl}>
              <img
                src={node.thumbnailUrl}
                alt={`${node.title} custom element`}
              />
            </a>
          </div>
        )
        )}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
  description
    }
  }

  allElementsJson(sort: {fields: title}) {
    edges {
      node {
        id
        title
        description
        thumbnailUrl
        readmeUrl
      }
    }
  }
}
`;
