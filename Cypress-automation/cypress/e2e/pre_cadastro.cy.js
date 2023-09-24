/// <reference types="cypress" />
var faker = require('faker').locale('pt_BR');

describe('Funcionalidade pré cadastro', () => {
    beforeEach(() => {
        cy.visit('')
    });
    it('deve completar o pré cadastro com sucesso', () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.email(nomeFaker)
    });
    
    
});