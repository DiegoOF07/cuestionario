import './info.modules.css'

export const InfoPantalla = ({ answers, setAnswers }) => {
  const limpiar = () => {
    setAnswers({});
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <h2 className="title">Tus resultados</h2>
          {Object.values(answers).map(formElement=>(
            <div 
              className = "questionSpace" 
              key = {formElement.code}>
                <label 
                  htmlFor = {formElement.code} 
                  className = "question">
                    {formElement.question}
                </label>
                <input
                  id = {formElement.code}
                  key = {formElement.code}
                  type = {formElement.type}
                  className = "textSpace"
                  value = {formElement.value}
                  readOnly = {true}
                />
            </div>
          ))}
          <div className = "btn-group">
            <button 
              className = "btn" 
              onClick = {limpiar}>
                Enviar otra respuesta
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
