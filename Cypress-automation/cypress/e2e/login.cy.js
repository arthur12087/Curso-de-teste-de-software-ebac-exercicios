/// <reference types="cypress" />

describe('Funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('artmanhas@gmail.com')
        cy.get('#password').type('artmanhas')
        cy.get('input[name="login"]').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.contains('Welcome artmanhas !').should('be.visible')
        cy.contains('Olá, artmanhas (não é artmanhas? Sair)').should('be.visible')
    });

    it('Deve exibir mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('artmanhass@gmail.com')
        cy.get('#password').type('artmanhas')
        cy.get('input[name="login"]').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });

    it('Deve exibir mensagem de erro ao inserir senha inválida', () => {    
            cy.get('#username').type('artmanhas@gmail.com')
            cy.get('#password').type('artmanhasss')
            cy.get('input[name="login"]').click()
    
            cy.get('.woocommerce-error').should('contain', 'Erro: a senha fornecida para o e-mail artmanhas@gmail.com está incorreta. Perdeu a senha?')
        });
   
});