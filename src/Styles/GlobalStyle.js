import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
  --black100: #0B1E27;
  --black50: #2C373F;
  --blue: #74A8BD;
  --blue0: #cfd7dc;
  --blue10: #2695a9;
  --blue50: #4682B4;
  --blue150: #03a9f4;
  --caramel: rgba(132, 90, 73, 0.75);
  --caramel25: #AD6D53;
  --caramel50: #945339;
  --caramel55: #984b17;
  --caramel60: #8b5742;
  --caramel75: #845D4E;
  --caramel100: #6F4635;
  --caramel200: #5d2806;
  --caramel300: #270601;
  --cream: #FFF6ED;
  --cream50: #dfac73;
  --grey20: #999999;
  --grey40: #F5F5F5;
  --grey60: #EFEFEF;
  --grey70: #b5b5b5;
  --grey80: rgba(197, 197, 197, 0.5);
  --grey90: #D2D2D2;
  --grey100: #939393;
  --main-font: 'Roboto', sans-serif;
  --orange: #ff9700;
  --orange50: #ee6c00;
  --red: #FF0000;
  --title-font: 'Peralta', cursive;
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
