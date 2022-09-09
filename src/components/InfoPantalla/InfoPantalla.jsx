import React, { useState } from 'react'

export const InfoPantalla = ({answers, setAnswers}) => {
  return (
    <div className='container'>
      <div className='card'>
        <h2 className='title'>Tus resultados</h2>
        <p>Quien realiza es cuestionario: {answers[0]}</p>
        <p>Genero: {answers[1]}</p>
        <p>Grado academico: {answers[2]}</p>
        <p>¿Te gusta escuchar musica?: {answers[3]}</p>
        <p>Si la tienes, ¿Cual es tu apliacion favorita para escuchar musica?: {answers[4]}</p>
        <p>¿Que tan frecuentemente escuchas musica?: {answers[5]}</p>
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
  )
}
