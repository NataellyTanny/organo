import Colaborador from '../colaborador';
import './Time.css'

const Time = (props) => {
    const css = { backgroundColor: props.secondColor};
    return (
        //Pode ser realizado em operador ternario tbm: (props.colaboradores.length > 0) ? <section...> : ''; Isso faz a filtragem de mostrar o quadro somente se tiver dado.
        (props.colaboradores.length > 0) && <section className='time' style={css}>
            <h3 style={{borderColor: props.firstColor}}>{props.nome}</h3>
            <div className='colaboradores'>
            {props.colaboradores.map(colaborador => <Colaborador corDeFundo={props.firstColor} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
        </section>
    )
}

export default Time