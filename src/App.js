import "./Styles/Reset.css";
import GlobalStyle from "./Styles/GlobalStyle";
import Routes from "./Routes";
import Profile from "./Components/Profile";
import Ride from "./Components/Ride";

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
      {/* <Routes /> */}
      <Profile />
    </>
  );
}

export default App;
