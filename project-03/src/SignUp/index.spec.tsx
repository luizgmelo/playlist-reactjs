import { fireEvent, render, screen } from "@testing-library/react";
import SignUp from './index';

const navigateMock = vi.fn();

describe("Testa o componente Sign Up", () => {

  vi.mock("react-router-dom", () => ({
    useNavigate() {
      return navigateMock;
    },
    Link: vi.fn().mockImplementation((props) => props.children)
  }));

  test("Devem haver 3 inputs na minha tela", async () => {
    render(<SignUp />)

    const inputs = await screen.findAllByRole("textbox");

    expect(inputs).toHaveLength(3);
  });

  test("Devem haver um input para nome, email e senha", async () => {
    render(<SignUp />)

    const inputName = await screen.findByPlaceholderText("Insira seu nome");
    const inputEmail = await screen.findByPlaceholderText("Insira seu e-mail");
    const inputsPassword = await screen.findByPlaceholderText("Insira sua senha");

    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    expect(inputsPassword).toBeInTheDocument();
  });

  test("Deve haver um botao na tela", async () => {
    render(<SignUp />)

    const button = await screen.findByRole("button");

    expect(button).toHaveTextContent("Sign Up");
  });

  test("Deve haver um título 'Cadastre-se' na tela", async () => {
    render(<SignUp />)

    const button = await screen.findByRole("heading", {
      level: 2,
    });

    expect(button).toHaveTextContent("Cadastre-se");
  });

  test("Deve navegar para a página de dashboard", async () => {
    render(<SignUp />)

    const button = await screen.findByRole("button");
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });


  test("Deve haver um link para a página de login", () => {
    render(<SignUp />)

    const button = screen.getByText("Já tem cadastro? Clique aqui!");
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledTimes(1);
  });

});