import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.asprop === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.asprop === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.asprop === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 400;
    `}

    ${(props) =>
    props.asprop === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}

  line-height: 1.4
`;

export default Heading;
