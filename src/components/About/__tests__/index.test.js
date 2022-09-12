import React from "react";

import { render, cleanup } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import About from "..";

// after each test, we won't have leftover memory data
afterEach(cleanup);

describe("About component", () => {
  // renders About test
  // First test
  // 'it' first arg = string of what's being tested
  //      second arg =  cb that runs the test
  it("renders", () => {
    render(<About />);
  });

  // Second test
  it("matches snapshot DOM node structure", () => {
    // render About
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
