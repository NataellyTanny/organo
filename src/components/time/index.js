import Colaborador from '../colaborador';
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.secondColor};
    return (
        <section className='time' style={css}>
            <h3 style={{borderColor: props.firstColor}}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time