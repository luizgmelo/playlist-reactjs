import { render, screen } from "@testing-library/react";
import Dashboard from ".";


describe("Deve testar o componente Dashboard", () => {

  test("Deve estar na tela o título 'Dashboard'", async () => {
    render(<Dashboard />)

    const title = await screen.findByRole("heading");

    expect(title).toHaveTextContent("Dashboard");
  });


}); 
