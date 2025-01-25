describe("Testa a página de Login", () => {
  it("Quando clicar em login deve ir para página de Dashboard", () => {
    cy.visit("/");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.get("button").click();

    cy.contains("Dashboard");
  });

  it("Quando clicar em login deve ir para página de Dashboard e ter um Pokemon Pikachu", () => {
    cy.visit("/");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.contains("Login").click();

    cy.contains("Dashboard");
    cy.contains("Pikachu");
  });

  it("Quando clicar em sign up deve ir para página de cadastro", () => {
    cy.visit("/");

    cy.contains("Não tem cadastro? Clique aqui!").click();

    cy.contains("Cadastre-se");
  });
});
