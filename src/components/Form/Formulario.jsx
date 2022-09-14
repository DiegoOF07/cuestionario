import { useState, useEffect } from 'react';

import { config } from '../../config/questions.config';
import './form.modules.css';


export const Formulario = ({ setAnswers }) => {
  const [page, setPage] = useState(1);
  const [form, setForm] = useState({});

  useEffect(() => {
    const newState = {};

    config.questions.forEach((question) => {
      newState[question.code] = {
        value: '',
        ...question,
      };
    });

    setForm(newState);
  }, []);

  const getValues = (e, code) => {

    setForm({
      ...form,[code]:{
        ...form[code], value: e.target.value
      }
    });
  };

  const nextPage = (e) => {
    
    e.preventDefault();
    if (page < 5) setPage(page + 1);
  };

  const previousPage = (e) => {

    e.preventDefault();
    if (page > 1) setPage(page - 1);
  };

  const submit = (e) => {
    
    e.preventDefault();
    setAnswers(form);
  };

  return (
    <div className = "container">
      <div className = "card">
        <h1 className = "title">Cuestionario</h1>
        <form className = "questionSpace">
          {Object.values(form).map((formElement) => (
            <div key = {formElement.code}>
              {formElement.page === page 
              ? (
                <div className = "questionSpace">
                  <label 
                    htmlFor = {formElement.code} 
                    className = "question">
                      {formElement.question}
                  </label>
                  <input
                    id = {formElement.code}
                    key = {formElement.code}
                    type = {formElement.type}
                    placeholder = {formElement.placeholder}
                    className = "textSpace"
                    value = {formElement.value}
                    onChange = {(e)=>getValues(e, formElement.code)}
                  />
                </div>
              ) : null}
            </div>
          ))}
          <div className = "pageNumber">Pagina {page}</div>
          <div className = {"btn-group"}>
            {page > 1 
            ? (
              <button 
                className = {"btn"} 
                onClick = {(e) => previousPage(e)}>
                  Anterior
              </button>
            ) : null}
            {page < 5 
            ? (
              <button 
                className = {"btn"} 
                onClick = {(e) => nextPage(e)}>
                  Siguiente
              </button>
            ) : null}
            {page === 5 
            ? (
              <button 
                type = "submit" 
                className = {"btn"} 
                onClick = {(e) => submit(e)}>
                  Enviar
              </button>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};
