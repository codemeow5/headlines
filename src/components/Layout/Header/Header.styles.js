import styled from "styled-components";
import { MdSettings } from "react-icons/md";
import { spacing } from "../../../constants/styles";

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  padding-top: ${spacing.padding.xmedium}px;
  padding-left: ${spacing.padding.xmedium}px;
  padding-right: ${spacing.padding.xmedium}px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SettingIcon = styled(MdSettings)`
  width: 20px;
  height: 20px;
  color: ${(props) => props.theme.gray8};
`;

const SettingButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${spacing.borderRadius.small}px;
  padding: ${spacing.padding.xsmall}px;
  background: transparent;
  cursor: pointer;
  border: none;

  &:hover {
    background: ${(props) => props.theme.gray7};
  }
`;

export { Container, SettingIcon, SettingButton };
