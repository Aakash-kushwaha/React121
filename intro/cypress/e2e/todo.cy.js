


describe("checking todo application",()=>{
    beforeEach(()=>{
        cy.visit("https://example.cypress.io/todo")

    })
    it("should should have the basic structure",()=>{
        cy.get(".new-todo").should("exist")
        cy.get(".todo-count").should("exist")
        cy.get(".todo-list").should("exist")
    })
    it("should able to add some task",()=>{
        // cy.visit("http://example.cypress.io/todo")
        cy.get(".todo-list").children().should("have.length",2)
        cy.get(".new-todo").type("love naina{enter}")
        cy.get(".new-todo").type("love react{enter}")
        cy.get(".new-todo").type("love redux{enter}")
        cy.get(".new-todo").type("love js{enter}")
        cy.get(".new-todo").type("love development{enter}")
        cy.get(".todo-list").children().should("have.length",7)
    })
    it("should able to increase the task length",()=>{
        // cy.visit("http://example.cypress.io/todo")
        cy.get(".todo-count strong").should("have.text",2)
        cy.get(".new-todo").type("love redux{enter}")
        cy.get(".todo-count strong").should("have.text",3)
    })
})