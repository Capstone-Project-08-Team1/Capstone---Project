describe('DineNGo Registration Screen API Test', () => {
    it('successfully register new user under Clover', () => {
        cy.request({
            method: 'POST',
            url:'https://grubgrab.net/register',
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(401);
        }); 
        cy.visit('https://grubgrab.net/register');
        cy.get("#mat-input-0", { timeout: 10000 }).should('be.visible').type("Team"); //input first name
        cy.get("#mat-input-1", { timeout: 10000 }).should('be.visible').type("1"); //input last name //confirm URL of current page matches
        cy.get("#mat-input-2", { timeout: 10000 }).should('be.visible').type("Kennesaw State University");  //input organization name
        cy.get("#mat-input-3", { timeout: 10000 }).should('be.visible').type("T1P8");  //input business abbreviation
        cy.get("#phoneNum", { timeout: 10000 }).should('be.visible').type("4047701234");  //input phone number
        cy.get("#mat-input-5", { timeout: 10000 }).should('be.visible').type("t1p8@gmail.com"); //input email
        cy.get("#mat-input-6", { timeout: 10000 }).should('be.visible').type("Ilovecookies!");  //input password
        cy.get("button.btn-info").click();   //click 'REGISTER' button 
        cy.get("button.btn-danger").click();  //click 'CANCEL' button
    })
  });
  