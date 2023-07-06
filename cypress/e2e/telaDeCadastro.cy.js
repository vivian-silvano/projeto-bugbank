describe ('Testes na tela de cadastro',()=> {

beforeEach(() => {
    
cy.visit('/')

});

it('Cadastro com Sucesso',()=> {
    
cy.contains('Registrar').click();
cy.get(':nth-child(2) > .input__default').type('missao@cumprida.com',{force:true});
cy.get(':nth-child(3) > .input__default').type('Bianca',{force:true});
cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('legal@5teste',{force:true});
cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('legal@5teste',{force:true});
cy.get('#toggleAddBalance').click({force:true});
cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({force:true});

 
cy.get('#modalText').invoke('text').then((texto)=>{
   const numeroDaConta = texto.match(/\d+-\d+/) [0];


cy.get('#btnCloseModal').click();
cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('missao@cumprida.com');
cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('legal@5teste',{force:true});
cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('legal@5teste',{force:true});
cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('legal@5teste')
cy.get('.otUnI').click();

cy.contains(numeroDaConta).should('be.visible');//valida se foi criado um número de conta

cy.get('#textName').invoke('text').should('contains','Bianca');//valida se o usuario está logado

});

});

});




 