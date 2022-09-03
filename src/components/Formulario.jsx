import { useState } from "react"
import './form.modules.css'

export const Formulario = () => {
    const [values, setValues] = useState([]);
    const [page, setPage] = useState(1);
    const [firstValue, setFirstValue] = useState('');
    const [secondValue, setSecondValue] = useState('');
    const [thirdValue, setThirdValue] = useState('');
    const [fourthValue, setFourthValue] = useState('');
    const [fifthValue, setFifthValue] = useState('');
    const [sixthValue, setSixthValue] = useState('');
    const [seventhValue, setSeventhValue] = useState('');
    const [eighthValue, setEighthValue] = useState('');
    const [ninthValue, setNinthValue] = useState('');
    const [tenthValue, setTenthValue] = useState('');
    const [eleventhValue, setEleventhValue] = useState('');
    const [twelfthValue, setTwelfthValue] = useState('');
    const [thirteenthValue, setThirteenthValue] = useState('');
    const [fourteenthValue, setFourteenthValue] = useState('');
    const [fifteenthValue, setFifteenthValue] = useState('');

    const fisrtQuestion = ({ target }) => {
        setFirstValue(target.value);
    };
    const secondQuestion = ({ target }) => {
        setSecondValue(target.value);
    };
    const thirdQuestion = ({ target }) => {
        setThirdValue(target.value);
    };
    const fourthQuestion = ({ target }) => {
        setFourthValue(target.value);
    };
    const fifthQuestion = ({ target }) => {
        setFifthValue(target.value);
    };
    const sixthQuestion = ({ target }) => {
        setSixthValue(target.value);
    };
    const seventhQuestion = ({ target }) => {
        setSeventhValue(target.value);
    };
    const eighthQuestion = ({ target }) => {
        setEighthValue(target.value);
    };
    const ninthQuestion = ({ target }) => {
        setNinthValue(target.value);
    };
    const tenthQuestion = ({ target }) => {
        setTenthValue(target.value);
    };
    const eleventhQuestion = ({ target }) => {
        setEleventhValue(target.value);
    };
    const twelfthQuestion = ({ target }) => {
        setTwelfthValue(target.value);
    };
    const thirteenthQuestion = ({ target }) => {
        setThirteenthValue(target.value);
    };
    const fourteenthQuestion = ({ target }) => {
        setFourteenthValue(target.value);
    };
    const fifteenthQuestion = ({ target }) => {
        setFifteenthValue(target.value);
    };

    const nextPage = (e) => {
        e.preventDefault();
        if (page < 5) setPage(page + 1);
    }

    const previousPage = (e) => {
        e.preventDefault();
        if (page > 1) setPage(page - 1);
    }

    const submit = (e) => {
        e.preventDefault();
        let valores = [
            firstValue,
            secondValue,
            thirdValue,
            fourthValue,
            fifthValue,
            sixthValue,
            seventhValue,
            eighthValue,
            ninthValue,
            tenthValue,
            eleventhValue,
            twelfthValue,
            thirteenthValue,
            fourteenthValue,
            fifteenthValue,
        ];
        setValues(valores);
    };

    return (
        <div className={'container'}>
            <div className={'card'}>
                <h1>Cuestionario</h1>
                <form >
                    {page === 1 ?
                        <div>
                            <div className={'questionSpace'}>
                                <p className={'question'}>¿Cual es tu framework favorito?</p>
                                <input type="radio" name="framework" value="react" onChange={(e) => fisrtQuestion(e)} />React
                                <input type="radio" name="framework" value="angular" onChange={(e) => fisrtQuestion(e)} />Angular
                                <input type="radio" name="framework" value="vue" onChange={(e) => fisrtQuestion(e)} />Vue
                            </div>
                            <div className={'questionSpace'}>
                                <p className={'question'}>¿Cual es el lenguaje que mas te gusta?</p>
                                <input type="radio" name="lenguaje" value="java" onChange={(e) => secondQuestion(e)} />Java
                                <input type="radio" name="lenguaje" value="javascript" onChange={(e) => secondQuestion(e)} />Javascript
                                <input type="radio" name="lenguaje" value="python" onChange={(e) => secondQuestion(e)} />Python
                                <input type="radio" name="lenguaje" value="c++" onChange={(e) => secondQuestion(e)} />C++
                            </div>
                            <div className={'questionSpace'}>
                                <p className={'question'}>¿Cual es tu sistema operativo?</p>
                                <input type="radio" name="sistema" value="macOS" onChange={(e) => thirdQuestion(e)} />MacOS
                                <input type="radio" name="sistema" value="windows" onChange={(e) => thirdQuestion(e)} />Windows
                                <input type="radio" name="sistema" value="linux" onChange={(e) => thirdQuestion(e)} />Linux
                                <input type="radio" name="sistema" value="android" onChange={(e) => thirdQuestion(e)} />Android
                            </div>
                            <h3 className={'pageNumber'}>Pagina 1</h3>
                        </div>
                        : null
                    }
                    {page === 2 ?
                        <div>
                            <div className={'questionSpace'}>
                                <p className={'question'}>¿Cual es tu framework favorito?</p>
                                <input type="radio" name="framewor" value="react" onChange={(e) => fourthQuestion(e)} />React
                                <input type="radio" name="framewor" value="angular" onChange={(e) => fourthQuestion(e)} />Angular
                                <input type="radio" name="framewor" value="vue" onChange={(e) => fourthQuestion(e)} />Vue
                            </div>
                            <div className={'questionSpace'}>
                                <p className={'question'}>¿Cual es el lenguaje que mas te gusta?</p>
                                <input type="radio" name="lenguaje" value="java" onChange={(e) => fifthQuestion(e)} />Java
                                <input type="radio" name="lenguaje" value="javascript" onChange={(e) => fifthQuestion(e)} />Javascript
                                <input type="radio" name="lenguaje" value="python" onChange={(e) => fifthQuestion(e)} />Python
                                <input type="radio" name="lenguaje" value="c++" onChange={(e) => fifthQuestion(e)} />C++
                            </div>
                            <div className={'questionSpace'}>
                                <p className={'question'}>¿Cual es tu sistema operativo?</p>
                                <input type="radio" name="sistema" value="macOS" onChange={(e) => sixthQuestion(e)} />MacOS
                                <input type="radio" name="sistema" value="windows" onChange={(e) => sixthQuestion(e)} />Windows
                                <input type="radio" name="sistema" value="linux" onChange={(e) => sixthQuestion(e)} />Linux
                                <input type="radio" name="sistema" value="android" onChange={(e) => sixthQuestion(e)} />Android
                            </div>
                            <h3 className={'pageNumber'}>Pagina 2</h3>
                        </div>
                        : null
                    }
                    {page === 3 ?
                        <div>
                            <div className={'questionSpace'}>
                                <p className={'question'}>¿Cual es tu framework favorito?</p>
                                <input type="radio" name="framework" value="react" onChange={(e) => seventhQuestion(e)} />React
                                <input type="radio" name="framework" value="angular" onChange={(e) => seventhQuestion(e)} />Angular
                                <input type="radio" name="framework" value="vue" onChange={(e) => seventhQuestion(e)} />Vue
                            </div>
                            <div className={'questionSpace'}>
                                <p className={'question'}>¿Cual es el lenguaje que mas te gusta?</p>
                                <input type="radio" name="lenguaje" value="java" onChange={(e) => eighthQuestion(e)} />Java
                                <input type="radio" name="lenguaje" value="javascript" onChange={(e) => eighthQuestion(e)} />Javascript
                                <input type="radio" name="lenguaje" value="python" onChange={(e) => eighthQuestion(e)} />Python
                                <input type="radio" name="lenguaje" value="c++" onChange={(e) => eighthQuestion(e)} />C++
                            </div>
                            <div className={'questionSpace'}>
                                <p className={'question'}>¿Cual es tu sistema operativo?</p>
                                <input type="radio" name="sistema" value="macOS" onChange={(e) => ninthQuestion(e)} />MacOS
                                <input type="radio" name="sistema" value="windows" onChange={(e) => ninthQuestion(e)} />Windows
                                <input type="radio" name="sistema" value="linux" onChange={(e) => ninthQuestion(e)} />Linux
                                <input type="radio" name="sistema" value="android" onChange={(e) => ninthQuestion(e)} />Android
                            </div>
                            <h3 className={'pageNumber'}>Pagina 3</h3>
                        </div>
                        : null
                    }
                    {page === 4 ?
                        <div>
                            <div className={'questionSpace'}>
                                <p className={'question'}>¿Cual es tu framework favorito?</p>
                                <input type="radio" name="framework" value="react" onChange={(e) => tenthQuestion(e)} />React
                                <input type="radio" name="framework" value="angular" onChange={(e) => tenthQuestion(e)} />Angular
                                <input type="radio" name="framework" value="vue" onChange={(e) => tenthQuestion(e)} />Vue
                            </div>
                            <div className={'questionSpace'}>
                                <p className={'question'}>¿Cual es el lenguaje que mas te gusta?</p>
                                <input type="radio" name="lenguaje" value="java" onChange={(e) => eleventhQuestion(e)} />Java
                                <input type="radio" name="lenguaje" value="javascript" onChange={(e) => eleventhQuestion(e)} />Javascript
                                <input type="radio" name="lenguaje" value="python" onChange={(e) => eleventhQuestion(e)} />Python
                                <input type="radio" name="lenguaje" value="c++" onChange={(e) => eleventhQuestion(e)} />C++
                            </div>
                            <div className={'questionSpace'}>
                                <p className={'question'}>¿Cual es tu sistema operativo?</p>
                                <input type="radio" name="sistema" value="macOS" onChange={(e) => twelfthQuestion(e)} />MacOS
                                <input type="radio" name="sistema" value="windows" onChange={(e) => twelfthQuestion(e)} />Windows
                                <input type="radio" name="sistema" value="linux" onChange={(e) => twelfthQuestion(e)} />Linux
                                <input type="radio" name="sistema" value="android" onChange={(e) => twelfthQuestion(e)} />Android
                            </div>
                            <h3 className={'pageNumber'}>Pagina 4</h3>
                        </div>
                        : null
                    }
                    {page === 5 ?
                        <div>
                            <div className={'questionSpace'}>
                                <p className={'question'}>¿Cual es tu framework favorito?</p>
                                <input type="radio" name="framework" value="react" onChange={(e) => thirteenthQuestion(e)} />React
                                <input type="radio" name="framework" value="angular" onChange={(e) => thirteenthQuestion(e)} />Angular
                                <input type="radio" name="framework" value="vue" onChange={(e) => thirteenthQuestion(e)} />Vue
                            </div>
                            <div className={'questionSpace'}>
                                <p className={'question'}>¿Cual es el lenguaje que mas te gusta?</p>
                                <input type="radio" name="lenguaje" value="java" onChange={(e) => fourteenthQuestion(e)} />Java
                                <input type="radio" name="lenguaje" value="javascript" onChange={(e) => fourteenthQuestion(e)} />Javascript
                                <input type="radio" name="lenguaje" value="python" onChange={(e) => fourteenthQuestion(e)} />Python
                                <input type="radio" name="lenguaje" value="c++" onChange={(e) => fourteenthQuestion(e)} />C++
                            </div>
                            <div className={'questionSpace'}>
                                <p className={'question'}>¿Cual es tu sistema operativo?</p>
                                <input type="radio" name="sistema" value="macOS" onChange={(e) => fifteenthQuestion(e)} />MacOS
                                <input type="radio" name="sistema" value="windows" onChange={(e) => fifteenthQuestion(e)} />Windows
                                <input type="radio" name="sistema" value="linux" onChange={(e) => fifteenthQuestion(e)} />Linux
                                <input type="radio" name="sistema" value="android" onChange={(e) => fifteenthQuestion(e)} />Android
                            </div>
                            <h3 className={'pageNumber'}>Pagina 5</h3>
                        </div>
                        : null
                    }
                </form>
                <div className={'btn-group'}>
                    {
                        page > 1 ?
                            <button className={'btn'} onClick={(e) => previousPage(e)}>anterior</button>
                            : null
                    }
                    {
                        page < 5 ?
                            <button className={'btn'} onClick={(e) => nextPage(e)}>siguiente</button>
                            : null
                    }
                    {
                        page === 5 ?
                            <button className={'btn'} onClick={(e) => submit(e)}>Enviar</button>
                            : null
                    }
                </div>

            </div>
        </div>
    )
}
