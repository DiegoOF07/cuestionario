import { useState, useEffect } from 'react';

import { config } from '../../config/questions.config';
import './form.modules.css';


export const Formulario = ({ setAnswers, setError }) => {
  const [page, setPage] = useState(1);
  const [respuesta, setRespuesta] = useState("");
  const [form, setForm] = useState({});

  useEffect(() => {
    const newState = {};

    config.questions.forEach((question) => {
      newState[question.code] = {
        value: "",
        ...question,
      };
    });

    setForm(newState);
  }, []);

  // const tomarValores = (e) => {
  //   let respuestas = [];
  //   setRespuesta(e.target.value);
  //   respuestas = [...respuestas, respuesta];
  //   console.log(respuestas);
  // };
  //funcion para obtener values

  const nextPage = (e) => {
    
    e.preventDefault();
    if (page < 5) setPage(page + 1);
  };

  const previousPage = (e) => {

    e.preventDefault();
    if (page > 1) setPage(page - 1);
  };

  const submit = (e) => {};

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
                  <label htmlFor = {formElement.code} className = "question">
                    {formElement.question}
                  </label>
                  <input
                    id = {formElement.code}
                    key = {formElement.code}
                    type = {formElement.type}
                    placeholder = {formElement.placeholder}
                    className = "textSpace"
                  />
                </div>
              ) : null}
            </div>
          ))}
          <div className = "pageNumber">Pagina {page}</div>
          <div className = {"btn-group"}>
            {page > 1 
            ? (
              <button className = {"btn"} onClick = {(e) => previousPage(e)}>
                Anterior
              </button>
            ) : null}
            {page < 5 
            ? (
              <button className = {"btn"} onClick = {(e) => nextPage(e)}>
                Siguiente
              </button>
            ) : null}
            {page === 5 
            ? (
              <button className = {"btn"} onClick = {(e) => submit(e)}>
                Enviar
              </button>
            ) : null}
          </div>
        </form>
      </div>
    </div>
  );
};
