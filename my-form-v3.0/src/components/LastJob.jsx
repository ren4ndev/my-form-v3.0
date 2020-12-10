import { Component } from 'react';

class LastJob extends Component {
  render() {
    return (
      <div className="personal-form">
        <fieldset className="field-control">
        <label htmlFor="resume">
            Resumo do Currículo:
            <input
              type="text"
              name="resume"
              className="personal-form_resume"
              placeholder="Insira um resumo sobre seu último emprego"
              maxLength="1000"
              required
            />
          </label>
          <label htmlFor="job">
            Cargo:
            <input
              type="text"
              name="job"
              className="personal-form_job"
              placeholder="Insira o cargo"
              maxLength="40"
              required
            />
          </label>
          <label htmlFor="description">
            Descrição do cargo:
            <input
              type="text"
              name="description"
              className="personal-form_description"
              placeholder="Insira uma descrição do cargo"
              maxLength="500"
              required
            />
          </label>
        </fieldset>
      </div>
    );
  }
  
}

export default LastJob;
