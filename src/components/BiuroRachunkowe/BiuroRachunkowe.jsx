import React from 'react'
import './BiuroRachunkowe.css'
import biuro from '../../images/biuro.svg'

export default function BiuroRachunkowe() {
  return (
    <div className='container'>
        <div>
            <h2 className='h1'>Biuro rachunkowe</h2>
            <h2>dla przedsiębiorców</h2>
            <p className='p1'>Profesjonalna obsługa księgowa.</p>
            <p>Pracujemy na terenie całej Polski</p>
            <button>Zapytaj o ofertę</button>
        </div>
        <img src={biuro} alt="logo" />
    </div>
  )
}
