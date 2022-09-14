import { useState } from 'react';
import { Formulario } from './components/Form/Formulario';
import { InfoPantalla } from './components/InfoPantalla/InfoPantalla';

export function App() {

  const [answers, setAnswers] = useState([]);
  const [error, setError] = useState('');

  return (
    <>
      {answers.length < 1 && error === "" 
      ? (
        <Formulario setAnswers={setAnswers} setError={setError} />
      ) : (
        <InfoPantalla
          answers={answers}
          setAnswers={setAnswers}
          error={error}
          setError={setError}
        />
      )}
    </>
  );
}
