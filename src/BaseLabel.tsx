import styled from "styled-components";
import { compose } from "styled-system";
import { allSystemStyle, AllSystemProps } from "./system/unions";

export type BaseLabelProps = AllSystemProps;

export const BaseLabel = styled.label<React.PropsWithChildren<BaseLabelProps>>(
  compose(...allSystemStyle)
);

BaseLabel.displayName = "BaseLabel";
