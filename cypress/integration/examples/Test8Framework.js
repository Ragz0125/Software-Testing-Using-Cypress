import 'cypress-iframe'

// Control on UI elements

describe('UI Controls',function(){

    before(function(){
        //runs before all the testcases 
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

        it('Shop Test Case', function(){

            cy.visit('http://rahulshettyacademy.com/angularpractice')
            cy.get('.navbar-nav .nav-item').eq(1).click()

            cy.contains('Add')
            //Check each product 
            cy.get('app-card').find('.card').each(($el, index, $list) =>{

                const product = $el.find('.card-title').text()
                if(product.includes("iphone X")){
                    cy.get('.zmdi').eq(index).click()
                }
                else if(product.includes("Samsung")){
                    cy.get('.zmdi').eq(index).click()
                }
            })

            cy.contains('Checkout').click()

            cy.get('.btn').contains('Checkout').click()

            //Dynamic Dropdown 
            cy.get('.validate').type('Ind')
            cy.wait(6000)
            cy.get('.suggestions').find('ul').each(($el, index, $list) => {

                const country = $el.find('li').text()
                if(country.includes("India")){
                    cy.get('.suggestions').find('ul').eq(index).click()
                }

            })

           cy.get("input[type='checkbox']").check({force: true})
           cy.contains('Purchase').click()

           cy.get('.alert').then(function(text){
               const alert = text.text()
               if(alert.includes('Success')){
                   cy.log('Purchase over')
               }
           })
        })
        

})

