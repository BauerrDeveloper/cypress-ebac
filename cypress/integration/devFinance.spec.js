/// <reference types="cypress"/>

describe('DevFinance', () => {

    beforeEach(() => {
        cy.visit('https://devfinance-agilizei.netlify.app/#')
    });

    it('Adicionar uma nova transação de entrada', () => {

        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Freela')
        cy.get('#amount').type(12)
        cy.get('#date').type('2021-11-03')
        cy.contains('button', 'Salvar').click()
        cy.get('table tbody tr').should('have.length', 1)
    });

    it('Adicionando uma nova transação de saída', () => {
      
        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Chocolatinho')
        cy.get('#amount').type(-8)
        cy.get('#date').type('2021-11-03')
        cy.contains('button', 'Salvar').click()
        cy.get('table tbody tr').should('have.length', 2)
    
    });

    it.only('Adicionando e Removendo transações da Tabela', () => {
      
        const entrada = 'Freela'
        const saida = 'Almoço'

        cy.get('a[onclick*=open]').click()
        cy.get('#description').type(entrada)
        cy.get('#amount').type(1500)
        cy.get('#date').type('2021-11-03')
        cy.contains('button', 'Salvar').click()

        cy.get('a[onclick*=open]').click()
        cy.get('#description').type(saida)
        cy.get('#amount').type(-200)
        cy.get('#date').type('2021-11-03')
        cy.contains('button', 'Salvar').click()

        cy.get('td.description')
          .contains(saida)
          .parent()
          .find('img[onclick*=remove]')
          .click()
          
        cy.get('table tbody tr').should('have.length', 1)
        
    });

});

