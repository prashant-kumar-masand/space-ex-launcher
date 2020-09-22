describe('filter-bar', () => {
  beforeEach(() => {
    cy.visit('/home');
  });
  it('should consist of filter-bar', () => {
    cy.contains('Filter');
  });
  it('should consist of launch-year', () => {
    cy.contains('Launch Year');
  });
  it('should filter by clicking on launch-year', () => {
    cy.contains('2006')
      .click()
      .then(() => {
        cy.contains('FalconSat').should('have.length', 1);
      });
  });
});
