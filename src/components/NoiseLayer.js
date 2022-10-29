import React from "react";
import styled from "styled-components";
import noisegif from "../images/noise1.gif";

const NoiseLayer = () => {
  return (
    <Container>
      <Noise />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  position: fixed;
  pointer-events: none;
  opacity: 0.026;
  z-index: var(--z-index-noise);
`;

const Noise = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${noisegif});
`;

export default NoiseLayer;
