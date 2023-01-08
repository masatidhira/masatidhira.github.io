import React from "react";
import styled from "styled-components";

export const BannerHeading = styled.h1`
  font-family: var(--font-heading) !important;
  letter-spacing: 4px;
  font-size: 3.4rem;
  text-align: center;
  opacity: ${(props) => props.opacity};
`;

export const BannerName = styled.p`
  font-family: var(--font-latin) !important;
  font-size: 1.3rem;
  letter-spacing: 3px;
  transform: rotate(-15deg);
`;

export const SectionTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: var(--fs-medium);
  letter-spacing: 1px;
  margin-bottom: 1rem;
`;

export const SectionParagraph = styled.p`
  font-family: var(--font-text-reguler);
  font-size: var(--fs-reguler);
  margin-bottom: 1rem;
  line-height: 1.8rem;
`;
