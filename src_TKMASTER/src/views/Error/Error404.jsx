import style from './Error404.module.css'
import { useRouteError } from 'react-router-dom';

const Error404 = ()=>{

    const errorMessage = useRouteError()

    return <>
        <h1 className={style.title}>Sorry!</h1>
        <span className={style.span}>{errorMessage.data}</span>
    </>

}

export default Error404