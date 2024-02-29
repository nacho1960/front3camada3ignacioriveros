import React from 'react'

function Card({nombre,apellido}) {
 
  return (
    <div>
       <h2>Datos del formulario:</h2>
       <p>Nombre: {nombre}</p>
       <p>Apellido: {apellido}</p>
    </div>
    
  )
}

export default Card