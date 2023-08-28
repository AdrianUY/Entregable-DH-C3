import Form from './Components/Form'
import Card from './Components/Card'
import { useState } from 'react'
import './App.css'


function App() {

  const [validatedFields, setValidatedFields] = useState(false);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
  });
  const [isNombreOk, setIsNombreOk] = useState(true);
  const [isApellidoOk, setIsApellidoOk] = useState(true);

  const nombreOnChange = e => {
    setNombre(e.target.value)
    if(nombre.trim().length > 3)
      setIsNombreOk(true)
  }

  const apellidoOnChange = e => {
    setApellido(e.target.value)
    if(apellido.length > 3)
    setIsApellidoOk(true)
  }


  const validateNombre = () => {
    if(nombre.trim().length > 3)
      setIsNombreOk(true)
    else
      setIsNombreOk(false)
      setValidatedFields(false)
  }

  const validateApellido = () => {
    if(apellido.length > 3)
      setIsApellidoOk(true)
    else
      setIsApellidoOk(false)
      setValidatedFields(false)
  }

  const validateForm = () => {
    if(nombre.trim().length > 3 && apellido.length > 3)
      setValidatedFields(true)
  }

  const cleanForm = () => {
    setNombre("");
    setApellido("")
  }

  const submitHandler = e => {
    e.preventDefault();
    validateNombre();
    validateApellido();
    validateForm();
    setData({
      nombre: nombre,
      color: apellido
    });
    if(nombre.trim().length >= 3 && apellido.length >= 3)
      cleanForm();
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <label htmlFor="">Nombre:</label>
        <input type="text" value={nombre} onChange={nombreOnChange} className={!isNombreOk ? "error" : ""} />
        {!isNombreOk && <p className='errorMessage'>Por favor chequea que la información sea correcta</p>}
        <label htmlFor="">Apellido:</label>
        <input type="text" value={apellido} onChange={apellidoOnChange} className={!isApellidoOk ? "error" : ""} />
        {!isApellidoOk && <p className='errorMessage'>Por favor chequea que la información sea correcta</p>}
        <button type='submit'>Enviar</button>
      </form>
      {validatedFields && <Card data={data} />}
    </div>
  )
}

export default App