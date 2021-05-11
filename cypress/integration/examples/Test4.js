// Control on UI elements

describe('UI Controls',function(){

    it('Test Case',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice')

        // Alert notifications

        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //Window alert 
        cy.on('window:alert',(str) => {

            //Mocha compare string 
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    cy.on('window:confirm',(str) => {

        //Mocha compare string 
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

    // Child Framework
     cy.get("#opentab").invoke('removeAttr', 'target').click()
     
     cy.url().should('include', 'rahulshettyacademy')
     
     //Going back to the previous page 
     cy.go('back')

     //Handling tables in Web Browsers
     cy.get('#product').find('tr td:nth-child(2)').each(($el, index, $list) => {

        const course = $el.text();
        if(course == "Master Selenium Automation in simple Python Language"){
        cy.get("#product").find('tr td:nth-child(2)').eq(index).next().then(function(price){
            const priceText = price.text()
            expect(priceText).to.equal('25')
        })

        }
     })


})

})