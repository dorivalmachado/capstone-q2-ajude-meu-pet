import { render, screen, waitFor } from "@testing-library/react";
import Providers from "../../../Providers";

import { HiredServices } from "../../../Components/HiredServices";

import { api } from "../../../Services/api";
import MockAdapter from "axios-mock-adapter";

const apiMock = new MockAdapter(api, { onNoMatch: "throwException" });

jest.mock("../../../Providers/Services", () => {
  return {
    useServices: () => ({
      services: [
        {
          serviceCategory: "adestramento",
          serviceDescription: "básico",
          serviceDesiredDate: "05/02/2022",
          serviceDesiredTime: "09:30",
          serviceObs: "Quero que meu cachorro aprenda a sentar",
          serviceDepartureStreet: "Avenida das Américas",
          serviceDepartureNumber: "2345",
          serviceDepartureComplement: "bloco 1, ap 1508",
          serviceDepartureCity: "Rio de Janeiro",
          serviceArrivalStreet: "",
          serviceArrivalNumber: "",
          serviceArrivalComplement: "",
          serviceArrivalCity: "",
          serviceConclusion: false,
          clientId: 2,
          workerId: 1,
          petId: 1,
          id: 1,
        },
      ],
    }),
  };
});

jest.mock("../../../Providers/Pets", () => {
  return {
    usePets: () => ({
      pets: [
        {
          userId: 2,
          petName: "Caramelo",
          petType: "cachorro",
          petBirthDate: "11/09/2015",
          petGender: "male",
          petSize: "médio",
          id: 3,
        },
      ],
    }),
  };
});

jest.mock("../../../Providers/Auth", () => {
  return {
    useAuth: () => ({
      user: [
        {
          email: "johndoe@mail.com",
          password:
            "$2a$10$N/QQ5ePqtKPAZcJntBNScei8qfEkhwYCt9TIxEDOXxhYwmHUXFaPi",
          name: "John Doe",
          phone: "(44)99562-4420",
          street: "Avenida das Américas",
          addressNumber: "2345",
          addressComplement: "bloco 1, ap 1508",
          city: "Rio de Janeiro",
          isClient: true,
          id: 2,
        },
      ],
    }),
  };
});

describe("Render the Hired Services component", () => {
  it("Should render the Hired Services component when user haven't any service", async () => {
    render(
      // <Providers>
      <HiredServices />
      // </Providers>
    );

    expect(
      await screen.findByText(/Nenhum serviço contratado/i)
    ).toBeInTheDocument();
  });

  it("Should render the Hired Services component when user have services", () => {
    render(
      // <Providers>
      <HiredServices />
      // </Providers>
    );

    // await waitFor(() => {
    // expect.objectContaining({
    //   serviceCategory: "adestramento",
    // })
    expect(screen.getByAltText(/cachorro/i)).toBeInTheDocument();
    // });

    // apiMock.onGet("/services").replyOnce(200, [
    //   {
    //     serviceCategory: "adestramento",
    //     serviceDescription: "básico",
    //     serviceDesiredDate: "05/02/2022",
    //     serviceDesiredTime: "09:30",
    //     serviceObs: "Quero que meu cachorro aprenda a sentar",
    //     serviceDepartureStreet: "Avenida das Américas",
    //     serviceDepartureNumber: "2345",
    //     serviceDepartureComplement: "bloco 1, ap 1508",
    //     serviceDepartureCity: "Rio de Janeiro",
    //     serviceArrivalStreet: "",
    //     serviceArrivalNumber: "",
    //     serviceArrivalComplement: "",
    //     serviceArrivalCity: "",
    //     serviceConclusion: false,
    //     clientId: 2,
    //     workerId: 1,
    //     petId: 1,
    //     id: 1,
    //   },
    // ]);
    // apiMock.onGet("/pet").replyOnce(200, [
    //   {
    //     userId: 2,
    //     petName: "Caramelo",
    //     petType: "cachorro",
    //     petBirthDate: "11/09/2015",
    //     petGender: "male",
    //     petSize: "médio",
    //     id: 3,
    //   },
    // ]);

    // apiMock.onGet("/login").replyOnce(200, [
    //   {
    //     email: "johndoe@mail.com",
    //     password:
    //       "$2a$10$N/QQ5ePqtKPAZcJntBNScei8qfEkhwYCt9TIxEDOXxhYwmHUXFaPi",
    //     name: "John Doe",
    //     phone: "(44)99562-4420",
    //     street: "Avenida das Américas",
    //     addressNumber: "2345",
    //     addressComplement: "bloco 1, ap 1508",
    //     city: "Rio de Janeiro",
    //     isClient: true,
    //     id: 2,
    //   },
    // ]);
  });
});
