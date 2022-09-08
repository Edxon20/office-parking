import React,{Fragment, useState} from 'react';
import './App.css';
import Formulario from './components/Formulario.jsx';

function App() {

  const [clientes,guardarClientes] = useState([]);


  return (

    <Fragment>
      <h1>Administrador clientes</h1>
     
      <div className='container'>
        
        <div className='row'>

          <div className='one-half column'>
            <Formulario
            
            />
          </div>

          <div className='one-half column'>
            2
          </div>

        </div>
       
      </div>
    </Fragment>


  );
}

export default App;
