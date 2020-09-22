describe('Home', () => {
  it('should load home route', () => {
    cy.visit('/home');
    cy.contains('SpaceEx Launch programs');
  });
});
