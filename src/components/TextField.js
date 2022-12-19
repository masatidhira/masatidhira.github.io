import React from "react";
import styled from "styled-components";

export const BannerHeading = styled.h1`
  font-family: var(--font-heading) !important;
  letter-spacing: 2px;
  font-size: 2.8rem;
  text-align: center;
  opacity: ${(props) => props.opacity};
`;

export const BannerName = styled.p`
  font-family: var(--font-latin) !important;
  font-size: 1.5rem;
  letter-spacing: 3px;
  transform: rotate(-20deg);
`;

export const SectionTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: var(--fs-medium);
  margin-bottom: 2rem;
`;

export const SectionParagraph = styled.p`
  font-family: var(--font-text-reguler);
  font-size: var(--fs-reguler);
  margin-bottom: 1rem;
  line-height: 1.8rem;
`;
