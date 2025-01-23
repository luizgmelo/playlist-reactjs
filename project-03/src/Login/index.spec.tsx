import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./index";

const navigateMock = vi.fn();

describe("Testa o componente de Login", () => {

  vi.mock("react-router-dom", () => ({
    useNavigate() {
      return navigateMock;
    },
    Link: vi.fn().mockImplementation((props) => props.children)
  }));

  test("Deve haver um título escrito 'Sign In'", async () => {
    render(<Login />)

    const title = await screen.findByRole("heading");

    expect(title.textContent).toBe("Sign In");
  });

  test("Devem haver dois inputs na minha tela", async () => {
    render(<Login />)

    const inputs = await screen.findAllByRole("textbox")

    expect(inputs).toHaveLength(2);
  });

  test("Deve haver um botão na minha tela", async () => {
    render(<Login />)

    const button = await screen.findByRole("button");

    expect(button.textContent).toBe("Login");
  });

  test("Deve haver um input para e-mail", async () => {
    render(<Login />)

    const inputEmail = await screen.findByPlaceholderText("Insira seu e-mail");

    expect(inputEmail).toBeInTheDocument();
  })

  test("Deve haver um input para senha", async () => {
    render(<Login />)

    const inputSenha = await screen.findByPlaceholderText("Insira sua senha");

    expect(inputSenha).toBeInTheDocument();
  })


  test("Deve navegar para outra página", async () => {
    render(<Login />)

    const button = await screen.findByRole("button");

    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  })

  test("Deve haver um link para página de Sign Up", async () => {
    render(<Login />)

    const link = await screen.findByText("Não tem cadastro? Clique aqui!");
    fireEvent.click(link);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  })
});