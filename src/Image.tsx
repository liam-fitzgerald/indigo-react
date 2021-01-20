import styled from "styled-components";
import { allSystemStyle, AllSystemProps } from "./system/unions";

export type ImageProps = AllSystemProps;

export const Image = styled.img<React.PropsWithChildren<ImageProps>>(
  {
    width: "100%",
    height: "auto",
  },
  ...allSystemStyle
);

Image.displayName = "Image";
