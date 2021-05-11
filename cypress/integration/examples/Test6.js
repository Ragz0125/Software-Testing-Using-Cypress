import 'cypress-iframe'

// Control on UI elements

describe('UI Controls',function(){

    it('Demo Example',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice')

        //Handling Frames in Webpages
        cy.frameLoaded('#courses-iframe')

        //Switching to iframe mode
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)

})

})