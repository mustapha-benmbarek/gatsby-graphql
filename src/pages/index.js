// @title: <<gatsby-003-graphql>> program written in Gatsby-JS.
// @desc: Creates a simple helloWorld using a simple graphql query.
// @author: Mustapha Benmbarek.
// @Copyright © 2019 All rights reserved.
// @version: 1.0.

import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <h2>{data.site.siteMetadata.author}</h2>
      <p>{data.site.siteMetadata.description}</p>
    </div>
  );
};

export default IndexPage;
