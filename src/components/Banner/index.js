import { Fragment } from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <Fragment> //Para usar o fragment pode ser usado assim vazio, no elemento ele some;
            <header className='banner'>
                <img src="/imgs/banner.png" alt="Banner principal da página organo"></img>
            </header>
        </Fragment>
    )
}

export default Banner;