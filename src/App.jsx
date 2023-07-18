import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'

function App() {
  return (
    <div className='bg-blue-100 h-screen'>
      <div>
        <Header/>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 container mx-auto mt-2 md:mt-20'>
        <div>
            <Formulario/>
        </div>
        <div>
         <Resultado/>
        </div>
      </div>
     
    </div>
  )
}

export default App
