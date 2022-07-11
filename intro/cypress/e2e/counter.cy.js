///   <reference types="Cypress"/>



describe("checking counter",()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/")
    })
    // it("should exist in document",()=>{

    //     cy.get(".increment_count").should("exist")
    //     cy.get(".decrement_count").should("exist")
    // })
    // it("should increment the counter",()=>{
    //     cy.get("h2").should("have.text","count is 0")
    //     cy.get(".increment_count").click()
    //     cy.get("h2").should("have.text","count is 1")
    // })

   it("should intercept get the request",()=>{
    cy.intercept("GET","http://localhost:8080/counter",{value:10}).as("getReq")
    cy.wait("@getReq").should((data)=>{
        // console.log("XLRI",data )    
    })
   })
  it("should intercept post request",()=>{
    cy.intercept("GET", "http://localhost:8080/counter",{fixture:"counter.json"}).as("getReq")
    cy.wait("@getReq")

    cy.intercept("POST","http://localhost:8080/counter",{value:100}).as("postReq")
    cy.get(".increment_count").click()
    
  
    cy.wait("@postReq").then((res)=>{
        console.log(res,"respnse of post")
    })

  })
})
