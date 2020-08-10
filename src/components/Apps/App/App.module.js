import styled from "styled-components";
import placeholder from "../../../assets/app/placeholder.png";
import { spacing, typography } from "../../../constants/styles";

export const Container = styled.a`
  background: ${(props) => props.theme.white};
  list-style-type: none;
  border: 1px solid ${(props) => props.theme.gray7};
  border-radius: ${spacing.borderRadius.small}px;
  text-decoration: none;

  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.01);
  transition: box-shadow 150ms;

  &:hover {
    box-shadow: 0 0 0 5px #007aff;
  }
`;

export const AppImage = styled.div`
  height: 100px;
  background: #eee;
  border-radius: ${spacing.borderRadius.small}px;
  margin: 8px 8px 0;
  margin-bottom: 10px;
  overflow: hidden;

  background-image: url(${placeholder});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border: 1px solid ${(props) => props.theme.gray7};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: 150ms;
  ${({ loaded }) => (loaded ? "opacity: 1;" : "opacity: 0;")};
  ${({ loaded }) => (loaded ? "filter: blur(0);" : "filter: blur(5px);")}
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.black};
  font-size: ${typography.size.s2}rem;
  font-weight: ${typography.weight.medium};
  line-height: 140%;
  margin: 0 0 10px;
`;

export const Overflow = styled.div`
  overflow: hidden;
  padding: 0 ${spacing.padding.xmedium}px;
`;
