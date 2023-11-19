/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]').first().click()
    });
    it('Deve adicionar um produto ao carrinho', () => {
        var qtdproduto = 3
        cy.get('[class="product-block grid"]').contains('Abominable Hoodie').click()
        cy.wait(100)
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(qtdproduto)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', qtdproduto)
        cy.get('.woocommerce-message').should('contain', qtdproduto + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')

    });
});