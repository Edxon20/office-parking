import React,{Fragment, useState} from 'react';

const Formulario = ({guardarClientes}) =>{

    const [error,setError] = useState(false);

    const [cliente,actualizarCliente] = useState([
        {
          nombre:' ',
          identidad:' ',
          placa:' ',
          horaEntrada:' ',
          fecha:' '
        }
      ]);
      console.log();
    const {nombre,identidad,placa,horaEntrada,fecha} = cliente;
    

    const setNewClient = (e) =>{
        e.preventDefault();     

             
        

        if(nombre.trim() === '' || identidad.trim()=== '' || placa.trim()=== '' || horaEntrada.trim()=== '' || fecha.trim()){
            alert('Pero que a pasao AP');
            setError(true);
        }      

    }

    const actualizarState = (e) =>{
        actualizarCliente({
            ...cliente, 
            [e.target.name] : e.target.value
       });
    }


    return(        

        <Fragment>
            <form
            onSubmit={setNewClient}
            >
                {error ?<p className='alerta-error'>Todos los campos son obligatorios</p> : <p>Todo ok</p>}

                <label>Cliente</label>
                <input 
                type="text" 
                placeholder='Nombre cliente'
                value ={nombre}
                name = 'nombre'
                onChange={actualizarState}
                >         
                </input>

                <label>Identidad</label>
                <input 
                type='number' 
                placeholder='Identidad cliente'
                value={identidad}
                name = 'identidad'
                onChange={actualizarState}
                >
                </input>

                <label>Placa vehiculo</label>
                <input 
                type='text' 
                placeholder='Identidad cliente'
                value={placa}
                name= 'placa'
                onChange={actualizarState}
                >
                </input>

                <label>Hora de entrada</label>
                <input
                 type='time' 
                 placeholder='Identidad cliente'
                 value={horaEntrada}
                 name = 'horaEntrada'
                 onChange={actualizarState}
                 >
                 </input>

                <label>Fecha</label>
                <input type='date' 
                placeholder='Identidad cliente'
                value = {fecha}
                name = 'fecha'
                onChange={actualizarState}
                >

                </input>       

                <button type='submit' className='u-full-width button-primary'>Registrar</button>
            </form>
        </Fragment>
    )
}

export default Formulario; 