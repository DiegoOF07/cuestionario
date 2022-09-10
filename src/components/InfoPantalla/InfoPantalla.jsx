import React, { useState } from 'react'

export const InfoPantalla = ({ answers, setAnswers, error, setError }) => {
  const regresar = () => {
    setError('');
  };

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
            <p>¿Te gustaria aprender a hacer musica?: {answers[6]}</p>
            <p>¿Te gustaria aprender a tocar un instrumento?: {answers[7]}</p>
            <p>¿Has estado en una banda anteriormente?: {answers[8]}</p>
            <p>¿Te gustaria escribir la letra de una cancion?: {answers[9]}</p>
            <p>¿Te gusta ir a conciertos?: {answers[10]}</p>
            <p>¿Sueles escuchar podcasts?: {answers[11]}</p>
            <p>¿Te gusta escuchar musica mientras trabajas?: {answers[12]}</p>
            <p>¿Cual es el genero musical que mas te gusta?: {answers[13]}</p>
            <p>¿Cual es tu artista favorito?: {answers[14]}</p>
          </div>
        </div>
        : <div className='container'>
          <div className='card'>
            <h2 className='title'>{error}</h2>
            <button className='btn' onClick={regresar}>Entendido</button>
          </div>
        </div>
      }
    </>
  )
}
