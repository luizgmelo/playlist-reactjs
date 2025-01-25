describe("Testa a página de SingUp", () => {
  it("Quando clicar em Sign Up deve ir para a página de Dashboard", () => {
    cy.visit("/sign-up");

    cy.contains("Sign Up").click();

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.contains("Pikachu");
    cy.contains("Rotom");
    cy.contains("Charmander");
  });

  it("Quando clicar em 'Já tem cadastro' deve ir para a página de Login", () => {
    cy.visit("/sign-up");

    cy.contains("Já tem cadastro? Clique aqui!").click();

    cy.intercept("http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.contains("Login");
  });

  it("O botão deve ter 10px de margin top", () => {
    cy.visit("/sign-up");

    cy.get("div")
      .find("button")
      .should("have.css", "marginTop")
      .and("match", /10px/);
  });
});
