import "./Styles/Reset.css";
import GlobalStyle from "./Styles/GlobalStyle";
import Routes from "./Routes";
import CardsServices from "./Components/CardsServices"

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
      <CardsServices/>
    </>
  );
}

export default App;
