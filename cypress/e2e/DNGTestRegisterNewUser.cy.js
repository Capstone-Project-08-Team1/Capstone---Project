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
    });

    it("Load registration page successfully", () => {
        cy.request({
          method: "GET",
          url: "https://grubgrab.net/register",
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTUyZmYyZDU1MjQ5ZDViNmQyNGM4NTQiLCJhY2NvdW50VHlwZSI6IkNsb3ZlciIsIm9yZ1V1aWQiOiI2NTUyZmYyZDU1MjQ5ZDViNmQyNGM4NTQiLCJpYXQiOjE3MjY0MDg3MTIsImV4cCI6MTc1NzE2NzExMn0.uIO_h3_kaLVznlbE6HnXVHyZ10FxW2o6nmYnIgNSZIw",
          },
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
    
      // API call to test registration page *** Change email and uniqueOrgIdent
      it("Register a new user successfully", () => {
        cy.request({
          method: "POST",
          url: "https://grubgrab.net/api/users/accountRegistration",
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTUyZmYyZDU1MjQ5ZDViNmQyNGM4NTQiLCJhY2NvdW50VHlwZSI6IkNsb3ZlciIsIm9yZ1V1aWQiOiI2NTUyZmYyZDU1MjQ5ZDViNmQyNGM4NTQiLCJpYXQiOjE3MjY0MDg3MTIsImV4cCI6MTc1NzE2NzExMn0.uIO_h3_kaLVznlbE6HnXVHyZ10FxW2o6nmYnIgNSZIw",
          },
          body: {
            firstName: "Hope",
            lastName: "John",
            organization: "Kennesaw State University",
            uniqueOrgIdent: "@iip.com",
            platform: "Clover",
            phoneNumber: 3293567289,
            username: "johnhope1@gmail.com",
            email: "johnhope1@gmail.com",
            password: "Password1",
            imageData: ""
          },
        }).then((response) => {
          expect(response.status).to.eq(200);
        });
      });
    
      // API call to test if user already exist ** Use data from Register a new user successfully. 
      it("User already exist", () => {
        cy.request({
          method: "POST",
          url: "https://grubgrab.net/api/users/accountRegistration",
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTUyZmYyZDU1MjQ5ZDViNmQyNGM4NTQiLCJhY2NvdW50VHlwZSI6IkNsb3ZlciIsIm9yZ1V1aWQiOiI2NTUyZmYyZDU1MjQ5ZDViNmQyNGM4NTQiLCJpYXQiOjE3MjY0MDg3MTIsImV4cCI6MTc1NzE2NzExMn0.uIO_h3_kaLVznlbE6HnXVHyZ10FxW2o6nmYnIgNSZIw",
          },
          body: {
            firstName: "Hope",
            lastName: "John",
            organization: "Kennesaw State University",
            uniqueOrgIdent: "@iip.com",
            platform: "Clover",
            phoneNumber: 3293567289,
            username: "johnhope1@gmail.com",
            email: "johnhope1@gmail.com",
            password: "Password1",
            imageData: ""
          },
          failOnStatusCode: false,
        }).then((response) => {
          expect(response.status).to.eq(400);
        });
      });
  });
  