import "./Styles/Reset.css";
import { Toaster } from "react-hot-toast";
import GlobalStyle from "./Styles/GlobalStyle";
import Routes from "./Routes/index.tsx";

function App() {
  return (
    <>
      <GlobalStyle />
      <Toaster />
      <Routes />
    </>
  );
}

export default App;
