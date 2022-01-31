import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
  --black100: #0B1E27;
  --black50: #2C373F;
  --blue: #74A8BD;
  --blue50: #4682B4;
  --blue150: #03a9f4;
  --caramel: rgba(132, 90, 73, 0.75);
  --caramel25: #AD6D53;
  --caramel50: #945339;
  --caramel75: #845D4E;
  --caramel100: #6F4635;
  --cream: #FFF6ED;
  --grey20: #999999;
  --grey40: #F5F5F5;
  --grey60: #EFEFEF;
  --grey70: #b5b5b5;
  --grey80: rgba(197, 197, 197, 0.5);
  --grey90: #D2D2D2;
  --grey100: #939393;
  --main-font: 'Roboto', sans-serif;
  --title-font: 'Peralta', cursive;
  --red: #FF0000;
  --white: #FFFFFF;
  --yellow50: #FEB546;
  --yellow60: #F4A640;
  --yellow80: #FF9B02;
}

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #b3d9e7 transparent;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #b3d9e7;
    border-radius: 8px;
    border: 2px solid transparent;
  }
`;
