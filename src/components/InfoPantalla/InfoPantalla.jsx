import React, { useState, useEffect } from 'react';

import {config} from '../../config/questions.config'


export const InfoPantalla = ({ answers, setAnswers, error, setError }) => {

  const [form, setForm] = useState({});

  useEffect(() => {
    const newState = {};

    config.questions.forEach((question,i) => {
      newState[question.code] = {
        value: answers[i],
        ...question,
      };
    });

    setForm(newState);
  }, []);

  const regresar = () => {

    setError('');
  };
  const limpiar = () => {

    setAnswers([]);
    setError('');
  };

  return (
    <>
      {error === "" 
      ? (
        <div className = "container">
          <div className = "card">
            <h2 className = "title">Tus resultados</h2>

            <div className = "btn-group">
              <button className = "btn" onClick = {limpiar}>
                Ver cuestionario
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className = "container">
          <div className = "card">
            <h2 className = "title">{error}</h2>
            <br />
            <div className = "btn-group">
              <button className = "btn" onClick = {regresar}>
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
