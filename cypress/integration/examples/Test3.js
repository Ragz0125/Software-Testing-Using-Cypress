// Control on UI elements

describe('UI Controls',function(){

    it('Test Case',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice')

        //Check box 
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

        //Check multiple check boxes 
        cy.get('input[type="checkbox"]').check(['option1','option2'])

        cy.get('input[type="radio"]').check(['radio3']).should('be.checked')

        //Static Dropdowns
        cy.get('select').select('option2').should('have.value','option2')

        //Dynamic Dropdowns
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            const option = $el.text()

            if(option == "India")
            {
                $el.click()
            }
        })

        //Check Visibility of UI controls 
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()

       
    })
})