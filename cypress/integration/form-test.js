describe("BloomTech Eats", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  it('sanity check to make sure tests work', () => {
    expect(1 + 2).to.equal(3);
    expect(2 + 2).not.to.equal(5);
    expect({}).not.to.equal({});
    expect({}).to.eql({});
  })

    // helpers to grab elements
    const nameInput = () => cy.get('input[name=name]');
    const redSauce = () => cy.get('input[id=red]')
    const pepperoni = () => cy.get('input[name=pepperoni]');
    const sausage = () => cy.get('input[name=sausage]');
    const submitButton = () => cy.get('button[id="order-button"]')

    describe('filling out the inputs', () => {
        it('can type in the name input', () => {
            nameInput()
                .should('have.value', '')
                .type('Dylan')
                .should('have.value', 'Dylan');
        });

        it('can select items', () => {
            redSauce().click();
            pepperoni().click();
            sausage().click();
        });

        it('can submit form', () => {
            nameInput().type('Dylan');
            redSauce().click();
            pepperoni().click();
            sausage().click();
            submitButton().click();
        })
    })
});
