import * as React from "react";
import { LayoutProps, SpaceProps } from "styled-system";
import styled from "styled-components";
// import { useField } from "formik";
import { Theme } from "./theme/index";

// import InputLabel from "./Label";
// import InputCaption from "./InputCaption";
// import ErrorMessage from "./ErrorMessage";

import Box from "./Box";
import Icon from "./Icon";

// type Props = LayoutProps &
//   SpaceProps & {
//     caption?: string;
//     label: string;
//     id: string;
//     disabled?: boolean;
//   };

type InternalProps = {
  checked?: boolean;
  disabled?: boolean;
  hasError?: boolean;
};

type BoxInput = InternalProps & { theme: Theme };

const offBox = (p: BoxInput) => `
  border-color: ${p.theme.colors.lightGray};
  background-color: ${p.theme.colors.white};
  * {
    fill:  ${p.theme.colors.white};
  }

  ${HiddenInput}:focus ~ & {
    border-color: ${p.theme.colors.blue};
  }
`;

const onBox = (p: BoxInput) => `
  border-color: ${p.theme.colors.blue};
  background-color: ${p.theme.colors.blue};
  * {
    fill:  ${p.theme.colors.white};
  }
`;

const offBoxCaution = (p: BoxInput) => `
  border-color: ${p.theme.colors.red};
  background-color: ${p.theme.colors.white};
  * {
    fill:  ${p.theme.colors.white};
  }

  ${HiddenInput}:focus ~ & {
    background-color: ${p.theme.colors.white};
    * {
      fill:  ${p.theme.colors.red};
    }
  }
`;

const onBoxCaution = (p: BoxInput) => `
  border-color: ${p.theme.colors.red};
  background-color: ${p.theme.colors.red};
  * {
    fill:  ${p.theme.colors.white};
  }
`;

const disabledBox = (p: BoxInput) => `
  border-color: ${p.theme.colors.lightGray};
  background-color: ${p.theme.colors.washedGray};
  * {
    fill:  ${p.theme.colors.lightGray};
  }
`;

// Hide this input completely
const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  margin: 0px;
`;

const Label = styled.label<InternalProps>`
  display: block;
  position: relative;
  padding: 0px;
  padding-left: 24px;
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")}};
`;

const Indicator = styled.div<InternalProps>`
  position: absolute;
  top: ${(p) => (p.theme.fontSizes[0] - 12) / 2}px;
  left: 0px;
  height: 16px;
  width: 16px;
  border-radius: ${(p) => p.theme.radii[2]}px;
  border-width: 1px;
  border-style: solid;

  ${(p) => {
    if (p.disabled) return disabledBox(p);
    if (p.checked) return onBox(p);
    if (p.hasError && !p.checked) return offBoxCaution(p);
    if (p.hasError && p.checked) return onBoxCaution(p);
    return offBox(p);
  }};
`;

export type UncontrolledCheckboxProps = LayoutProps &
  SpaceProps & {
    id?: string;
    disabled?: boolean;
    error?: boolean;
    checked?: boolean;
    touched?: boolean;
  };

const UncontrolledCheckbox = ({
  id,
  disabled,
  error,
  checked,
  touched,
  ...props
}: UncontrolledCheckboxProps) => {
  return (
    <Box {...props}>
      <Label disabled={disabled} htmlFor={id}>
        <HiddenInput
          // {...field}
          value={id}
          name={id}
          id={id}
          disabled={disabled}
          type="checkbox"
        />
        <Indicator
          hasError={touched && error !== undefined}
          checked={checked}
          disabled={disabled}
        >
          {checked ? (
            <Icon
              position="absolute"
              top="0px"
              left="0px"
              size="14px"
              icon="CheckmarkBold"
            />
          ) : null}
        </Indicator>
      </Label>
    </Box>
  );
};

UncontrolledCheckbox.displayName = "UncontrolledCheckbox";
export default UncontrolledCheckbox;