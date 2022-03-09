
class SignupPage{
    go(){
        //cy.viewport(1440,900)
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(delivery){
        cy.get('input[name="fullName"]').type(delivery.name)
        cy.get('input[name="cpf"]').type(delivery.cpf)
        cy.get('input[name="email"]').type(delivery.email)
        cy.get('input[name="whatsapp"]').type(delivery.whatsapp)

        cy.get('input[name="postalcode"]').type(delivery.address.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(delivery.address.number)
        cy.get('input[name="address-details"]').type(delivery.address.details)

        cy.get('input[name="address"]').should('have.value', delivery.address.street)
        cy.get('input[name="district"]').should('have.value', delivery.address.district)
        cy.get('input[name="city-uf"]').should('have.value', delivery.address.city_state)
        
        //cy.get('img[alt="Moto"]').click()
        cy.contains('.delivery-method li', delivery.delivery_method).click()
        cy.get('.dropzone input[accept^="image"]').attachFile('/images/' + delivery.cnh)

    }
    submit(){
        cy.get('button[type="submit"]').click()
    }

    modalContentShoulBe(expectMessage){
        cy.get('.swal2-container .swal2-html-container').should('have.text' ,expectMessage)
    }

    alertMessageShoulBe(expectMessage){
        //cy.get('.alert-error').should('have.text', expectMessage)
        cy.contains('.alert-error', expectMessage).should('be.visible')
    }

}

export default new SignupPage;