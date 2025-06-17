import React, { useState } from "react";
import PropTypes from "prop-types";

import { Row, Col } from "react-bootstrap";
import TimelineItem from "components/TimelineItem";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import nl2br from "utils/nl2br";
import Fade from 'react-reveal/Fade';
import { AiOutlineFolder } from "react-icons/ai";

import "./Experience.scss";

const Experience = ({ className, frontmatter }) => {

  const [hoveredId, setHoveredId] = useState(null);

  if (!frontmatter) {
    return null;
  }

  const data = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Turnkey Learning",
      details: "Working on various software development projects, focusing on full-stack development and cloud solutions.",
      date: "Oct 2023 - Present",
    },
    {
      id: 2,
      title: "Product Intern",
      company: "Altimetrik Pvt Ltd",
      details: "worked as an intern for citi bank",
      date: "Feb 2023 - Aug 2023",
    },
    {
      id: 3,
      title: "Software Engineer Intern",
      company: "Boltzmann Labs",
      details: "Contributed to the development of AI-driven applications, enhancing user experience and functionality.",
      date: "May 2022 - Jul 2022",
    },
    {
      id: 4,
      title: "Web developer",
      company: "Ecell iiit pune",
      details: "worked as a full stack web developer at ecell iiit pune",
      date: "Dec 2021 - Mar 2022",
    }

  ]

  const { anchor, header: rootHeader, subheader: rootSubHeader, timeline } = frontmatter;


  return (
    <PageSection className={className} id={anchor}>
      <Row style={{ marginBottom: "70px" }}>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
        <Col lg={12}>
          <div className="justify-content-center d-flex flex-column align-items-center" style={{ marginTop: "-40px" }}>
            {data.map((item) => (
              <Fade bottom key={item.id}>
                <div
                  className="experience-card"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <h3 className="experience-title">{item.title}</h3>
                    <span className="experience-date">{item.date}</span>
                  </div>
                  <p className="experience-company">{item.company}</p>
                  {hoveredId === item.id && (
                    <p className="experience-details">{item.details}</p>
                  )}
                </div>
              </Fade>
            ))}
          </div>
        </Col>
      </Row>
    </PageSection>
  );
};

Experience.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

Experience.defaultProps = {
  className: null,
  frontmatter: null,
};

export default Experience;
