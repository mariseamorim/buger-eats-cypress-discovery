import signup from "../pages/SignupPage";
import signupFactory from "../factories/SignupFactory";
import SignupPage from "../pages/SignupPage";
describe("Signup", () => {
  // before(function (){
  //     cy.log('Executado uma unica vez ANTES de TODOS os casos de testes')
  // })

  // after(function (){
  //     cy.log('Executado uma unica vez DEPOIS de TODOS os casos de testes')
  // })
  // afterEach(function (){
  //     cy.log('Executado sempre DEPOIS de CADA caso de testes')
  // })

  //beforeEach(function (){
  //   cy.fixture('deliver').then((d) =>{
  //        this.delivery = d
  //   })
  //})

  it("User shold be deliver", function () {
    var deliver = new signupFactory.deliver();

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    const expectMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    signup.modalContentShoulBe(expectMessage);
  });
  it("Incorrect document", function () {
    var deliver = new signupFactory.deliver();

    deliver.cpf = "123456aaa";
    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShoulBe("Oops! CPF inválido");
  });
  it("Incorrect email", function () {
    var deliver = new signupFactory.deliver();

    deliver.email = "teste.com.br";
    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShoulBe("Oops! Email com formato inválido.");
  });

  context("required fields", function () {
    const messages = [
      { field: "name", output: "É necessário informar o nome" },
      { field: "cpf", output: "É necessário informar o CPF" },
      { field: "email", output: "É necessário informar o emai" },
      { field: "postalcode", output: "É necessário informar o CEP" },
      { field: "number", output: "É necessário informar o número do endereço" },
      { field: "delivery_method", output: "Selecione o método de entrega" },
      { field: "cnh", output: "Adicione uma foto da sua CNH" },
    ]

    before(function(){
        signup.go()
        signup.submit()
    })

    messages.forEach(function(msg){
        it(`${msg.field} is required`, function(){
            signup.alertMessageShoulBe(msg.output)
        })
    })

  });
});
