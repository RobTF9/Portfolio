import React from "react";
import { graphql } from "gatsby";
import SEO from "../../Layout/SEO";
import ProjectHero from "./ProjectHero";
import ProjectIntro from "./ProjectIntro";
import ProjectContent from "./ProjectContent";
import ProjectContact from "./ProjectContact";
import OtherProjects from "./OtherProjects";

const postLayout = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const {
    client,
    title,
    color,
    outline,
    link,
    content,
    featuredimage,
  } = frontmatter;

  // This is how you get the other projects array
  const { edges } = data.allMarkdownRemark;
  const projects = edges.filter(edge => {
    return edge.node.frontmatter.slug !== `${frontmatter.slug}`;
  });

  return (
    <>
      <SEO title={client} />
      <ProjectHero
        title={title}
        client={client}
        color={color}
        image={featuredimage.childImageSharp.fluid}
      />
      <ProjectIntro copy={outline} />
      <ProjectContent client={client} content={content} color={color} />
      <ProjectContact color={color} client={client} link={link} />
      <OtherProjects projects={projects} />
    </>
  );
};

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        client
        slug
        color
        outline
        link
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        content {
          video
          title
          copy
          layout
          image {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            client
            slug
            color
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 80) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default postLayout;
