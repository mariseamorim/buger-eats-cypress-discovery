var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function(){
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data =  {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: "11999999999",
            address: {
                postalcode: "89224150",
                street: "Rua das Cegonhas",
                number: "1000",
                details: "Ap 142",
                district: "Jardim Iririú",
                city_state: "Joinville/SC"
            },
            delivery_method: "Moto",
            cnh: "cnh-digital.jpg"
        }

        return data
    }
}