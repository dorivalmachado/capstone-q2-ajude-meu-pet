import { render, screen, waitFor } from "@testing-library/react";
import Provider from "../../../Providers";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "../../../App";

describe("Render the LandingPage page", () => {
  it("Should render the LandingPage and tests the links in the page", async () => {
    render(
      <MemoryRouter>
        <Provider>
          <App />
        </Provider>
      </MemoryRouter>
    );

    const login = screen.getByText(/login/i);

    userEvent.click(login);

    await waitFor(() => {
      expect(screen.getByText("Entrar")).toBeInTheDocument();
    });
  });
});
