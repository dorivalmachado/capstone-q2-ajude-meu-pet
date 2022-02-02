import { render, screen } from "@testing-library/react";
import Imagem from "../../../Components/Imagem";

describe("Rendering Imagem component", () => {
  it("Should render the Imagem component in the page", () => {
    render(<Imagem src="" alt="imagem" />);

    expect(screen.getByAltText("imagem")).toBeInTheDocument();
  });
});
