import React from "react";
import { render, screen } from "@testing-library/react";
import Testimonial from "../../Components/Testimonial";

describe("Testimonial Component when OK", () => {
  it("should be able to render a component containing specif content", () => {
    render(<Testimonial />);

    const imgAltTestimonial1 = "cachorro deitado no carpet";
    const imgAltTestimonial2 = "cachorro andando na rua com a coleira na boca";
    const imgAltTestimonial3 = "cachorro de óculos";
    const textContent1 =
      "Eu era gordinha e cansadinha, sempre comendo demais e não fazendo nenhum exercício, mas com Ajude meu pet, fiquei malhada e gostosa!";
    const textContent2 =
      "Meu dono não me levava para passear, mas com Ajude meu Pet, estou caminhando 10km por dia, e treinando para a São Silvestre.";
    const textContent3 =
      "Eu era um vida loka, não estava nem aí para as leis e muros, fugia de casa voltava a hora que queria, estava despediçando meu tempo, mas com o Ajude meu pet, dei a volta por cima, e esse ano, me formo em direito.";

    const imgElement1 = screen.getByAltText(imgAltTestimonial1);
    const imgElement2 = screen.getByAltText(imgAltTestimonial2);
    const imgElement3 = screen.getByAltText(imgAltTestimonial3);
    const textElement1 = screen.getByText(textContent1);
    const textElement2 = screen.getByText(textContent2);
    const textElement3 = screen.getByText(textContent3);

    expect(imgElement1).toHaveAttribute("src", "Depo1.webp");
    expect(imgElement2).toHaveAttribute("src", "Depo2.jpg");
    expect(imgElement3).toHaveAttribute("src", "Depo3.png");
    expect(textElement1).toBeTruthy();
    expect(textElement2).toBeTruthy();
    expect(textElement3).toBeTruthy();
  });
});
