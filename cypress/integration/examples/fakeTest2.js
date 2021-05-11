describe('API Test Mock', function(){

    it('Test Case', function(){

        //Visiting URL
        cy.visit('http://rahulshettyacademy.com/angularAppdemo')

        //Intercepting the API Call
        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>{
            req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
            req.continue((res) =>{
               // expect(res.statusCode).to.equal(403)
            })
        })

        cy.get('button[class*="btn"]').click()
    })
})