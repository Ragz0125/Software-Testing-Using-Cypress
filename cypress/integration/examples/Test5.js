// Control on UI elements

describe('UI Controls',function(){

    it('Test Case',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice')

        //Handling Mouse Hover
        cy.get(".mouse-hover").find('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')

        //Handling Child Window
        cy.get('#opentab').then(function(el){
            const link = el.prop('href')
            cy.visit(link)
        })


})

})