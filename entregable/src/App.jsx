
import './App.css'
import Card from './components/card/Card'
import { useState } from 'react';

function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(nombre.length >= 2 && nombre.length <= 50 &&nombre.length >= 2 && apellido.length){
        setShow(true)
        setErr(false)
    } else {
        setErr(true)
    }

   
  };


  return (
    <>
    <div style={{border: "3px solid black"}}>
      <h1>formulario de inscripcion: </h1>
      <form onSubmit={handleSubmit}>
        <label nombre="nombre">Nombre:</label>
        <input type="text"  value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <label apellido="apellido">Apellido:</label>
        <input type="text"  value={apellido} onChange={(e) => setApellido(e.target.value)} />
        <button type="submit">Enviar</button>
      </form>
      <Card nombre={nombre} apellido={apellido}/>
      {show ? 
            <>
                <h4>Gracias, {nombre}, tus datos ingresaron correctacmente</h4>
                
            </>
        : <p>ingrese sus datos.</p>
        }
        {err && <h4 style={{color: 'red'}}>Debe colocar la información correctamente</h4>}
    </div >
    

  
    </>
  )
}

export default App
