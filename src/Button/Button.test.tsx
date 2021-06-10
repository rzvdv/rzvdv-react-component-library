import React from "react";
import { render } from "@testing-library/react";

import { Button, ButtonProps } from "./Button";

describe("Test Component", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      primary: false,
      label: "Test",
      size: "medium",
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("button");

    expect(testComponent).toHaveClass(`storybook-button--${props.size}`);
  });
});
