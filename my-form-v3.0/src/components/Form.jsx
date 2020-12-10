import { Component } from 'react';
import PersonalForm from './PersonalForm';
import LastJob from './LastJob';

class Form extends Component {
  render() {
    return (
      <div className="form">
        <form action="">
          <PersonalForm />
          <LastJob />
          <button type="submit">
            Enviar
          </button>
          <button>
            Limpar
          </button>
        </form>
      </div>
    );
  }
  
}

export default Form;
