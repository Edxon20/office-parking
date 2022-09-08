import React,{Fragment, useState} from 'react';
import './App.css';
import Formulario from './components/Formulario.jsx';
import Puestos from './components/Puestos.jsx';

function App() {
  
  const [clientes,guardarClientes] = useState([]);
  
  const crearCliente = (cliente) => {
    guardarClientes([
      ...clientes,
      cliente
    ])       
  }

  const marcarSalida = (id) => {

    alert(id);

  }

  return (

    <Fragment>
      <h1>Administrador clientes</h1>
     
      <div className='container'>
        
        <div className='row'>

          <div className='one-half column'>
            <Formulario
            crearCliente={crearCliente}
            />
          </div>

          <div className='one-half column'>
          {clientes.map(cliente => (                
                <Puestos         
                key = {cliente.id}        
                cliente={cliente}
                marcarSalida={marcarSalida}
                />
            ))}  
          </div>
        </div>       
      </div>      
    </Fragment>


  );
}

export default App;
