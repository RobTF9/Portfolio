import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FaFilePdf } from "react-icons/fa";

import { ContentContainer } from "../Common/Container";
import ExperienceCard from "./ExperienceCard";
import { animations } from "../../shared/transitions";
import TitleCard from "../Common/TitleCard";

const ExperienceList = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query ExperienceListQuery {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___order] }
        filter: { fileAbsolutePath: { regex: "/experience/" } }
      ) {
        edges {
          node {
            frontmatter {
              order
              title
              to
              from
              current
              role
              description
            }
          }
        }
      }
    }
  `);
  return (
    <ContentContainer style={animations.verticleSlide(`15rem`, 0)}>
      <TitleCard
        title="Experience"
        copy="Download a copy of my CV below."
        link="https://drive.google.com/open?id=1RJqCxU6n1Ceeie98eTTPlcicSkt9BwA"
        linkText="Download CV"
        icon={<FaFilePdf />}
      />

      <div>
        {allMarkdownRemark.edges.map(({ node }) => (
          <ExperienceCard
            key={node.frontmatter.title}
            experience={node.frontmatter}
          />
        ))}
      </div>
    </ContentContainer>
  );
};

export default ExperienceList;
