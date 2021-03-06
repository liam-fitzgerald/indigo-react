import * as React from "react";
import { Indicator } from "../Indicator/Indicator";
import { Icon } from "../Icon/Icon";
import { StructureProps } from "../systemHelpers";

export type CheckboxProps = StructureProps & {
  selected?: boolean;
  hasError?: boolean;
  disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Checkbox = ({
  selected,
  disabled,
  hasError,
  ...props
}: CheckboxProps) => {
  return (
    <Indicator
      selected={selected}
      disabled={disabled}
      hasError={hasError}
      {...props}
    >
      <Icon icon={selected ? "CheckmarkBold" : "Blank"} />
    </Indicator>
  );
};

Checkbox.displayName = "Checkbox";
