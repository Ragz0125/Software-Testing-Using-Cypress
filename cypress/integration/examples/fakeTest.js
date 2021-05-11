describe('API Test Mock', function(){

    it('Test Case', function(){

        //Visiting URL
        cy.visit('http://rahulshettyacademy.com/angularAppdemo')

        //Intercepting the API Call
        cy.intercept({
            method: 'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'       
        }, {
            statusCode: 200,
            body: [
                {
                    "book_name" : "RestAssured with Java",
                    "isbn" : "RSU",
                    "aisle": "2301"
                }]
        }).as('BookRequests')
        
        //Clicking on Virtual Library 
        cy.get('button[class*="btn"]').click()

        cy.wait('@BookRequests').should(({request,response}) =>{

            cy.get('tr').should('have.length',response.body.length+1)
        })

        cy.get('p').should('have.text','Sorry we have only one book available')



        //length of response of array = rows of table 



    })
})