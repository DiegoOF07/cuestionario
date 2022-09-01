import { useState } from "react"

export const Formulario = () => {
    const [values, setValues] = useState([]);
    const [page, setPage] = useState(1);
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [thirdValue, setThirdValue] = useState('');

    const fisrtQuestion = ({ target }) => {
        setFirstValue(target.value);
    };
    const secondQuestion = ({ target }) => {
        setSecondValue(target.value);
    };
    const thirdQuestion = ({ target }) => {
        setThirdValue(target.value);
    };

    const nextPage = () => {
        if(page<5)setPage(page+1);
        let valores = [firstValue, secondValue, thirdValue];
        setValues(...values, valores);
    }

    const previousPage = () => {
        if(page>1)setPage(page-1);
        setValues([]);
    }

    return (
        <>
            <form>
                {page === 1 ?
                    <div>
                        <h3>Pagina 1</h3>
                        <div>
                            <p>¿Cual es tu framework favorito?</p>
                            <input type="radio"  name="framework" value="react" onChange={(e) => fisrtQuestion(e)} />React
                            <input type="radio"  name="framework" value="angular" onChange={(e) => fisrtQuestion(e)} />Angular
                            <input type="radio"  name="framework" value="vue" onChange={(e) => fisrtQuestion(e)} />Vue
                        </div>
                        <div>
                            <p>¿Cual es el lenguaje que mas te gusta?</p>
                            <input type="radio"  name="lenguaje" value="java" onChange={(e) => secondQuestion(e)} />Java
                            <input type="radio"  name="lenguaje" value="javascript" onChange={(e) => secondQuestion(e)} />Javascript
                            <input type="radio"  name="lenguaje" value="python" onChange={(e) => secondQuestion(e)} />Python
                            <input type="radio"  name="lenguaje" value="c++" onChange={(e) => secondQuestion(e)} />C++
                        </div>
                        <div>
                            <p>¿Cual es tu sistema operativo?</p>
                            <input type="radio"  name="sistema" value="macOS" onChange={(e) => thirdQuestion(e)} />MacOS
                            <input type="radio"  name="sistema" value="windows" onChange={(e) => thirdQuestion(e)} />Windows
                            <input type="radio"  name="sistema" value="linux" onChange={(e) => thirdQuestion(e)} />Linux
                            <input type="radio"  name="sistema" value="android" onChange={(e) => thirdQuestion(e)} />Android
                        </div>
                    </div>
                    : null
                }
                {page === 2 ?
                    <div>
                        <h3>Pagina 2</h3>
                        <div>
                            <p>¿Cual es tu framework favorito?</p>
                            <input type="radio"   name="framewor" value="react" onChange={(e) => fisrtQuestion(e)} />React
                            <input type="radio"   name="framewor" value="angular" onChange={(e) => fisrtQuestion(e)} />Angular
                            <input type="radio"   name="framewor" value="vue" onChange={(e) => fisrtQuestion(e)} />Vue
                        </div>
                        <div>
                            <p>¿Cual es el lenguaje que mas te gusta?</p>
                            <input type="radio"   name="lenguaje" value="java" onChange={(e) => secondQuestion(e)} />Java
                            <input type="radio"   name="lenguaje" value="javascript" onChange={(e) => secondQuestion(e)} />Javascript
                            <input type="radio"   name="lenguaje" value="python" onChange={(e) => secondQuestion(e)} />Python
                            <input type="radio"   name="lenguaje" value="c++" onChange={(e) => secondQuestion(e)} />C++
                        </div>
                        <div>
                            <p>¿Cual es tu sistema operativo?</p>
                            <input type="radio"   name="sistema" value="macOS" onChange={(e) => thirdQuestion(e)} />MacOS
                            <input type="radio"   name="sistema" value="windows" onChange={(e) => thirdQuestion(e)} />Windows
                            <input type="radio"   name="sistema" value="linux" onChange={(e) => thirdQuestion(e)} />Linux
                            <input type="radio"   name="sistema" value="android" onChange={(e) => thirdQuestion(e)} />Android
                        </div>
                    </div>
                    : null
                }
                {page === 3 ?
                    <div>
                        <h3>Pagina 3</h3>
                        <div>
                            <p>¿Cual es tu framework favorito?</p>
                            <input type="radio"   name="framework" value="react" onChange={(e) => fisrtQuestion(e)} />React
                            <input type="radio"   name="framework" value="angular" onChange={(e) => fisrtQuestion(e)} />Angular
                            <input type="radio"   name="framework" value="vue" onChange={(e) => fisrtQuestion(e)} />Vue
                        </div>
                        <div>
                            <p>¿Cual es el lenguaje que mas te gusta?</p>
                            <input type="radio"   name="lenguaje" value="java" onChange={(e) => secondQuestion(e)} />Java
                            <input type="radio"   name="lenguaje" value="javascript" onChange={(e) => secondQuestion(e)} />Javascript
                            <input type="radio"   name="lenguaje" value="python" onChange={(e) => secondQuestion(e)} />Python
                            <input type="radio"   name="lenguaje" value="c++" onChange={(e) => secondQuestion(e)} />C++
                        </div>
                        <div>
                            <p>¿Cual es tu sistema operativo?</p>
                            <input type="radio"   name="sistema" value="macOS" onChange={(e) => thirdQuestion(e)} />MacOS
                            <input type="radio"   name="sistema" value="windows" onChange={(e) => thirdQuestion(e)} />Windows
                            <input type="radio"   name="sistema" value="linux" onChange={(e) => thirdQuestion(e)} />Linux
                            <input type="radio"   name="sistema" value="android" onChange={(e) => thirdQuestion(e)} />Android
                        </div>
                    </div>
                    : null
                }
                {page === 4 ?
                    <div>
                        <h3>Pagina 4</h3>
                        <div>
                            <p>¿Cual es tu framework favorito?</p>
                            <input type="radio"   name="framework" value="react" onChange={(e) => fisrtQuestion(e)} />React
                            <input type="radio"   name="framework" value="angular" onChange={(e) => fisrtQuestion(e)} />Angular
                            <input type="radio"   name="framework" value="vue" onChange={(e) => fisrtQuestion(e)} />Vue
                        </div>
                        <div>
                            <p>¿Cual es el lenguaje que mas te gusta?</p>
                            <input type="radio"   name="lenguaje" value="java" onChange={(e) => secondQuestion(e)} />Java
                            <input type="radio"   name="lenguaje" value="javascript" onChange={(e) => secondQuestion(e)} />Javascript
                            <input type="radio"   name="lenguaje" value="python" onChange={(e) => secondQuestion(e)} />Python
                            <input type="radio"   name="lenguaje" value="c++" onChange={(e) => secondQuestion(e)} />C++
                        </div>
                        <div>
                            <p>¿Cual es tu sistema operativo?</p>
                            <input type="radio"   name="sistema" value="macOS" onChange={(e) => thirdQuestion(e)} />MacOS
                            <input type="radio"   name="sistema" value="windows" onChange={(e) => thirdQuestion(e)} />Windows
                            <input type="radio"   name="sistema" value="linux" onChange={(e) => thirdQuestion(e)} />Linux
                            <input type="radio"   name="sistema" value="android" onChange={(e) => thirdQuestion(e)} />Android
                        </div>
                    </div>
                    : null
                }
                {page === 5 ?
                    <div>
                        <h3>Pagina 5</h3>
                        <div>
                            <p>¿Cual es tu framework favorito?</p>
                            <input type="radio"   name="framework" value="react" onChange={(e) => fisrtQuestion(e)} />React
                            <input type="radio"   name="framework" value="angular" onChange={(e) => fisrtQuestion(e)} />Angular
                            <input type="radio"   name="framework" value="vue" onChange={(e) => fisrtQuestion(e)} />Vue
                        </div>
                        <div>
                            <p>¿Cual es el lenguaje que mas te gusta?</p>
                            <input type="radio"   name="lenguaje" value="java" onChange={(e) => secondQuestion(e)} />Java
                            <input type="radio"   name="lenguaje" value="javascript" onChange={(e) => secondQuestion(e)} />Javascript
                            <input type="radio"   name="lenguaje" value="python" onChange={(e) => secondQuestion(e)} />Python
                            <input type="radio"   name="lenguaje" value="c++" onChange={(e) => secondQuestion(e)} />C++
                        </div>
                        <div>
                            <p>¿Cual es tu sistema operativo?</p>
                            <input type="radio"   name="sistema" value="macOS" onChange={(e) => thirdQuestion(e)} />MacOS
                            <input type="radio"   name="sistema" value="windows" onChange={(e) => thirdQuestion(e)} />Windows
                            <input type="radio"   name="sistema" value="linux" onChange={(e) => thirdQuestion(e)} />Linux
                            <input type="radio"   name="sistema" value="android" onChange={(e) => thirdQuestion(e)} />Android
                        </div>
                    </div>
                    : null
                }
            </form>
            {
                page>1?
                <button onClick={previousPage}>anterior</button>
                :null
            }
            {
                page < 5?
                <button onClick={nextPage}>siguiente</button>
                :null
            }
        </>
    )
}
