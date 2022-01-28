import "./Styles/Reset.css";
import GlobalStyle from "./Styles/GlobalStyle";
import Routes from "./Routes";
<<<<<<< HEAD
import Profile from "./Components/Profile";
import Ride from "./Components/Ride";
=======
import CardsServices from "./Components/CardsServices";
>>>>>>> 8bdfc9c8713112775e66c2353bb7c0f92b0fa03e

function App() {
  // Para abrir e fechar o modal, colocar aonde ele for aberto
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  // esse botão abre o modal, pode ser substituido tranquilamente
  // <button onClick={handleOpen}>Abre o modal</button>

  return (
    <>
      <GlobalStyle />
      <Routes />
      <CardsServices/>
    </>
  );
}

export default App;
