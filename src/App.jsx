import { useState } from 'react';
import { Formulario } from './components/Form/Formulario';
import { InfoPantalla } from './components/InfoPantalla/InfoPantalla';

export function App() {

  const [answers, setAnswers] = useState({});

  return (
    <>
      {Object.values(answers).length<1 
      ? (
        <Formulario setAnswers={setAnswers} />
      ) : (
        <InfoPantalla
          answers={answers}
          setAnswers={setAnswers}
        />
      )}
    </>
  );
}
