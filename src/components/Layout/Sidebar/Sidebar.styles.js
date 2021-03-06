import styled from "styled-components";
import { color, spacing, typography } from "../../../constants/styles";

const Container = styled.div`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  overflow: hidden;
  z-index: 1;

  background: ${(props) => props.theme.gray6};
  padding: ${spacing.padding.large}px 0;
  border-left: 1px solid ${(props) => props.theme.gray7};
  box-shadow: 0 1px 4px 0 rgba(12, 12, 13, 0.1);

  transform: ${(props) =>
    props.visible ? "translateX(0)" : "translate(400px)"};
  transition: 200ms;
`;

const SidebarHeader = styled.div`
  margin-bottom: 25px;
  padding: 0 40px;

  h3 {
    margin: 0;
    font-size: ${typography.size.m2}rem;
    font-weight: ${typography.weight.medium};
    margin-bottom: 8px;
  }

  p {
    margin: 0;
    font-size: ${typography.size.s2}rem;
  }
`;

const Navigation = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
  padding: 0 40px;
`;

const NavigationItem = styled.li`
  list-style-type: none;
  font-weight: ${typography.weight.medium};
  font-size: ${typography.size.s2}rem;
  color: ${(props) => color.primary};
  cursor: pointer;

  cursor: ${({ active }) => (active ? "default" : "")};
  color: ${(props) => {
    const isActive = props.active;

    if (isActive) {
      return props.theme.black;
    } else {
      return color.primary;
    }
  }};
`;

const SidebarContainer = styled.div`
  height: calc(100vh - 244px);
  width: 400px;
  overflow: hidden;
  position: relative;
`;

const SidebarInnerContainer = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  overflow-y: hidden;

  ${({ page }) => (page === "sources" ? `transform: translateX(0);` : "")}

  ${({ page }) =>
    page === "marketplace" ? `transform: translateX(-400px);` : ""}

  ${({ page }) => (page === "settings" ? `transform: translateX(-800px);` : "")}
`;

const SidebarPage = styled.div`
  width: 400px;
  height: 100%;
  position: relative;
  overflow-y: scroll;
  padding: 0 40px;
`;

const SettingsList = styled(SidebarPage)`
  & > div:last-child {
    margin-bottom: 100px;
  }
`;

const Settings = styled.div``;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 399px;
  height: 80px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  background: ${(props) => props.theme.white};
  border-top: 1px solid ${(props) => props.theme.gray7};
  padding: ${spacing.padding.xmedium}px ${spacing.padding.large}px;
`;

const FooterButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.gray6};
  border-radius: ${spacing.borderRadius.small}px;
  font-size: ${typography.size.s2}rem;
  padding: ${spacing.padding.small}px ${spacing.padding.medium}px;
  background: ${(props) => color.primary};
  color: white;
  border: none;
`;

export {
  Container,
  SidebarHeader,
  Navigation,
  NavigationItem,
  SidebarContainer,
  SidebarInnerContainer,
  SettingsList,
  Settings,
  Footer,
  FooterButton,
};
