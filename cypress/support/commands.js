Cypress.Commands.add('clickPesquisar', () => {
    cy.get('[aria-label="Link do ícone de pesquisa"]')
        .click();
})

Cypress.Commands.add('validaCaixaPesquisar', () => {
    cy.get('#ast-desktop-header .ast-dropdown-active');
})

Cypress.Commands.add('validaOcultacaoCaixaPesquisar', () => {
    cy.get('#ast-desktop-header .ast-dropdown-active').should('not.exist');
})
Cypress.Commands.add('escreverPesquisa', (searchText) => {
    cy.get('#search-field')
        .type(`${searchText}`);
})

Cypress.Commands.add('validaTituloPesquisa', (searchText) => {
    cy.get('#primary h1')
        .should('contain.text', ` Resultados encontrados para: ${searchText}`);
})

Cypress.Commands.add('validaLinkArtigo', () => {
    cy.get('#main article a')
        .should('have.attr', 'href')
        .and('match', /^https:\/\/blogdoagi\.com\.br\//);
})

Cypress.Commands.add('validaTextoInsucessoPesquisa', () => {
    cy.get('#main p')
    .should('contain.text', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.');
})
