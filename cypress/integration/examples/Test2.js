// Framework used is Mocha

describe('My First Test Suite', function()
{
    it('1st Test Case', function()
    {
        // To visit the URL
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        
        //Grab a particular web element
        cy.get('.search-keyword').type('ca')

        cy.wait(2000)

        cy.get('.product:visible').should('have.length',4)

        cy.get('.products').find('.product').each(($el, index, $list) =>{

            const item = $el.find('.product-name').text()
            if(item.includes("Cashew")){
                $el.find('button').click()
            }
        })

        cy.get('.search-keyword').clear().type('pe')

        cy.wait(2000)

        cy.get('.products').find('.product').each(($el, index, $list) =>{

            const fruit = $el.find('.product-name').text()
            if(fruit.includes('Grape')){
                $el.find('button').click()
            }
        })

        cy.get('.cart').find('.cart-icon').click()

        cy.contains('PROCEED TO CHECKOUT').click()

        cy.contains('Place Order').click()
    })

})





