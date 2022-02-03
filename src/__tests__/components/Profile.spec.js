import React from "react";
import { render, screen } from "@testing-library/react";
import Profile from "../../Components/Profile";

jest.mock("../../Providers/Auth", () => {
  return {
    useAuth: () => ({
      updateUser: jest.fn(),
      user: {
        email: "kenzinho@mail.com",
        password:
          "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
        name: "Kenzinho",
        phone: "(22)98729-9061",
        street: "CustomAddress",
        addressNumber: "1733",
        addressComplement: "706",
        city: "Curitiba",
        isClient: false,
        id: 1,
      },
    }),
  };
});

describe("Profile Component when OK", () => {
  it("should be able to render a component containing cat content", () => {
    render(<Profile open={true} onClose={() => {}} />);

    const labelNameProfile = "Kenzinho";
    const labelEmailProfile = "kenzinho@mail.com";
    const labelPasswordProfile = "Senha";
    const labelPhoneProfile = "(22)98729-9061";

    const labelNameElementProfile = screen.getByDisplayValue(labelNameProfile);
    const labelEmailElementProfile =
      screen.getByDisplayValue(labelEmailProfile);
    const labelPasswordElementProfile =
      screen.getByLabelText(labelPasswordProfile);
    const labelPhoneElementProfile =
      screen.getByDisplayValue(labelPhoneProfile);

    expect(labelNameElementProfile).toBeTruthy();
    expect(labelEmailElementProfile).toBeTruthy();
    expect(labelPasswordElementProfile).toBeTruthy();
    expect(labelPhoneElementProfile).toBeTruthy();
  });
});
