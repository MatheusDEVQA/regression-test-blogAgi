/// <reference types="cypress" />

describe('Pesquisa no Blog do AGI', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('pesquisa com sucesso', () => {

    const searchText = 'Seguro de vida';

    cy.clickPesquisar();
    cy.validaCaixaPesquisar();
    cy.clickPesquisar();
    cy.validaOcultacaoCaixaPesquisar();
    cy.clickPesquisar();
    cy.escreverPesquisa(searchText)
      .clear()
      .type(`${searchText}{enter}`);
    cy.validaTituloPesquisa(searchText);
    cy.validaLinkArtigo();

  });

  it('Pesquisa sem sucesso', () => {

    const searchIncorrect = 'Jogo do Brasil'

    cy.clickPesquisar();
    cy.escreverPesquisa(searchIncorrect+'{enter}');
    cy.validaTituloPesquisa(searchIncorrect);
    cy.validaTextoInsucessoPesquisa();

  })
});
