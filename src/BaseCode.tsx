import styled from "styled-components";
import { compose } from "styled-system";
import { allSystemStyle, AllSystemProps } from "./system/unions";

export type BaseCodeProps = AllSystemProps;

export const BaseCode = styled.code<React.PropsWithChildren<BaseCodeProps>>(
  compose(...allSystemStyle)
);

BaseCode.displayName = "BaseCode";
