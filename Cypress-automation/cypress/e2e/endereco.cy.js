import enderecoPage from '../support/endereco.page';

const perfil = require('../fixtures/perfil.json')

describe('Funcionalidade endereços - faturamento e entrega', () => {
    beforeEach(() => {
        cy.visit('/minha-conta')
        cy.login(perfil.usuario,perfil.senha)
    });
    it('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarFaturamento()
    });
});