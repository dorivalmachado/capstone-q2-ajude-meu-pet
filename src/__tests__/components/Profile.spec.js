import React from "react";
import axios from "axios";
import { render, screen, fireEvent, waitFor} from "@testing-library/react";
import Profile from "../../Components/Profile";
import Provider from "../../Providers";

jest.mock('../../Providers/Auth', () => {
  return {
    useAuth: () => ({
      updateUser: jest.fn(),
      user: {
        "email": "kenzinho@mail.com",
        "password": "$2a$10$YQiiz0ANVwIgpOjYXPxc0O9H2XeX3m8OoY1xk7OGgxTnOJnsZU7FO",
        "name": "Kenzinho",
        "phone": "(22)98729-9061",
        "street": "CustomAddress",
        "addressNumber": "1733",
        "addressComplement": "706",
        "city": "Curitiba",
        "isClient": false,
        "id": 1
      }
    })
  }
})

describe("Profile Component when OK", () => {
  it("should be able to render a component containing cat content", () => {

    render(
      <Profile open={true} onClose={() => { }} />
    );
    
    const labelNameProfile = 'Kenzinho';
    const labelEmailProfile = 'kenzinho@mail.com';
    const labelPasswordProfile = 'Senha';
    const buttonShowPasswordProfile = 'InputAdornment'
    // const contentPasswordProfile = 'customPassword';
    // const labelAddressProfile = 'CustomAddress';
    const labelPhoneProfile = '(22)98729-9061';
  
    const labelNameElementProfile = screen.getByDisplayValue(labelNameProfile);
    const labelEmailElementProfile = screen.getByDisplayValue(labelEmailProfile);
    // const contentPasswordElementProfile = screen.findByDisplayValue(labelPasswordProfile);
    const labelPasswordElementProfile = screen.getByLabelText(labelPasswordProfile);
    // const buttonElementShowPasswordProfile = screen.getByLabelText(buttonShowPasswordProfile);
    // const labelAddressElementProfile = screen.getByDisplayValue(labelAddressProfile);
    const labelPhoneElementProfile = screen.getByDisplayValue(labelPhoneProfile);

    // fireEvent.click(buttonElementShowPasswordProfile);
    
    // await waitFor(() => {
    //   expect(contentPasswordElementProfile).toBeTruthy();
    // });

    expect(labelNameElementProfile).toBeTruthy();
    expect(labelEmailElementProfile).toBeTruthy();
    expect(labelPasswordElementProfile).toBeTruthy();
    // expect(labelAddressElementProfile).toBeTruthy();
    expect(labelPhoneElementProfile).toBeTruthy();
    
  })
})
