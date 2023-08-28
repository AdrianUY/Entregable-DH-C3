import './Card.css'

const Card = (props) => {

    return (
        <div className='Card' >
            <p>Hola {props.data.nombre}!! <br /> Tu apellido es {props.data.apellido}</p>
            
        </div>
    )
}

export default Card;