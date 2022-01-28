import "./Styles/Reset.css";
import GlobalStyle from "./Styles/GlobalStyle";
import Routes from "./Routes";
import TopModal from "./Components/TopModal";

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
      <div style={{maxWidth: '1050px'}}>
        <TopModal category='adestramento' />
      </div>
    </>
  );
}

export default App;
