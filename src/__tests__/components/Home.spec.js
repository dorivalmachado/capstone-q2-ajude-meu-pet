import { act, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import matchMediaPolyfill from "mq-polyfill";

import Home from "../../Components/Home";

describe("Render the home component", () => {
  beforeAll(() => {
    matchMediaPolyfill(window);
    window.resizeTo = function resizeTo(width, height) {
      Object.assign(this, {
        innerWidth: width,
        innerHeight: height,
        outerWidth: width,
        outerHeight: height,
      }).dispatchEvent(new this.Event("resize"));
    };
  });
  it("Should render the home component in desktop version", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    expect(
      screen.queryByText(/Cuide do seu melhor amigo/i)
    ).not.toBeInTheDocument();
    expect(screen.getAllByAltText("Adestramento")).toHaveLength(3);
    expect(screen.getAllByAltText("Caminhada")).toHaveLength(2);
    expect(screen.getByText(/Não é cadastrado ainda?/i)).toBeInTheDocument();
  });

  it("Should render the component in mobile version", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    act(() => {
      window.resizeTo(765, 800);
    });

    expect(screen.getByText(/Cuide do seu melhor amigo/i)).toBeInTheDocument();
    expect(screen.queryByAltText("Adestramento")).not.toBeInTheDocument();
  });
});
