import { useState } from "react"
import './form.modules.css'

export const Formulario = ({setAnswers,setError}) => {
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

    const firstQuestion = ({ target }) => {
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
        if(firstValue!=='' || fourteenthValue!=='' || !fifteenthValue!==''){
            let valores = [
                firstValue.trim(),
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
                fourteenthValue.trim(),
                fifteenthValue.trim(),
            ];
            setAnswers(valores);
        }else{
            setError('Por favor, no deje preguntas en blanco')
        }
    };

    return (
        <div className={'container'}>
            <div className={'card'}>
                <h1>Cuestionario</h1>
                <form >
                    {page === 1 ?
                        <div className={'questionSpace'}>
                            <h3 className={'title'}>Acerca de ti</h3>
                            <p className={'question'}>¿Cual es tu nombre?</p>
                            <input type="text" value={firstValue} onChange={(e)=>firstQuestion(e)} className={'textSpace'} placeholder='Escribe tu nombre' />
                            <p className={'question'}>¿Cual es tu genero?</p>
                            <div className={'questionOptions'} >
                                Masculino<input type="radio" name="genero" value="Masculino" onChange={(e) => secondQuestion(e)} />
                                Femenino<input type="radio" name="genero" value="Femenino" onChange={(e) => secondQuestion(e)} />
                                Prefiero no decir<input type="radio" name="genero" value="Prefiero no decir" onChange={(e) => secondQuestion(e)} />
                            </div>
                            <p className={'question'}>¿Cual es tu nivel academico?</p>
                            <div className={'questionOptions'} >
                                Primario<input type="radio" name="grado" value="Primario" onChange={(e) => thirdQuestion(e)} />
                                Medio<input type="radio" name="grado" value="Medio" onChange={(e) => thirdQuestion(e)} />
                                Universitario<input type="radio" name="grado" value="Universitario" onChange={(e) =>thirdQuestion(e)} />
                            </div>
                            <h3 className={'pageNumber'}>Pagina 1</h3>
                        </div>
                        : null
                    }
                    {/* Empezamos con las preguntas */}
                    {page === 2 ?
                        <div className={'questionSpace'}>
                            <p className={'question'}>¿Te gusta escuchar musica?</p>
                            <div className={'questionOptions'} >
                                Si<input type="radio" name="escuchas" value="Si" onChange={(e) => fourthQuestion(e)} />
                                No<input type="radio" name="escuchas" value="No" onChange={(e) => fourthQuestion(e)} />
                                No lo se<input type="radio" name="escuchas" value="No lo se" onChange={(e) => fourthQuestion(e)} />
                            </div>
                            <p className={'question'}>Si la tienes, ¿Cual es tu apliacion favorita para escuchar musica?</p>
                            <div className={'questionOptions'} >
                                Spotify<input type="radio" name="app" value="Spotify" onChange={(e) => fifthQuestion(e)} />
                                Deezer<input type="radio" name="app" value="Deezer" onChange={(e) => fifthQuestion(e)} />
                                Apple Music<input type="radio" name="app" value="Apple Music" onChange={(e) => fifthQuestion(e)} />
                                Youtube Music<input type="radio" name="app" value="Youtube Music" onChange={(e) => fifthQuestion(e)} />
                            </div>
                            <p className={'question'}>¿Que tan frecuentemente escuchas musica?</p>
                            <div className={'questionOptions'} >
                                Todos los dias<input type="radio" name="frecuente" value="Todos los dias" onChange={(e) => sixthQuestion(e)} />
                                Varias veces a la semana<input type="radio" name="sistema" value="Varias veces a la semana" onChange={(e) => sixthQuestion(e)} />
                                Una vez por semana<input type="radio" name="sistema" value="Una vez por semana" onChange={(e) => sixthQuestion(e)} />
                                No suelo escuchar musica<input type="radio" name="sistema" value="No suelo escuchar musica" onChange={(e) => sixthQuestion(e)} />
                            </div>
                            <h3 className={'pageNumber'}>Pagina 2</h3>
                        </div>
                        : null
                    }
                    {page === 3 ?
                        <div className={'questionSpace'}>
                            <p className={'question'}>¿Te gustaria aprender a hacer musica?</p>
                            <div className={'questionOptions'} >
                                Si<input type="radio" name="hacer" value="Si" onChange={(e) => seventhQuestion(e)} />
                                No<input type="radio" name="hacer" value="No" onChange={(e) => seventhQuestion(e)} />
                                No lo se<input type="radio" name="hacer" value="No lo se" onChange={(e) => seventhQuestion(e)} />
                            </div>
                            <p className={'question'}>¿Te gustaria aprender a tocar un instrumento?</p>
                            <div className={'questionOptions'} >
                                Si<input type="radio" name="instrumento" value="Si" onChange={(e) => eighthQuestion(e)} />
                                No<input type="radio" name="instrumento" value="No" onChange={(e) => eighthQuestion(e)} />
                                No lo se<input type="radio" name="instrumento" value="No lo se" onChange={(e) => eighthQuestion(e)} />
                            </div>
                            <p className={'question'}>¿Has estado en una banda anteriormente?</p>
                            <div className={'questionOptions'} >
                                Si<input type="radio" name="banda" value="Si" onChange={(e) => ninthQuestion(e)} />
                                No<input type="radio" name="banda" value="No" onChange={(e) => ninthQuestion(e)} />
                            </div>
                            <h3 className={'pageNumber'}>Pagina 3</h3>
                        </div>
                        : null
                    }
                    {page === 4 ?
                        <div className={'questionSpace'}>
                            <p className={'question'}>¿Te gustaria escribir la letra de una cancion?</p>
                            <div className={'questionOptions'} >
                                Si<input type="radio" name="letra" value="Si" onChange={(e) => tenthQuestion(e)} />
                                No<input type="radio" name="letra" value="No" onChange={(e) => tenthQuestion(e)} />
                                No lo se<input type="radio" name="letra" value="No lo se" onChange={(e) => tenthQuestion(e)} />
                            </div>
                            <p className={'question'}>¿Te gusta ir a conciertos?</p>
                            <div className={'questionOptions'} >
                                Si<input type="radio" name="concierto" value="Si" onChange={(e) => eleventhQuestion(e)} />
                                No<input type="radio" name="concierto" value="No" onChange={(e) => eleventhQuestion(e)} />
                                Nunca lo he hecho<input type="radio" name="concierto" value="Nunca lo he hecho" onChange={(e) => eleventhQuestion(e)} />
                            </div>
                            <p className={'question'}>¿Sueles escuchar podcasts?</p>
                            <div className={'questionOptions'} >
                                Si<input type="radio" name="podcast" value="Si" onChange={(e) => twelfthQuestion(e)} />
                                No<input type="radio" name="podcast" value="No" onChange={(e) => twelfthQuestion(e)} />
                            </div>
                            <h3 className={'pageNumber'}>Pagina 4</h3>
                        </div>
                        : null
                    }
                    {page === 5 ?
                        <div className={'questionSpace'}>
                            <p className={'question'}>¿Te gusta escuchar musica mientras trabajas?</p>
                            <div className={'questionOptions'} >
                                Si<input type="radio" name="trabajas" value="Si" onChange={(e) => thirteenthQuestion(e)} />
                                No<input type="radio" name="trabajas" value="No" onChange={(e) => thirteenthQuestion(e)} />
                            </div>
                            <p className={'question'}>¿Cual es el genero musical que mas te gusta?</p>
                                <input type="text" value={fourteenthValue} onChange={(e) => fourteenthQuestion(e)} className={'textSpace'}  placeholder='Escribe el nombre de tu genero favorito'/>
                            <p className={'question'}>¿Cual es tu artista favorito?</p>
                                <input type="text" value={fifteenthValue} onChange={(e) => fifteenthQuestion(e)} className={'textSpace'} placeholder='Escribe el nombre de tu artista favorito'/>
                            <h3 className={'pageNumber'}>Pagina 5</h3>
                        </div>
                        : null
                    }
                </form>
                <div className={'btn-group'}>
                    {
                        page > 1 ?
                            <button className={'btn'} onClick={(e) => previousPage(e)}>Anterior</button>
                            : null
                    }
                    {
                        page < 5 ?
                            <button className={'btn'} onClick={(e) => nextPage(e)}>Siguiente</button>
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
