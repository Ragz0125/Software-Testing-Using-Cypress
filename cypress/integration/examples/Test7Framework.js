import 'cypress-iframe'

// Control on UI elements

describe('UI Controls',function(){

    before(function(){
        //runs before all the testcases 
        cy.fixture('example').then(function(data){
            this.data = data
        })

    })


    it('Demo Example',function(){

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get("input[class*='form-control']").eq(0).type(this.data.name)
        cy.contains("Submit").click()

        cy.get('select').select(this.data.gender)

        //Verifying condition
        cy.get("input[class*='form-control']").should('have.attr','minlength','2')
        cy.get('input[class*="ng-pristine"]').then(function(str){

            const og = str.eq(0).text()
            const verify = str.eq(1).text()

            if(og == verify){
                cy.log("Verified")
            }

        })

        cy.get('#inlineRadio3').should('be.disabled')

        


        
})

})