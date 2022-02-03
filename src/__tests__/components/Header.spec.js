import { act, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Provider from "../../Providers";
import matchMediaPolyfill from "mq-polyfill";
import userEvent from "@testing-library/user-event";
import Header from "../../Components/Header";

describe("Rendering Header component", () => {
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
  it("Should render the Header component in the desktop page version", () => {
    render(
      <MemoryRouter>
        <Provider>
          <Header />
        </Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Passeios")).toBeInTheDocument();
    expect(screen.getByText("Adestramento")).toBeInTheDocument();
    expect(screen.getByText("Taxi-Pet")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("Should render the Header component in the mobile page version without login", () => {
    render(
      <MemoryRouter>
        <Provider>
          <Header />
        </Provider>
      </MemoryRouter>
    );

    act(() => {
      window.resizeTo(765, 800);
    });

    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(screen.getByText("Logar")).toBeInTheDocument();
    expect(screen.getByText("Cadastrar")).toBeInTheDocument();
  });

  it("Should render the Header component in the mobile page version logged", () => {
    render(
      <MemoryRouter>
        <Provider>
          <Header isLogged={true} />
        </Provider>
      </MemoryRouter>
    );

    act(() => {
      window.resizeTo(765, 800);
    });

    const button = screen.getByRole("button");
    userEvent.click(button);
    expect(screen.getByText("Meus Pets")).toBeInTheDocument();
    expect(screen.getByText("Serviços")).toBeInTheDocument();
    expect(screen.getByText("Perfil")).toBeInTheDocument();
    expect(screen.getByText("Sair")).toBeInTheDocument();
  });
});
