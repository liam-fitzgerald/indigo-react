import * as React from "react";
import styled from "styled-components";
import css, { SystemStyleObject } from "@styled-system/css";
import { BaseSVG } from "./index";

export type LoadingSpinnerProps = {
  foreground?: string;
  background?: string;
  light?: boolean;
  dark?: boolean;
};

const Foreground = styled.path(({ foreground }: LoadingSpinnerProps) =>
  css({
    animation: "loadingSpinnerRotation 750ms linear infinite",
    transformOrigin: "50%",
    fill: foreground,
  } as SystemStyleObject)
);

const Background = styled.path(({ background }: LoadingSpinnerProps) =>
  css({
    fill: background,
  } as SystemStyleObject)
);

export const LoadingSpinner = ({
  foreground = "blue",
  background = "scales.black20",
  light = false,
  dark = false,
  ...props
}: LoadingSpinnerProps) => (
  <BaseSVG width="3" height="3" {...props} viewBox={"0 0 16 16"}>
    <Background
      background={
        light ? "scales.white30" : dark ? "scales.black20" : background
      }
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
    />
    <Foreground
      foreground={light ? "white" : dark ? "black" : foreground}
      d="M12.4446 1.34824C11.129 0.469192 9.58225 0 8 0L8 4C10.2091 4 12 5.79086 12 8C12 10.2091 10.2091 12 8 12C5.79086 12 4 10.2091 4 8L0 8C0 9.58225 0.469191 11.129 1.34824 12.4446C2.22729 13.7602 3.47672 14.7855 4.93853 15.391C6.40034 15.9965 8.00887 16.155 9.56072 15.8463C11.1126 15.5376 12.538 14.7757 13.6569 13.6569C14.7757 12.538 15.5376 11.1126 15.8463 9.56072C16.155 8.00888 15.9965 6.40034 15.391 4.93853C14.7855 3.47672 13.7602 2.2273 12.4446 1.34824Z"
    />
  </BaseSVG>
);

LoadingSpinner.displayName = "LoadingSpinner";
