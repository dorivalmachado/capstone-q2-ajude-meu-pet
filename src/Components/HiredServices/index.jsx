import { Container, Card } from "./styles";
import dog from "../../Assets/Img/dog.png";
import cat from "../../Assets/Img/cat.png";
import other from "../../Assets/Img/pawprints.png";
import { BsCalendarDate } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { BsCheck2Square } from "react-icons/bs";
import { useServices } from "../../Providers/Services";
import { usePets } from "../../Providers/Pets";
import { useEffect, useState } from "react";
import { useAuth } from "../../Providers/Auth";

export const HiredServices = () => {
  const { services } = useServices();
  const { pets } = usePets();
  const { user } = useAuth();

  const [myServices, setMyServices] = useState([]);

  useEffect(() => {
    if (pets.length > 0 && services.length > 0) {
      const formattedService = services
        .filter((service) => service.clientId === user.id)
        .map((service) => {
          const pet = pets.find((elem) => elem.id === service.petId);
          const { petType, petName } = pet;
          const { serviceDesiredDate, serviceCategory, serviceConclusion, id } =
            service;
          return {
            petType,
            petName,
            serviceDesiredDate,
            serviceCategory,
            serviceConclusion,
            id,
          };
        });
      setMyServices(formattedService);
    }
  }, [pets, services, user.id]);

  return (
    <Container>
      {myServices.length === 0 ? (
        <p className="message">
          Nenhum serviço contratado ainda, clique nos cards acima e contrate
          hoje mesmo!
        </p>
      ) : (
        myServices.map((service) => (
          <Card key={service.id}>
            <div className="head">
              <img
                src={
                  RegExp("cachorro", "gi").test(service.petType)
                    ? dog
                    : RegExp("gato", "gi").test(service.petType)
                    ? cat
                    : other
                }
                alt={service.petType}
              />
              <div>{service.petName}</div>
            </div>
            <hr />
            <div className="body">
              <div className="line">
                <div className="iconContainer">
                  <BsCalendarDate size={15} />
                  <span>Data</span>
                </div>
                <div>
                  <p>{service.serviceDesiredDate}</p>
                </div>
              </div>
              <div className="line">
                <div className="iconContainer">
                  <BiCategory size={15} />
                  <span>Categoria</span>
                </div>
                <div>
                  <p>{service.serviceCategory}</p>
                </div>
              </div>
              <div className="line">
                <div className="iconContainer">
                  <BsCheck2Square size={15} />
                  <span>Status</span>
                </div>
                <div>
                  <p>
                    {service.serviceConclusion === true
                      ? "Concluído"
                      : "Não concluído "}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        ))
      )}
    </Container>
  );
};
