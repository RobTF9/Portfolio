import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../shared/colors";
import { Link } from "gatsby";
import Img from "gatsby-image";
import { MdArrowForward } from "react-icons/md";
import { Waypoint } from "react-waypoint";

const ProjectCard = ({ project }) => {
  const [visible, setVisible] = useState(false);

  const handleEnter = () => {
    setVisible(true);
  };

  const handleExit = () => {
    setVisible(false);
  };

  return (
    <Link to={`/projects/${project.slug}`}>
      <Card color={project.color}>
        <Copy visible={visible} className="copy">
          <p>{project.client}</p>
          <h2>{project.title}</h2>
        </Copy>
        <Image visible={visible}>
          <Waypoint onEnter={handleEnter} onLeave={handleExit} />
          <Img fluid={project.featuredimage.childImageSharp.fluid} />
        </Image>
        <ReadMore visible={visible} color={project.color}>
          Read more
          <MdArrowForward />
        </ReadMore>
      </Card>
    </Link>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectCard;

const Card = styled.article`
  position: relative;
  cursor: pointer;
  background-color: ${props => props.color};
  margin: 0 3rem 8rem 3rem;
  padding: 4rem 2rem;
`;

const Copy = styled.div`
  margin-bottom: 4rem;
  transform: translateY(${({ visible }) => (visible ? -5 : 0)}rem);
`;

const Image = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  margin-bottom: 4rem;

  .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const ReadMore = styled.h4`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  right: 2rem;
  bottom: 4rem;
  color: ${colors.white};
  text-align: center;
  transform: translateY(${({ visible }) => (visible ? 5.6 : 0)}rem);

  svg {
    font-size: 3.2rem;
  }
`;
