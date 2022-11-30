import React from "react";
import styled from "styled-components";

export const BannerHeading = styled.h1`
  display: flex;
  flex-direction: column;
  font-family: var(--font-heading) !important;
  letter-spacing: 2px;

  span {
    font-size: 3.2rem;
    text-align: center;
  }
`;

export const BannerHeading2 = styled.h2`
  display: flex;
  flex-direction: column;
  font-family: var(--font-latin) !important;
  font-size: 1.5rem;
  letter-spacing: 3px;
  line-height: 3rem;
  text-align: right;
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
