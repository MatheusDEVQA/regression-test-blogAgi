/// <reference types="cypress" />

describe('Pesquisa no Blog do AGI', () => {
  it('pesquisa com sucesso', () => {

    let searchText = 'Seguro de vida';

    cy.visit('/');

    cy.get('[aria-label="Link do ícone de pesquisa"]')
      .click();

    cy.get('#ast-desktop-header .ast-dropdown-active');

    cy.get('[aria-label="Link do ícone de pesquisa"]')
      .click();

    cy.get('#ast-desktop-header .ast-dropdown-active').should('not.exist');

    cy.get('[aria-label="Link do ícone de pesquisa"]').click();

    cy.get('#search-field')
      .type(`${searchText}`)
      .clear()
      .type(`${searchText}{enter}`);

    cy.get('#primary h1')
      .should('contain.text', ` Resultados encontrados para: ${searchText}`);

    cy.get('#main article a')
      .should('have.attr', 'href')
      .and('match', /^https:\/\/blogdoagi\.com\.br\//);
  });

  it('Pesquisa sem sucesso', () => {

    let searchIncorrect = 'Jogo do Brasil'

    cy.visit('/');

    cy.get('[aria-label="Link do ícone de pesquisa"]')
      .click();

    cy.get('#search-field')
      .type(`${searchIncorrect}{enter}`);

    cy.get('#primary h1')
      .should('contain.text', ` Resultados encontrados para: ${searchIncorrect}`);

    cy.get('#main p')
      .should('contain.text', 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.');

  })
});
