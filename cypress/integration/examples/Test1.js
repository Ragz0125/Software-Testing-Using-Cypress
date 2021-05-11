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
        //Assertion only checks visible elements
        cy.get('.product:visible').should('have.length',4)

        //Parent Child chaining 
        cy.get('.products').find('.product').should('have.length',4)

        //Add to cart button 
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        
        // Iterate through using each 
        cy.get('.products').find('.product').each(($el, index, $list) =>{

            const textVeg = $el.find('.product-name').text()
            if(textVeg.includes("Cashews")){
                $el.find('button').click()
            }
        })


        //Assert if logo text is correct 
        cy.get('.brand').should('have.text','GREENKART')
        
        // This is to log
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })

    })





})