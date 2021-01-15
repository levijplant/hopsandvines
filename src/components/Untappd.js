import React from "react";
import Container from 'react-bootstrap/Container';
import Image from "react-bootstrap/Image";
import "./Untappd.css";

const Untappd = () => {
  return (
    <Container id="untappd-div">
      <h2 className="rotation">Beer Rotation</h2>
      <h4 className="visit-untappd">
        We rotate our beers daily. Visit Untappd to see what's new today.
      </h4>
      <a
        href="https://untappd.com/v/hops-and-vines/9014721"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="view-untappd">
          View Beers on Untappd
          <Image
            name="arrow right"
            size="large"
            style={{ paddingLeft: "10px" }}
          />
        </button>
      </a>
    </Container>
  );
};

export default Untappd;
