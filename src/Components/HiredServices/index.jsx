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
  const petsMocked = [
    {
      petName: "Tobias",
      animalType: "dog",
      id: 1,
      date: "20/01/2022",
      category: "treinamento",
      status: true,
    },
    {
      petName: "Shailow",
      animalType: "cat",
      id: 2,
      date: "10/02/2022",
      category: "passeio",
      status: false,
    },
    {
      petName: "Dogo",
      animalType: "other",
      id: 3,
      date: "02/04/2022",
      category: "transporte",
      status: false,
    },
    {
      petName: "Dogo",
      animalType: "other",
      id: 4,
      date: "02/04/2022",
      category: "transporte",
      status: false,
    },
    {
      petName: "Dogo",
      animalType: "other",
      id: 5,
      date: "02/04/2022",
      category: "transporte",
      status: false,
    },
  ];

  const {services} = useServices();
  const {pets} = usePets();
  const {user} = useAuth(); 

  const [myServices, setMyServices] = useState([]);

  useEffect(() => {
    const filteredServices = services.filter(service => service.clientId === user.id)
    const {} = filteredServices;
  }, [pets, services])

  console.log(services, pets, user.id)
  return (
    <Container>
      {petsMocked.map((pet) => (
        <Card key={pet.id}>
          <div className="head">
            <img
              src={
                pet.animalType === "dog"
                  ? dog
                  : pet.animalType === "cat"
                  ? cat
                  : other
              }
              alt={pet.animalType}
            />
            <div>{pet.petName}</div>
          </div>
          <hr />
          <div className="body">
            <div className="line">
              <div className="iconContainer">
                <BsCalendarDate size={15} />
                <span>Data</span>
              </div>
              <div>
                <p>{pet.date}</p>
              </div>
            </div>
            <div className="line">
              <div className="iconContainer">
                <BiCategory size={15} />
                <span>Categoria</span>
              </div>
              <div>
                <p>{pet.category}</p>
              </div>
            </div>
            <div className="line">
              <div className="iconContainer">
                <BsCheck2Square size={15} />
                <span>Status</span>
              </div>
              <div>
                <p>{pet.status === true ? "Concluído" : "Não concluído "}</p>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </Container>
  );
};
