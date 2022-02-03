import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../Providers/Auth";
import { PetsContext } from "../../Providers/Pets";
import { ServicesContext } from "../../Providers/Services";

import { HiredServices } from "../../Components/HiredServices";

describe("Render the Hired Services component", () => {
  it("Should render the Hired Services component when user haven't any service", async () => {
    const user = {};
    const pets = [];
    const services = [];
    render(
      <AuthContext.Provider value={{ user }}>
        <PetsContext.Provider value={{ pets }}>
          <ServicesContext.Provider value={{ services }}>
            <HiredServices />
          </ServicesContext.Provider>
        </PetsContext.Provider>
      </AuthContext.Provider>
    );

    expect(
      await screen.findByText(/Nenhum serviço contratado/i)
    ).toBeInTheDocument();
  });

  it("Should render the Hired Services component when user have services", async () => {
    const user = {
      email: "johndoe@mail.com",
      password: "$2a$10$N/QQ5ePqtKPAZcJntBNScei8qfEkhwYCt9TIxEDOXxhYwmHUXFaPi",
      name: "John Doe",
      phone: "(44)99562-4420",
      street: "Avenida das Américas",
      addressNumber: "2345",
      addressComplement: "bloco 1, ap 1508",
      city: "Rio de Janeiro",
      isClient: true,
      id: 2,
    };

    const pets = [
      {
        userId: 2,
        petName: "Caramelo",
        petType: "cachorro",
        petBirthDate: "11/09/2015",
        petGender: "male",
        petSize: "médio",
        id: 3,
      },
    ];

    const services = [
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
        petId: 3,
        id: 1,
      },
    ];

    render(
      <AuthContext.Provider value={{ user }}>
        <PetsContext.Provider value={{ pets }}>
          <ServicesContext.Provider value={{ services }}>
            <HiredServices />
          </ServicesContext.Provider>
        </PetsContext.Provider>
      </AuthContext.Provider>
    );

    expect(await screen.findByAltText(/cachorro/i)).toBeInTheDocument();
  });
});
