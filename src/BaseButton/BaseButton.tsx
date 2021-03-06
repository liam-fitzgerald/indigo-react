import styled from "styled-components";
import { compose } from "styled-system";
import { allSystemStyle, AllSystemProps } from "../systemHelpers";

export type BaseButtonProps = AllSystemProps;

export const BaseButton = styled.button<
  React.PropsWithChildren<BaseButtonProps>
>(compose(...allSystemStyle));

BaseButton.displayName = "BaseButton";
