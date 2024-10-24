describe('Mocha test', function() {
    beforeEach(function() {
        //Go to url
        cy.fixture('example').then(function (data) {
            this.data = data; 
            cy.visit(this.data.url, { headers: { "Accept-Encoding": "gzip, deflate" } });
        });
    });
    
    it('Verify title of current page', function() {
        // Verify title
        cy.title().should('equal', 'Want to practice test automation? Try these demo sites! | Automation Panda');
    });

    it('Verify title at speaking page', function() {
        // Click on menu speaking
        cy.get("#menu-item-10593").click();
        // Verify title
        const title = cy.title();
        cy.title().should('equal', 'Speaking | Automation Panda');
    });
           
});