import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import {
  border,
  BorderProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  ResponsiveValue,
  ThemeValue,
  RequiredTheme,
} from "styled-system";

export type ColProps = BorderProps &
  ColorProps &
  FlexboxProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    pitch?: ResponsiveValue<ThemeValue<"space", RequiredTheme>>;
  };

const style = ({ pitch }: ColProps) =>
  css({
    display: "flex",
    flexDirection: "column",
    "& > *": typeof pitch === "undefined" ? {} : { marginTop: pitch },
    "& :first-child": typeof pitch === "undefined" ? {} : { marginTop: 0 },
  } as SystemStyleObject);

const styleProps = [border, color, flexbox, layout, position, space];

const Col = styled.div<React.PropsWithChildren<ColProps>>(style, ...styleProps);

Col.displayName = "Col";
export default Col;