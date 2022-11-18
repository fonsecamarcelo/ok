import './estilo.css'  

import React from 'react'

function InputOrdenar() {
  return (
    <>
    <div className='inputOrdenar'>
        <p className='pOrdenar'>Ordenar por:</p>
        <select className='selectOrdenar' required="required">
            <option value="">Nome (A - Z)</option>
            <option value="1">A</option>
            <option value="2">B</option>
            <option value="3">C</option>
            <option value="4">D</option>
            <option value="5">E</option>
            <option value="6">F</option>
        </select>

       

    </div>
    </>
  )
}

export default InputOrdenar