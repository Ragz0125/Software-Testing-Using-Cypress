import 'cypress-iframe'
import HomePage from '../pageObjects/HomePage'
import ShopPage from '../pageObjects/ShopPage'
// Control on UI elements

describe('UI Controls',function(){

    const homePage = new HomePage()
    const shopPage = new ShopPage()
    before(function(){
        //runs before all the testcases 
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

        it('Angular Test Case', function(){

            cy.visit('http://rahulshettyacademy.com/angularpractice')
            //Home Page
            homePage.getNameBox().type(this.data.name)
            homePage.getGender().type(this.data.gender)
            homePage.getRadioButton().should('be.disabled')
            homePage.getShopButton().click()

            //Shop Page
            shopPage.getItems().each(($el, index, $list) => {

                const item = $el.find('.card-title').text()
                if(item.includes("iphone X")){
                    shopPage.getAddButton().eq(index).click()
                }
                else if(item.includes("Samsung")){
                    shopPage.getAddButton().eq(index).click()
                }
            })

            shopPage.getCheckOut().click()
            var total = 0
            //Checking Sum of all Products
            cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
                const cost = $el.text()
                var res = cost.split(" ")
                res = res[1].trim()
                total = total + Number(res)
            })

            var total_cost = 0
            cy.get('h3 strong').then(function(element){
                const cost = element.text()
                var res = cost.split(" ")
                total_cost = (res[1].trim())
                total_cost = Number(total_cost)
                expect(total).to.equal(total_cost)
            })
            

            
            cy.contains("Checkout").click()

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
           //Checking for Success Message
           cy.get('.alert').then(function(text){
            const alert = text.text()
            if(alert.includes('Success')){
                cy.log('Purchase over')
            }
        })
            
        })
        

})

