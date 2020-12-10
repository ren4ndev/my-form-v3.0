import { Component } from 'react';

class PersonalForm extends Component {
  render() {
    return (
      <div className="personal-form">
        <fieldset className="field-control">
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              name="name"
              className="personal-form_name"
              placeholder="Insira seu nome"
              maxLength="40"
              required
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              className="personal-form_email"
              placeholder="Insira seu email"
              maxLength="50"
              required
            />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input
              type="text"
              name="cpf"
              className="personal-form_cpf"
              placeholder="Insira seu CPF"
              maxLength="11"
              required
            />
          </label>
          <label htmlFor="adress">
            Endereço:
            <input
              type="text"
              name="adress"
              className="personal-form_adress"
              placeholder="Insira seu Endereço"
              maxLength="200"
              required
            />
          </label>
          <label htmlFor="city">
            Cidade:
            <input
              type="text"
              name="city"
              className="personal-form_city"
              placeholder="Insira sua Cidade"
              maxLength="28"
              required
            />
          </label>
          <label htmlFor="state">
            Estado:
            <input
              type="text"
              name="state"
              className="personal-form_state"
              placeholder="Insira sua Estado"
              maxLength="28"
              required
            />
          </label>
          <label htmlFor="home">
            Casa
            <input type="radio" name="type" id="home" value="home" />
          </label>
          <label htmlFor="apto">
            Apartamento
            <input type="radio" name="type" id="apto" value="apto" />
          </label>
        </fieldset>
      </div>
    );
  }
  
}

export default PersonalForm;
