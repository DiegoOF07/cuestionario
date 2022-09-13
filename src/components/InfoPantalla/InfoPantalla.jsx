import React, { useState } from 'react'

export const InfoPantalla = ({ answers, setAnswers, error, setError }) => {
  const regresar = () => {
    setError('');
  };
  const limpiar = ()=>{
    setAnswers([]);
    setError('');
  }

  return (
    <>
      {error==='' ?
        <div className='container'>
          <div className='card'>
            <h2 className='title'>Tus resultados</h2>
            <p><b>Quien realiza el cuestionario:</b> {answers[0]}</p>
            <p><b>Genero:</b> {answers[1]}</p>
            <p><b>Grado academico:</b> {answers[2]}</p>
            <p><b>¿Te gusta escuchar musica?:</b> {answers[3]}</p>
            <p><b>Si la tienes, ¿Cual es tu apliacion favorita para escuchar musica?:</b> {answers[4]}</p>
            <p><b>¿Que tan frecuentemente escuchas musica?:</b> {answers[5]}</p>
            <p><b>¿Te gustaria aprender a hacer musica?:</b> {answers[6]}</p>
            <p><b>¿Te gustaria aprender a tocar un instrumento?:</b> {answers[7]}</p>
            <p><b>¿Has estado en una banda anteriormente?:</b>{answers[8]}</p>
            <p><b>¿Te gustaria escribir la letra de una cancion?:</b> {answers[9]}</p>
            <p><b>¿Te gusta ir a conciertos?:</b> {answers[10]}</p>
            <p><b>¿Sueles escuchar podcasts?:</b> {answers[11]}</p>
            <p><b>¿Te gusta escuchar musica mientras trabajas?:</b> {answers[12]}</p>
            <p><b>¿Cual es el genero musical que mas te gusta?:</b> {answers[13]}</p>
            <p><b>¿Cual es tu artista favorito?:</b> {answers[14]}</p>
            <div className='btn-group'>
              <button className='btn'  onClick={limpiar}>Ver cuestionario</button>
            </div>
          </div>
        </div>
        : <div className='container'>
          <div className='card'>
            <h2 className='title'>{error}</h2><br />
            <div className='btn-group'>
            <button className='btn' onClick={regresar}>Entendido</button>
            </div>
          </div>
        </div>
      }
    </>
  )
}
