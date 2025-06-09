import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiHtml5,
  SiCss3,
  SiPhp,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://devdocs.io/javascript/"
          target="_blank"
          rel="noreferrer"
        >
          <DiJavascript1 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://react.dev/reference/react"
          target="_blank"
          rel="noreferrer"
        >
          <DiReact />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.python.org/doc/" target="_blank" rel="noreferrer">
          <DiPython />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://docs.oracle.com/en/java/"
          target="_blank"
          rel="noreferrer"
        >
          <DiJava />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          target="_blank"
          rel="noreferrer"
        >
          <SiHtml5 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noreferrer"
        >
          <SiCss3 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a href="https://www.php.net/docs.php" target="_blank" rel="noreferrer">
          <SiPhp />
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;
